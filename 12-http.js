const http = require('http');

const server = http.createServer((req, res)=>{
  if(req.url === '/') {
    res.end('welcome to our home page')
  }
  if(req.url === '/about') {
    res.end('here is our short history')
  }
  res.end(`<h1>oops!</h1>
    <p1>we can't seem to find the page you are looking for</p1>
    <a href='/' >back to home!</a>`)
})

server.listen(5000)