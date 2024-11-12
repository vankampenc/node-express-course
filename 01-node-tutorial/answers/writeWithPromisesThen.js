const { writeFile, readFile } = require("fs").promises;

writeFile('./temporary/temp.txt', "Hello World1\n")
.then(() => 
    writeFile('./temporary/temp.txt', "Hello World2\n", { flag: 'a' })
)
.then(() => 
    writeFile('./temporary/temp.txt', "Hello World3\n", { flag: 'a' })
)
.then(() => readFile('./temporary/temp.txt', 'utf8').then((data) => {
    console.log(data)
}
))
.catch((error) => console.log("An error occured: ", error))