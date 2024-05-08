import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import { Database } from '@brtmvdl/database'

const app = express()
const server = createServer(app)
const io = new Server(server)
const db = new Database({ type: 'fs', config: '/data' })

const setHeaders = (res, error = null, json = {}) => res
  .set('Access-Control-Allow-Origin', '*')
  .send(json)

io.on('connection', (socket) => console.log('connection', socket))

app.get('/', (_, res) => setHeaders(res, null, { id: Date.now() }))

app.get('/dashboard', (_, res) => setHeaders(res, null, { projects: [Date.now()] }))

server.listen(80, () => console.log('server running at http://localhost:80/'))
