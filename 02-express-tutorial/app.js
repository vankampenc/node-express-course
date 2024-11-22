console.log('Express Tutorial')

const express = require('express')
const app = express()
const {products} = require('./data')
const peopleRouter = require('./routes/people')

//Static Assets
app.use(express.static('./methods-public'))

//Parsing form data
app.use(express.urlencoded({ extended: false }));
//Parsing json
app.use(express.json());

app.use('/api/v1/people', peopleRouter)



//Middleware
const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().toLocaleString()

    console.log('method: ', method)
    console.log('url: ', url)
    console.log('time: ', time)
    next()
}

app.use(logger)

//Test
app.get('/api/v1/test', (req, res) => {
    res.json({ message: 'It worked'})
})

// //People
// app.get('/api/v1/people', (req, res) => {
//     res.status(200).json({ sucess: true, data: people})
// })

//     //Parsing
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// app.post('/api/v1/people', (req, res) =>{
//     const {name} = req.body
//     if (name) {
//         people.push({ id: people.length + 1, name: name });
//         res.status(201).json({ success: true, name: name});
//     }
//     res.status(400).json({ success: false, message: "Please provide a name" });
// })


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
    const { search, productLimit: limit, maxPrice } = req.query 
    let newProducts = [...products];
    
    console.log('1: ', newProducts)

    if(search) {
        newProducts = newProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }

    if (maxPrice) {
        newProducts = newProducts.filter((product) => {
            return product.price <= maxPrice
        })
    }

    if (limit) {
        newProducts = newProducts.slice(0, Number(limit))
    }

    res.status(200).json(newProducts)
})


//Page Not Found
app.all('*', (req, res)  => {
    res.status(404).send('<h1>404 Page not found</h1>')
})

app.listen(3000, (err) => {
 if (err) console.log('Error in server setup')
console.log('Server listening on Port', 3000)
})