import { Server } from '@brtmvdl/backend'

import { Logger } from '@brtmvdl/logger'

import { PORT } from './config.js'

const logger = new Logger('Ideal')

const server = new Server()

server.get('/', (_, res) => res.setText('Ideal'))

server.post('/api/v1/accounts/login', (_, res) => res.setJSON({ datetime: Date.now() }))

server.post('/api/v1/accounts/register', (_, res) => res.setJSON({ datetime: Date.now() }))

server.post('/api/v1/projects', (_, res) => res.setJSON({ projects: [] }))

server.listen(PORT, () => logger.log(`running on ${PORT}`))
