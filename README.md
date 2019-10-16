# peek-at-file

How can we send binary using curl?
https://stackoverflow.com/questions/4053937/post-binary-file-with-cmd-line-curl-using-headers-contained-in-the-file

```
curl \
       --header "Content-Type:application/octet-stream" \
       --data-binary @some.file \
       http://localhost:3333
```

How can I receive the file in Node?
  Read data streamed in the request, on 'data'.
