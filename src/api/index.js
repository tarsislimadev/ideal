import { Server } from '@brtmvdl/backend'

import { Database } from '@brtmvdl/database'

const server = new Server()

const db = new Database({ type: 'fs', config: '/data' })

server.get('/', (req, res) => res.setJSON({ endpoint: 'index', id: Date.now() }))

server.get('/dashboard', (req, res) => res.setJSON({ endpoint: 'dashboard', id: Date.now() }))

server.listen(80)
