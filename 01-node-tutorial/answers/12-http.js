const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Home Page")
    }
    else if (req.url === "/about") {
        res.end("About")
    } else {
        res.end(`
        <h1> Uh oh!</h1>
        <p> Page not found</p>
        <a href="/">back home</a>
        `)
    }
})

server.listen(3000)