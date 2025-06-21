

//example for callback


function play(name,callback){
    console.log(`${name} play`)
    callback()
}

function football(){
    console.log("football")
}

play("sreejesh",football)