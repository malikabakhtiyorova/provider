import { server } from './server-config'

const PORT = process.env.PORT || '3001'

server.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})
