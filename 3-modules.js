/*const amount = 9

if (amount < 10) {
  console.log('small number');
}
else {
  console.log('large number')
}

console.log(`hey it's my first node app!!!`)

console.log(__dirname);

setInterval(()=>{
  console.log('hello world')
}, 1000);*/

//Modules

/*const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade') 
console.log(data)
sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)*/

const os = require('os')
// info about current user
const user = os.userInfo()
console.log('user');
//method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime} seconds`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
}
console.log(currentOs );




