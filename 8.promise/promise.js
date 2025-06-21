function ride(){
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('wait')
        })
        reject("wrong")
    
    }).then((response)=>console.log(response)).catch((err)=>console.log(err))
}

ride()