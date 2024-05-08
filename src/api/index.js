import { Server } from '@brtmvdl/backend'

import { Database } from '@brtmvdl/database'

const server = new Server()

const db = new Database({ type: 'fs', config: '/data' })

const setHeaders = (res, json = {}) => res.setJSON(json).setHeader('Access-Control-Allow-Origin', '*')

server.get('/', (_, res) => setHeaders(res, { id: Date.now() }))

server.get('/dashboard', (_, res) => setHeaders(res, { list: [Date.now()] }))

server.listen(80)
