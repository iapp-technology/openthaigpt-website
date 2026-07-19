#!/usr/bin/env node
/**
 * One-time (idempotent) converter: GitBook export -> Docusaurus content.
 *
 * Usage: node scripts/convert-gitbook.mjs <path-to-gitbook-clone>
 *
 * - Copies .gitbook/assets -> static/img (images) and static/video (video),
 *   sanitizing filenames (spaces/parentheses removed).
 * - Copies markdown -> docs/, renaming README.md -> index.md, rewriting
 *   asset references and internal README.md links.
 * - {% embed %} blocks become raw-HTML YouTube iframes or styled link cards
 *   (content stays CommonMark .md; the site uses markdown.format 'detect').
 * - Adds frontmatter: slug preserving the old GitBook URL, title from
 *   SUMMARY.md (emoji stripped), preserved description.
 * - Generates sidebars.ts from SUMMARY.md (order + emoji labels preserved).
 */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const SRC = process.argv[2];
if (!SRC || !fs.existsSync(path.join(SRC, 'SUMMARY.md'))) {
  console.error('Usage: node scripts/convert-gitbook.mjs <path-to-gitbook-clone>');
  process.exit(1);
}
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DOCS = path.join(ROOT, 'docs');
const IMG = path.join(ROOT, 'static', 'img');
const VIDEO = path.join(ROOT, 'static', 'video');

// ---------------------------------------------------------------- assets
const sanitize = (name) => {
  const ext = path.extname(name);
  const base = name
    .slice(0, -ext.length || undefined)
    .normalize('NFC')
    .toLowerCase()
    .replace(/[()]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  return base + ext.toLowerCase();
};

const assetDir = path.join(SRC, '.gitbook', 'assets');
const renameMap = new Map(); // original name -> {sanitized, urlPath}
const used = new Set();
fs.mkdirSync(IMG, {recursive: true});
fs.mkdirSync(VIDEO, {recursive: true});
for (const name of fs.readdirSync(assetDir).sort()) {
  let out = sanitize(name);
  while (used.has(out)) {
    const ext = path.extname(out);
    out = `${out.slice(0, -ext.length)}-x${ext}`;
  }
  used.add(out);
  const isVideo = /\.(mp4|webm|mov)$/i.test(out);
  const destDir = isVideo ? VIDEO : IMG;
  const urlPath = `${isVideo ? '/video/' : '/img/'}${out}`;
  fs.copyFileSync(path.join(assetDir, name), path.join(destDir, out));
  renameMap.set(name, urlPath);
}
console.log(`Assets: copied ${renameMap.size} files`);

// --------------------------------------------------------------- SUMMARY
const summary = fs.readFileSync(path.join(SRC, 'SUMMARY.md'), 'utf8');
const entries = []; // {label, file, depth}
for (const line of summary.split('\n')) {
  const m = line.match(/^(\s*)\* \[(.+)\]\((.+?)\)\s*$/);
  if (m) entries.push({depth: m[1].length / 2, label: m[2], file: m[3]});
}
const labelByFile = new Map(entries.map((e) => [e.file, e.label]));

const stripEmoji = (s) =>
  s.replace(/^[\p{Extended_Pictographic}️‍⃣\s]+/u, '').trim() || s.trim();

// ------------------------------------------------------------ md rewrite
const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const linkCard = (url, title) => {
  let domain = '';
  try {
    domain = new URL(url).hostname.replace(/^www\./, '');
  } catch {
    domain = url;
  }
  const labels = {
    'colab.research.google.com': 'Open in Google Colab',
    'huggingface.co': 'Hugging Face',
    'discord.gg': 'Join our Discord',
    'github.com': 'GitHub',
    'facebook.com': 'Facebook',
    'web.facebook.com': 'Facebook',
    'docs.google.com': 'Google Docs',
    'youtube.com': 'YouTube',
  };
  const text = title || labels[domain] || domain;
  return (
    `<a class="link-card" href="${url}" target="_blank" rel="noopener noreferrer">` +
    `<span class="link-card-title">${text}</span>` +
    `<span class="link-card-domain">${domain}</span></a>`
  );
};

const youtubeId = (url) => {
  const m =
    url.match(/youtube\.com\/watch\?v=([\w-]{6,})/) ||
    url.match(/youtu\.be\/([\w-]{6,})/) ||
    url.match(/youtube\.com\/(?:embed|live)\/([\w-]{6,})/);
  return m ? m[1] : null;
};

const convertEmbed = (url, inner) => {
  const id = youtubeId(url);
  if (id) {
    return (
      `<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/${id}" ` +
      `title="YouTube video" loading="lazy" allowfullscreen ` +
      `allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe></div>`
    );
  }
  // Use inner text as the card title only when it is a real caption,
  // not just the URL repeated as a markdown link.
  let title = '';
  const cleaned = (inner || '').trim();
  if (cleaned) {
    const linkOnly = cleaned.match(/^\[([^\]]*)\]\(([^)]*)\)$/);
    if (!linkOnly) title = cleaned;
    else if (linkOnly[1] && !linkOnly[1].startsWith('http')) title = linkOnly[1];
  }
  return linkCard(url, title);
};

const yamlQuote = (s) => `'${String(s).replace(/'/g, "''")}'`;

const transform = (content, relPath) => {
  // 1. Existing frontmatter (GitBook only emits `description:`).
  let description;
  let body = content;
  const fm = body.match(/^---\n([\s\S]*?)\n---\n/);
  if (fm) {
    const d = fm[1].match(/^description:\s*(?:>-?\s*\n\s*)?(.+)$/m);
    if (d) description = d[1].trim().replace(/^['"]|['"]$/g, '');
    body = body.slice(fm[0].length);
  }

  // 2. GitBook export artifacts. Empty heading-anchor tags are redundant
  // (Docusaurus generates its own heading ids) and nest illegally inside
  // the heading links Docusaurus emits.
  body = body.replace(/&#x20;/g, ' ');
  body = body.replace(/\s*<a href="#[^"]*" id="[^"]*"><\/a>/g, '');

  // 3. Embeds -> raw HTML (block form first, then standalone).
  body = body.replace(
    /{%\s*embed\s+url="([^"]+)"\s*%}([\s\S]*?){%\s*endembed\s*%}/g,
    (_, url, inner) => convertEmbed(url, inner)
  );
  body = body.replace(/{%\s*embed\s+url="([^"]+)"\s*%}/g, (_, url) => convertEmbed(url, ''));

  // 4. Asset references (plain and URL-encoded variants).
  for (const [orig, urlPath] of renameMap) {
    const variants = [orig, encodeURI(orig), orig.replace(/ /g, '%20')];
    for (const v of new Set(variants)) {
      body = body.replace(new RegExp(`(?:\\.\\./)*\\.gitbook/assets/${escapeRe(v)}`, 'g'), urlPath);
    }
  }

  // 5. README.md -> index.md in relative markdown links; GitBook directory
  // links ("../some-dir/") point at that directory's README.
  body = body.replace(/\]\(([^)]*?)README\.md/g, ']($1index.md');
  body = body.replace(
    /\]\((?!https?:\/\/)([^)\s]*?)\/(\s+"[^"]*")?\)/g,
    ']($1/index.md$2)'
  );

  // 6. Frontmatter for Docusaurus: slug preserves the old GitBook URL.
  const isReadme = path.basename(relPath) === 'README.md';
  const dir = path.dirname(relPath) === '.' ? '' : path.dirname(relPath);
  const slug = isReadme
    ? `/${dir}`
    : `/${relPath.replace(/\.md$/, '')}`;
  const label = labelByFile.get(relPath);
  const lines = ['---'];
  if (label) lines.push(`title: ${yamlQuote(stripEmoji(label))}`);
  lines.push(`slug: ${yamlQuote(slug === '/' ? '/' : slug)}`);
  if (description) lines.push(`description: ${yamlQuote(description)}`);
  lines.push('---', '');
  return lines.join('\n') + body;
};

// ------------------------------------------------------------ copy docs
const walk = (dir) =>
  fs.readdirSync(dir, {withFileTypes: true}).flatMap((e) => {
    if (e.name.startsWith('.')) return [];
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : e.name.endsWith('.md') ? [p] : [];
  });

fs.rmSync(DOCS, {recursive: true, force: true});
const stubs = [];
const leftovers = [];
for (const abs of walk(SRC)) {
  const rel = path.relative(SRC, abs).split(path.sep).join('/');
  if (rel === 'SUMMARY.md') continue;
  const out = transform(fs.readFileSync(abs, 'utf8'), rel);
  const outRel = path.basename(rel) === 'README.md'
    ? rel.replace(/README\.md$/, 'index.md')
    : rel;
  const dest = path.join(DOCS, outRel);
  fs.mkdirSync(path.dirname(dest), {recursive: true});
  fs.writeFileSync(dest, out);
  const bodyLen = out.replace(/^---[\s\S]*?---\n/, '').trim().length;
  if (bodyLen < 120) stubs.push(outRel);
  if (/{%|\.gitbook\/assets/.test(out)) leftovers.push(outRel);
}

// ------------------------------------------------------------- sidebars
const docId = (file) => {
  const p = file.replace(/\.md$/, '');
  return path.basename(file) === 'README.md' ? (path.dirname(file) === '.' ? 'index' : `${path.dirname(file)}/index`) : p;
};

const buildTree = (list) => {
  const root = {children: []};
  const stack = [root];
  for (const e of list) {
    const node = {...e, children: []};
    stack.length = e.depth + 1;
    stack[stack.length - 1].children.push(node);
    stack.push(node);
  }
  return root.children;
};

const emit = (nodes, indent) => {
  const pad = '  '.repeat(indent);
  return nodes
    .map((n) => {
      const id = docId(n.file);
      const label = JSON.stringify(n.label);
      if (n.children.length === 0) {
        return `${pad}{type: 'doc', id: ${JSON.stringify(id)}, label: ${label}},`;
      }
      const link = path.basename(n.file) === 'README.md'
        ? `link: {type: 'doc', id: ${JSON.stringify(id)}},\n${pad}  `
        : '';
      return (
        `${pad}{\n${pad}  type: 'category',\n${pad}  label: ${label},\n${pad}  ${link}items: [\n` +
        emit(n.children, indent + 2) +
        `\n${pad}  ],\n${pad}},`
      );
    })
    .join('\n');
};

const tree = buildTree(entries);
const sidebars = `import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// Generated by scripts/convert-gitbook.mjs from the GitBook SUMMARY.md.
const sidebars: SidebarsConfig = {
  docs: [
${emit(tree, 2)}
  ],
};

export default sidebars;
`;
fs.writeFileSync(path.join(ROOT, 'sidebars.ts'), sidebars);

console.log(`Docs: converted ${entries.length} pages`);
if (stubs.length) console.log(`Stub pages (thin content, enrich later):\n  ${stubs.join('\n  ')}`);
if (leftovers.length) console.log(`WARNING unconverted syntax remains in:\n  ${leftovers.join('\n  ')}`);
