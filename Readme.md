
# upon

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Run a function upon some arguments

## Installation

    $ npm install @f/upon

## Usage

```js
var upon = require('@f/upon')

upon(4)(isEven) === true
map(upon(4), [isEven, isOdd]) === [true, false]
```

This is very useful as a primitive for applying a list of functions to a value or set of values. It's also nice generally whenever you know what you want to process before you know how you want to process it.

## API

### upon(...args)(fn)

- `args` - An arbitrary argument list to be passed to `fn`.
- `fn` - The function that you want to apply to `args`.

**Returns:** A function that accepts `fn` and passes `args` to it.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/upon.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/upon
[git-image]: https://img.shields.io/github/tag/micro-js/upon.svg
[git-url]: https://github.com/micro-js/upon
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/upon.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/upon
