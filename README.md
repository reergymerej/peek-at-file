# peek-at-file

Send a file to the server.  It will respond with the binary as utf8.

**Example**

```sh
curl \
  --data-binary @spider.jpg \
   https://jex-peek-at-file.herokuapp.com | tee output.txt
```

If the client requests index, let's give them some html.
