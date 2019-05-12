# Import Pika Web

A Babel plugin for transforming imports on files to ESM imports for @pika/web.

```js
import preact from 'preact'; // Transforms this 🚫
import preact from './web_modules/preact.js'; // Into this ✅
```

## Installation

```bash
npm i -D babel-plugin-import-pika-web
```

## Usage

Add the following to `.babelrc`:

```json
{
  "plugins": [
    [
      "import-pika-web",
      {
        "dir": "dist/web_modules",
        "ignore": ["jest"]
      }
    ]
  ]
}
```

## Options

| Name     | Default         | Description                                                                                                                                       |
| :------- | :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| `dir`    | `"web_modules"` | Location of the web modules. Should usually match the `--dest` option for @pika/web.                                                              |
| `addJS`  | `true`          | Append `.js` at the end of all modules.<sup>\*</sup>                                                                                              |
| `ignore` | `[]`            | Exact names of modules to ignore, if you find it transforming things it shouldn’t (e.g. `"react"` will match `"react"` but ignore `"react-dom"`). |

_\* Note: this will add `.js` to **all** modules, even if it’s already there.
This will assume your project is perfectly consistent in using or not using
extensions._

## Examples

[TypeScript + @pika/web][pika-web-preact]

[pika-web-preact]: https://github.com/dangodev/pika-web-preact
