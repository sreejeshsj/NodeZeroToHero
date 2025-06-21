const express=require('express')

const app=express()

const myFirstMiddleware=(req,res,next)=>{
    console.log("this is my first middle ware")
    next()
}
app.use(myFirstMiddleware)

app.get('/',(req,res)=>{
    res.send("This is the home page")
})

app.get('/about',(req,res)=>{
    res.send('This is the about page')
})

const port = 3000

app.listen(port,()=>{
    console.log("the server is running on port:"+port)
})