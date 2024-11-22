const { writeFile, readFile } = require("fs").promises;

const writer = async () => {
    try {
        await writeFile('./temporary/temp.txt', "Hello World\n")
        await writeFile('./temporary/temp.txt', "Hello World\n", { flag: 'a' })
        await writeFile('./temporary/temp.txt', "Hello World\n", { flag: 'a' })
    } catch (error) {
        console.log(error)
    }
}

const reader = async () => {
    try {
        const result = await readFile('./temporary/temp.txt', 'utf8')
        console.log('readFile Result:', result)
    } catch (error) {
        console.log('Error while reading file', error)
    }
}


const readWrite = async () => {
    await reader()
    await writer()
}

readWrite()