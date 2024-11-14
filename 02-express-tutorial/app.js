console.log('Express Tutorial')

const express = require('express')
const app = express()
const {products} = require('./data')


app.use(express.static('./public'))

app.get('/api/v1/test', (req, res) => {
    res.json({ message: "It worked"})
})

//All Products
app.get('/api/v1/products', (req, res) => {
    const newProducts = products.map((product) => {
        const {name, image} = product
        return {name, image}
    })
    res.json(newProducts)
})

//Single Product
app.get('/api/v1/products/:productID', (req, res) =>  {
    const { productID } = req.params

    const idToFind = parseInt(productID)
    const product = products.find((p) => p.id === idToFind)

    //Product Not Found
    if(!product) {
        return res.status(404).send('<h1>Product Not Found</h1>')
    }

    res.json(product) 
})

//Product Search and Filter 
app.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query 
    let sortedProducts = [...products];
    
    console.log('1: ', sortedProducts)

    if(search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    res.status(200).json(sortedProducts)
})


//Page Not Found
app.all('*', (req, res)  => {
    res.status(404).send('<h1>404 Page not found</h1>')
})

app.listen(3000, (err) => {
 if (err) console.log("Error in server setup")
console.log("Server listening on Port", 3000)
})