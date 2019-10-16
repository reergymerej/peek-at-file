import {
  createServer,
} from 'http'

import { isIndex, isFavIcon } from './helpers'

const handleBinary = (req, res) => {
  const chunks = []
  return req
    .on('data', (chunk) => chunks.push(chunk))
    .on('end', () => {
      const buffer = Buffer.concat(chunks)
      const string = buffer.toString('utf8')
      console.log(`received ${chunks.length} chunks`)
      res.write(string)
      res.end()
    })
}

const handleGet = (req, res) => {
  if (isIndex(req.url)) {
    res.write('hello')
    return res.end()
  } else if (isFavIcon(req.url)) {
    return res.end()
  }
}

const handlePost = (req, res) => {
  return handleBinary(req, res)
}

const server = createServer((req, res) => {
  switch (req.method) {
  case 'GET':
    return handleGet(req, res)
  case 'POST':
    return handlePost(req, res)
  default:
    req.status(500)
    req.end()
  }
})

const port = process.env.PORT || 3333
server.listen({
  port,
}, () => {
  return console.log(`I am listening. http://localhost:${port}`)
})
