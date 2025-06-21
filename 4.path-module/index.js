const path=require('path')

console.log("Directory name:",path.dirname(__filename))
console.log("file extension:",path.extname(__filename))
console.log('file name:',path.basename(__filename))

const joinPath = path.join('user','document','node','project')
console.log("Joined path",joinPath);

const resolve=path.resolve('/user','document','node','project')

console.log("Resolve:",resolve)


const normalize = path.normalize('/user/document/../node/project')
console.log(normalize);
