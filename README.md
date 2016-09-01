# @zkochan/logger

> A simple logger

<!--@shields('npm', 'travis')-->
[![npm version](https://img.shields.io/npm/v/@zkochan/logger.svg)](https://www.npmjs.com/package/@zkochan/logger) [![Build Status](https://img.shields.io/travis/zkochan/logger/master.svg)](https://travis-ci.org/zkochan/logger)
<!--/@-->

## Installation

```sh
npm i -S @zkochan/logger
```

## Usage

<!--@example('./examples/index.js')-->
```js
const logger = require('@zkochan/logger')

logger.on('info', console.log.bind(console))

logger.log('info', 'some-type', 'Helo World!')
//> null 'info' 'some-type' 'Helo World!'

const forkedLogger = logger.fork({ foo: 'bar' })

forkedLogger.log('info', 'some-type', 'Helo World!', 1, 2, 3)
//> { foo: 'bar' } 'info' 'some-type' 'Helo World!' 1 2 3
```
<!--/@-->

## License

[MIT](./LICENSE) © Zoltan Kochan
