const { createReadStream } = require('fs')

const stream = createReadStream('../content/big.txt', {
    highWaterMark: 100,
    encoding: 'utf8',
})

let counter = 0


stream.on('data', (result) => {
    console.log(result)
    counter++
})

stream.on('end', () => {
    console.log(`The total # of chunks are ${counter}`)
})

stream.on('error', (error) => {
    console.log('An error occured: ', error)
})