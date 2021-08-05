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
import 'log-editor'
```

Then use `console.logEditor` instead of `console.log` whenever you want to see the result in editor. It will launch the corresponsing editor powered by [`launch_editor`](https://github.com/yyx990803/launch-editor).

```ts
console.logEditor(largeObject)
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

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License © 2021 [Anthony Fu](https://github.com/antfu)
