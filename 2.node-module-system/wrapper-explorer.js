console.log("node Module wrapper demo23");

console.log('__filename in wrapper explorer',__filename);
console.log('__dirname',__dirname);
const greet=function(name){
    console.log(`hello ${name}`);}

module.exports={
    greet
    
    
}