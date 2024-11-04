const { readFileSync, writeFileSync } = require('fs')

writeFileSync('./temporary/fileA.txt', "Hello World\n")
writeFileSync('./temporary/fileA.txt', "Hello World2\n", { flag: 'a' })
writeFileSync('./temporary/fileA.txt', "Hello World3", { flag: 'a' })

let readFile = readFileSync("./temporary/fileA.txt", "utf8")

console.log(readFile)