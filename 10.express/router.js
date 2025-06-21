const express=require('express')

const app=express()
const products=[
        {
            "id":"1",
            "name":"Football"
        },
        {
            "id":"2",
            "name":"Cricket"
        },
        {
            "id":"3",
            "name":"Hockey"
        },
    ]

app.get('/',(req,res)=>{
    res.send('This is a Home Page')
})

app.get('/products',(req,res)=>{
    
    res.send(products)
})

app.get('/products/:id',(req,res)=>{
    const id =parseInt(req.params.id)
    const item=products.filter((item)=> item.id == id)
    res.json(item)
})


const port = 3000

app.listen(port,()=>{
    console.log(`The server is running at port ${port}`)
})