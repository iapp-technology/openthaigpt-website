# OpenThaiGPT Website

Source of https://openthaigpt.aieat.or.th — the OpenThaiGPT documentation site,
built with [Docusaurus](https://docusaurus.io). Migrated from GitBook
([openthaigpt-gitbook](https://github.com/iapp-technology/openthaigpt-gitbook));
content now lives in `docs/` and is edited directly in this repo.

## Develop

```bash
npm install
npm start          # dev server at http://localhost:3000
npm run build      # production build (fails on broken links)
```

## Deploy

```bash
./deploy.sh        # builds locally, rsyncs to the "web" server, rebuilds the
                   # Docker image there, restarts the openthaigpt-website
                   # container (127.0.0.1:3004 behind the host nginx + TLS)
```

## Content notes

- `docs/` was converted from the GitBook export by `scripts/convert-gitbook.mjs`
  (kept for reference; safe to re-run against a GitBook clone, but it will
  overwrite `docs/`, `sidebars.ts`, and re-copy assets).
- `.md` files are parsed as CommonMark (`markdown.format: 'detect'`), so the
  GitBook-exported raw HTML (tables, `<mark>`, figures) works as-is. New pages
  that need React components should use `.mdx`.
- Page slugs preserve the original GitBook URLs.
