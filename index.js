'use strict'
const EventEmitter = require('eventemitter2')
const slice = Array.prototype.slice

const emitter = new EventEmitter()

function createLogger (context) {
  const log = function (level, type, message) {
    const args = slice.call(arguments)
    emitter.emit.apply(emitter, [args[0], context].concat(args))
  }
  return {
    log,
    warn: log.bind(null, 'warn'),
    info: log.bind(null, 'info'),
    debug: log.bind(null, 'debug'),
    error: log.bind(null, 'error'),
    fork (newContext) {
      return createLogger(Object.assign({}, context, newContext))
    }
  }
}

module.exports = createLogger()

module.exports.on = emitter.on.bind(emitter)
module.exports.onAny = emitter.onAny.bind(emitter)
