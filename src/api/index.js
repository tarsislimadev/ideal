import { Server } from '@brtmvdl/backend'

import { Logger } from '@brtmvdl/logger'

import { PORT } from './config.js'

const server = new Server()

const logger = new Logger('Ideal')

server.get('/', (_, res) => res.setText('Ideal'))

server.listen(PORT, () => logger.log(`running on ${PORT}`))
