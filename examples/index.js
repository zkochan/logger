const logger = require('..')

logger.on('info', console.log.bind(console))

logger.log('info', 'some-type', 'Helo World!')

const forkedLogger = logger.fork({ foo: 'bar' })

forkedLogger.log('info', 'some-type', 'Helo World!', 1, 2, 3)
