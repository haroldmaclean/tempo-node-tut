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

const_ = require('lodash')

const items = [1, [2,[3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);