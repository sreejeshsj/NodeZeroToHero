//root file of particular folder

console.log("hello node")
const arr=[1,2,3]

arr.map((item)=>{
    console.log(item)
})
console.log("This is line before timeout")
setTimeout(()=>{
    console.log("This is the middle name")
},1000)
console.log("this is the line after timeout");
