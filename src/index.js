import {
  createServer,
} from 'http'

const server = createServer((req, res) => {
  console.log('hello')
  res.end()
})

const port = 3333
server.listen({
  port,
}, () => {
  return console.log(`I am listening. http://localhost:${port}`)
})
