# Preact + TypeScript + @pika/web Example

Example using TypeScript, Preact, and [@pika/web], a new ESM bundler.

## Example

```bash
npm i
npm start
```

It’ll run a multi-page app at `localhost:5000`.

## Babel Plugin

This example app makes use of [babel-plugin-import-pika-web][babel-plugin].
It transforms all absolute imports like so:

```js
import preact from "preact"; // Transforms this 🚫
import preact from "./web_modules/preact.js"; // Into this ✅
```

[Read the docs][babel-plugin] to learn more.

[@pika/web]: https://github.com/pikapkg/web
[babel-plugin]: https://github.com/dangodev/babel-plugin-import-pika-web
