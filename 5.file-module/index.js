const fs=require('fs')
const path=require('path')

const dataFolder= path.join(__dirname,'data')
if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder)
    console.log(dataFolder,"created")
}

const dataFile=path.join(dataFolder,'example.txt')

if (!fs.existsSync(dataFile)){
    fs.writeFileSync(dataFile,"hello from palakkad")
}
console.log("file created successfully")

const readContentFile=fs.readFileSync(dataFile,"utf8")
console.log("file content",readContentFile)
fs.appendFileSync(dataFile,"this is the new line")
console.log(readContentFile)

//asyn way of file creation

const asyncFilePath=path.join(dataFolder,"async-example.txt")
fs.writeFile(asyncFilePath,"hello this is async",(err)=>{
    if (err) throw err
    console.log("Async file is created successfully")

    fs.readFile(asyncFilePath,'utf-8',(err,data)=>{
        if (err) throw err
        console.log(data)

        fs.appendFile(asyncFilePath,"\nkthis is new line",(err)=>{
            if (err) throw err
            console.log("Newly add file:")

            fs.readFile(asyncFilePath,'utf-8',(err,updatedData)=>{
                if (err) throw err
                console.log(updatedData)
            })
        })

    })
})