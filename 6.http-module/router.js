 const http=require('http')

 const server=http.createServer((req,res)=>{
    if (req.url=='/'){
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.end('this is home page')
    }
    if (req.url=='/profile'){
        res.writeHead(200,{'Content-type':'text/plain'})
        res.end('this is a profile page')
    }
 })

 const port = 3000

 server.listen(port,()=>{console.log(`the server is running on port ${port}`)})