const firstModule=require('./first-module')

console.log(firstModule.sub(10,30));


try{
    console.log('this is in try block')
    let result=firstModule.div(10,0)
    console.log(result)
    console.log("this is after try block but inside");
    
}catch(e){
    console.log("this is error"+" "+e.message);
    
}
