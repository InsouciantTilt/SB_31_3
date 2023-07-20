// Exercises from videos
// const {add, subtract, multiply} = require('./names')
// console.log(add(x,y))
// console.log(subtract(x,y))
// console.log(multiply(x,y))

const fs = require('fs')

// fs.readFile('poem.txt', 'utf8', (err, data) => {
//     if(err){
//         console.log("ERROR:", err);
//         process.kill(1);
//     }
//     console.log("DATA...", data)
// })

// const line = "And eternity in an hour";
// fs.writeFile('poem.txt', line, {encoding:'utf8', flag:'a'}, err =>{
//     if(err){
//         console.log("ERROR:", err)
//         process.kill(1);
//     }
//     console.log("It worked!")
// })

const {cat, webCat} = require('./step3')