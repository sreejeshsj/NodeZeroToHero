const express=require('express')

const app=express()

app.use(express.json())
let books=[
    {
        id:"101",
        title:"Book1"
    },
    {
        id:"102",
        title:"Book2"
    },
    {
        id:"103",
        title:"Book3"
    },
]

// Home page url
app.get('/',(req,res)=>{
    res.json({message:"welcome to home page"})
})

//router for retrive all books
app.get('/books',(req,res)=>{
    res.json(books)
})

//router for retrive a particular book
app.get('/books/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    if (id > 100+ books.length){
        return res.json("id is not found")
    }
    const singleBook=books.find((item)=> item.id == id)
    res.json(singleBook)
})

//router for adding a new book
app.post('/add',(req,res)=>{
    const lastElement=books[books.length-1]
    const lastId=Number(lastElement.id)
    const newBook={
        id:String(1 + lastId),
        title:`book${books.length+1}`
    }

    books.push(newBook)

    res.status(200).json({
        data:newBook,
        message:"Book added successfully"
    })
})

//router for updating a particular book
app.put('/updatebook/:id',(req,res)=>{
    const updatedBook=books.find((item)=>item.id==req.params.id) 
    console.log(updatedBook)
    if( updatedBook ){
         console.log(updatedBook.title)
        updatedBook.title = req.body.title || updatedBook.title
        res.status(200).json({
            message:`Book with id ${req.params.id} updated successfully`,
            updatedBook
        })
    }else{
        res.json("book is not found")
    }
})
//deleting a particular book

app.delete('/delete/:id',(req,res)=>{
    const bookIndex= books.findIndex(item=>item.id==req.params.id)
    if (bookIndex != -1){
        const deletedBook=books.splice(bookIndex,1)
        res.status(200).json({
            message:"Book is deleted successfully",
            deletedBook
        })
    }else{
        res.json("Book is not found!")
    }
})
const port=3000

app.listen(port,()=>{
    console.log("The server is running on "+port)
})