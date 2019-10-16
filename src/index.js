import {
  createServer,
} from 'http'
import * as fs from 'fs'
import * as path from 'path'

import { isIndex, isFavIcon } from './helpers'

const handleBinary = (req, res) => {
  const chunks = []
  return req
    .on('data', (chunk) => chunks.push(chunk))
    .on('end', () => {
      const buffer = Buffer.concat(chunks)
      const string = buffer.toString('utf8')
      console.log(`received ${chunks.length} chunks`)
      // console.log(req.headers)
      res.setHeader('content-type', 'text/html')
      res.write(string)
      res.end()
    })
}

const serveIndex = (req, res) => {
  const file = path.join(__dirname, '../static/index.html')
  return fs.createReadStream(file)
    .on('error', (error) => {
      console.error(error)
      res.statusCode = 500
      res.end()
    })
    .pipe(res)
}

const handleGet = (req, res) => {
  if (isIndex(req.url)) {
    return serveIndex(req, res)
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
    req.statusCode = 500
    req.end()
  }
})

const port = process.env.PORT || 3333
server.listen({
  port,
}, () => {
  return console.log(`I am listening. http://localhost:${port}`)
})
