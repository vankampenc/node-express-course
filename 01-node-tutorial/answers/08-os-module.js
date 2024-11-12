const os = require("os");

const osUpMin = Math.floor(os.uptime() / 60)
const osRemainderSec = os.uptime() % 60

console.log(`The currrent version of the OS is: ${os.version()}`);
console.log(`The uptime on the OS is ${osUpMin} minutes and ${osRemainderSec} seconds`);
