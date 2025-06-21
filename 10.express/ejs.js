const express=require('express')
const path=require('path')
const app=express()

app.set('view engine','ejs')

app.set('views',path.join(__dirname,'views'))

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
    res.render('Home',{title:'Home',product:products})
})


app.listen(3000,()=>console.log("started"))
