const cors = require('cors');
const express =require('express')
const { json } =require('express')

const server = express()
server.use(
  cors({
    origin: 'http://localhost:300'
  })
)

server.use(json())

server.get('/', (_: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; }; }): void => {
  res.status(200).json({ message: 'Server is running' })
})
server.use('/auth/fake-token', (_: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { token: string; status: number; }): any; new(): any; }; }; }) => {
  const token = `Bearer ${new Date().toISOString()}`
  return res.status(200).json({ token, status: 200 })
})

export { server }
