# log-editor

[![NPM version](https://img.shields.io/npm/v/log-editor?color=a1b858&label=)](https://www.npmjs.com/package/log-editor)

Fan of using `console.log` to debugger? Use your editor to inspect the log instead of scrolling the congested terminal.

```diff
- console.log(largeObject)
+ console.logEditor(largeObject)
```

## Install

> Only works in Node.js environment.

```bash
npm i -D log-editor
```

Add the following statement at the very beginning of your script:

```ts
// inject to `console`
import 'log-editor/console'
```

Then use `console.logEditor` instead of `console.log` whenever you want to see the result in editor. It will launch the corresponsing editor powered by [`launch_editor`](https://github.com/yyx990803/launch-editor).

```ts
console.logEditor(largeObject)
```

or directly import without injection

```ts
import { logEditor } from 'log-editor'
```

## Options

### Named log

Pass a second argument to specify the key. When calling same key for multiple times, the same temp file will be used and overrides the previous content.

```ts
console.logEditor(largeObject, 'foo')
```

To accumulate the result of multiple calls, setting the `override` to false.

```ts
console.logEditor('message 1', 'key', { override: false })
console.logEditor('message 2', 'key', { override: false })
```

### File Extension

By default, `log-editor` will use `log` or `json` as the temp file's extension. You can change it by passing `extension` in the options so your editor could provide proper syntax hightlight for you.

```ts
const code = `import 'log-editor'`

console.logEditor(code, 'code', { extension: 'ts' })

console.logEditor({ foo: 'bar' }) // will auto infer to use `json` as extension
console.logEditor('bar') // will use `log` as extension
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License © 2021 [Anthony Fu](https://github.com/antfu)
