function play() {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve("Wait for me ");
    }, 2000)
  );
}

async function decide() {
  let a = play();
  console.log("this will not print", a);
  let res = await play();
  console.log(res);
  console.log("i will wait dont worry");
}

decide();

function division(a, b) {
  return new Promise((resolve, reject) => {
    if (b == 0) {
      reject("We cant divide a number using 0")
    } else {
        resolve(a/b)
    }
  });
}


async  function run(){
    try{
        const res=await division(10,2)
        console.log(res)
    }catch(err){
        console.log(err)
    }
    
}

run()
