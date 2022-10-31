const { people } = require("./people");
const os = require('os');

console.log(people);
// console.log(xyz.ages);

// console.log(os.cpus()[0].model);
console.log(os.platform());
console.log(os.homedir());