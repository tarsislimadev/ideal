import { Server } from '@brtmvdl/backend'

import { Database } from '@brtmvdl/database'

const server = new Server()

const db = new Database({ type: 'fs', config: '/data' })

server.get('/', (_, res) => {
  return res.setJSON({ id: Date.now() })
})

server.get('/dashboard', (_, res) => {
  return res.setJSON({ id: Date.now() })
})

server.listen(80)
