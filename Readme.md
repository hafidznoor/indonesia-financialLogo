# ⚠️ DEPRECATED — use idn-finlogos instead

This package (`indo-financial-logolibrary`, v1) is **no longer maintained**.

## Why

v1 used a runtime `fs.readdirSync` to expose logo paths. That meant:

- It couldn't be used in browser bundlers (Vite, webpack, esbuild, Rollup).
- It was only published to GitHub Packages, not public npm — requiring `.npmrc` auth setup.
- Filenames contained spaces (`BCA Digital.svg`) — bad for URLs and JS identifiers.

## Use v2 instead

[**idn-finlogos**](https://github.com/hafidznoor/idn-finlogos) — public npm, jsDelivr/unpkg CDN, per-logo ESM imports, TypeScript types, ~10× smaller download.

```bash
npm install idn-finlogos
```

```js
import bca from 'idn-finlogos/icons/bca';
```

Or via CDN, no install:

```html
<img src="https://cdn.jsdelivr.net/npm/idn-finlogos@2/dist/icons/bca.svg">
```

## Migrating

See [MIGRATION.md](https://github.com/hafidznoor/idn-finlogos/blob/main/MIGRATION.md) for a full v1 → v2 slug mapping table.

## License clarification

v1's `package.json` claimed `CC-BY-NC-4.0` while the `LICENSE` file was MIT — those were contradictory. v2 dual-licenses cleanly: **MIT for the code, CC-BY-NC-4.0 for the SVG assets**.

This repo is left online (archived) so any existing `npm install` commands keep working, but no further updates will land here.
