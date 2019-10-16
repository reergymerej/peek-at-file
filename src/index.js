import {
  createServer,
} from 'http'

const server = createServer((req, res) => {
  // Read the file.
  // https://stackoverflow.com/questions/4053937/post-binary-file-with-cmd-line-curl-using-headers-contained-in-the-file
  const chunks = []
  req.on('data', (chunk) => {
    chunks.push(chunk)
  })
    .on('end', () => {
      const buffer = Buffer.concat(chunks)
      const string = buffer.toString('utf8')
      console.log(`received ${chunks.length} chunks`)
      // console.log(string)
      res.write(string)
      res.end()
    })
})

const port = 3333
server.listen({
  port,
}, () => {
  return console.log(`I am listening. http://localhost:${port}`)
})
