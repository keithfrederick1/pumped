/*eslint-disable*/


const argon2 = require('argon2');
const readline = require("readline");
//argon 2 is a hashing library, readline is built into node. serves as a GUI

//standard input, standard output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


// rl.question("Enter your password:",)
const hasher =  (password) => {
//specifying the type argon2id stores your salt wth your hash so you dont have to worry about it
 const hash =  argon2.hash(password, {type: argon2.argon2id});
 return hash
  //console.log(`hash = ${hash}`);
}


// //to hash a password
// try {
//   const hash = await
// } catch (err) {
//   //...
// }

//to verify a password
// try {
//   if (await argon2.verify("<big long hash>", "password")) {
//     // password match
//   } else {
//     // password did not match
//   }
// } catch (err) {
//   // internal failure
// }

module.exports = {
  hasher
};