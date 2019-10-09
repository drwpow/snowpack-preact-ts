![Michael Scott’s Dunder Mifflin
        Scranton Meredith Palmer Memorial Celebrity Rabies Awareness Pro-Am Fun
        Run Race For The Cure](./src/static/michaelscottsdundermifflinscrantonmeredithpalmermemorialcelebrityrabiesawarenessproamfunrunraceforthecure.gif)

# @pika/web + Preact + TypeScript example

Example using TypeScript, Preact, and [@pika/web][@pika/web], a new ESM bundler.

## Other Languages

- [Vue][pika-web-vue]

## Example

```bash
npm i
npm start
```

It’ll run a multi-page app at `localhost:5000`.

_Note: changes to TypeScript & CSS files will re-build automatically, but
changes to `src/index.html` will require a restart of the dev server_

### 💁 Explanation

Type handling is the difficult part of using TypeScript with @pika/web, since
browsers don’t support it. The core concepts of pulling this off are:

1. Having a separate `src/` and `dist/` folders
1. Using this fix in `tsconfig.json` ([discussion][tsconfig]):
   ```json
     "compilerOptions": {
       "paths": {
         "/web_modules/*.js": [
           "node_modules/@types/*",
           "node_modules/*",
           "web_modules/*.js",
         ]
       }
     }
   ```

The first point is a rather obvious one: since TypeScript isn’t supported by
browsers, we’ll have to keep our source code separate from our compile
directory. That’s easy enough, but when you compile it, now you have a lot of
these in your code:

```js
import preact from "preact";
```

A browser doesn’t know what to do with that! That’s not a proper path, and
it’s also missing the `.js` extension. However, if you try modifying your TypeScript to:

```ts
import preact from "./web_modules/preact.js";
```

Now TypeScript can’t load the files! However, by aliasing these imports a
special way, we can do something clever:

```json
  "compilerOptions": {
    "paths": {
      "/web_modules/*.js": [
        "node_modules/@types/*",
        "node_modules/*",
        "web_modules/*.js",
      ]
    }
  }
```

This lets us do the following in our project (we’ll always need to do this
for all @pika/web modules):

```ts
import preact from "/web_modules/preact.js";
```

Let’s break down what this tells TypeScript:

- `/web_modules/*.js` tells TypeScript to take any import matching this
  pattern and treat it differently (“this pattern” meaning any import that
  starts with a `/`, then has `web_modules`, then anything (`*`), then ends in
  `.js`).
- How should TypeScript treat them differently? Well, it should try and find the `*` in any of the following folders:
  - First, try `node_modules/@types/*` (for the modules that have external types)
  - Next, try `node_modules/*` to see if the original library has types
  - Lastly, try `web_modules/*` to see if @pika/web ported the types over.

Usually, the types will be found somewhere within `node_modules` and
TypeScript is happy.

But wait—what about browsers? Well that’s the best part! If we look at our output code:

```js
import preact from "/web_modules/preact.js";
```

That `/web_modules/preact.js` resolves to be an actual path to our ESM on our
server (assuming `web_modules` was installed at the root)! So the alias we
were using for TypeScript also happened to be a valid path the browser
understands.

If you need to install `web_modules` somewhere else other than the root, then
you can change the `--dest` of @pika/web as well as the option under
`"paths"` in `tsconfig.json` as-needed.

---

If you’re using ESLint, you’ll have to add a few more rules to keep it happy
(you may already be familiar with this if you’ve used TypeScript & JSX
before):

```json
{
  "rules": {
    "import/extensions": "off", // we need this for browsers
    "import/no-absolute-path": "off", // we also need this
    "import/no-unresolved": "off", // TypeScript got this
    "react/jsx-filename-extension": [
      "error",
      { "extensions": [".js", ".jsx", ".tsx"] }
    ]
  }
}
```

[@pika/web]: https://github.com/pikapkg/web
[babel-plugin]: https://github.com/dangodev/babel-plugin-import-pika-web
[pika-web-vue]: https://github.com/dangodev/pika-web-vue
[tsconfig]: https://github.com/pikapkg/web/issues/4#issuecomment-469094924
