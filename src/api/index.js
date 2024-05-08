import { Server } from 'express'

import { Database } from '@brtmvdl/database'

const db = new Database({ type: 'fs', config: '/data' })

const setHeaders = (res, error = null, json = {}) => res.setJSON(json).setHeader('Access-Control-Allow-Origin', '*')

const server = new Server()

server.get('/', (_, res) => setHeaders(res, null, { id: Date.now() }))

server.get('/dashboard', (_, res) => setHeaders(res, null, { projects: [Date.now()] }))

server.listen(80)
