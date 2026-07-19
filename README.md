# OpenThai Website

Source of https://openthaigpt.aieat.or.th — the OpenThai (formerly OpenThaiGPT)
documentation site, built with [Docusaurus](https://docusaurus.io). Migrated from
GitBook ([openthaigpt-gitbook](https://github.com/iapp-technology/openthaigpt-gitbook));
content now lives in `docs/` and is edited directly in this repo.

## Develop

```bash
npm install
npm start                        # Thai dev server at http://localhost:3000
npm start -- --locale en         # preview a single translation
npm run build                    # builds all locales; fails on broken links
```

## Deploy

```bash
./deploy.sh        # builds locally, rsyncs to the "web" server, rebuilds the
                   # Docker image there, restarts the openthaigpt-website
                   # container (127.0.0.1:3004 behind the host nginx + TLS)
```

## Languages

Thai is the default locale (served at `/`); English is at `/en/` and Simplified
Chinese at `/zh-Hans/`, with a switcher in the navbar.

- Page content translations live in
  `i18n/<locale>/docusaurus-plugin-content-docs/current/<same path as in docs/>`.
  A page with no translation falls back to the Thai original, so partial
  translation never breaks the build.
- Sidebar labels, navbar, and footer strings are in
  `i18n/<locale>/docusaurus-plugin-content-docs/current.json` and
  `i18n/<locale>/docusaurus-theme-classic/*.json`.
- After adding or relabelling a page, run
  `npm run write-translations -- --locale en` (and `--locale zh-Hans`) to add the
  new keys, then fill in the `message` fields.
- **When translating a page, copy its `slug:` frontmatter verbatim** — the slug
  defines the URL within each locale.
- The announcement bar is not covered by Docusaurus i18n; keep its text bilingual.

## Content notes

- `docs/` was originally converted from the GitBook export by
  `scripts/convert-gitbook.mjs`. That script is kept for reference only —
  re-running it overwrites `docs/` and `sidebars.ts` and would discard later edits.
- `.md` files are parsed as CommonMark (`markdown.format: 'detect'`), so the
  GitBook-exported raw HTML (tables, `<mark>`, figures) works as-is. New pages
  that need React components must use `.mdx`.
- Page slugs preserve the original GitBook URLs.
- `sidebars.ts` is maintained by hand.
