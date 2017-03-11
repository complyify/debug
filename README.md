# @complyify/debug

Drop in replacement for [debug] that adds some additional formatter extensions described below.

## Installation

`npm install @complyify/debug`

## Formatters

`%b` bit array from a number or a buffer

```js
import Debug from '@complyify/debug';
const debug = Debug('test:app');
const buffer = new Buffer(1);
buffer.fill(0);
const byte = 0b10101010;
debug('some buffer as a bit array: %b', buffer);
debug('some number as a bit array: %b', byte);
```

results in debug output

```shell
  test:app some buffer as a bit array: 0,0,0,0,0,0,0,0
  test:app some buffer as a bit array: 1,0,1,0,1,0,1,0
```

`%h` hex string from a number or a buffer

```js
import Debug from '@complyify/debug';
const debug = Debug('test:app');
const buffer = new Buffer(1);
buffer.fill(0);
const byte = 0b10101010;
debug('some buffer as a hex string: %h', buffer);
debug('some number as a hex string: %h', byte);
```

results in debug output

```shell
  test:app some buffer as a hex string: 0x00
  test:app some buffer as a hex string: 0xAA
```

[debug]: https://github.com/visionmedia/debug
