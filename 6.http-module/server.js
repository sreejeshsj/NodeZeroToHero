const http=require('http')

const server=http.createServer((req,res)=>{
    
    res.writeHead(200, {"Content-Type":"text/plain"})
    res.end("hello node js from http module")
})

const port = 3000

server.listen(port,()=>{
    console.log(`server is now listering to port ${port} `)
})