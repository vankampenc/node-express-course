const jwt = require('jsonwebtoken')

const authenticationMiddleware = async (req, res, next) => {
    const auth = req.header("Authorization")

    if (!auth || !auth.startsWith('Bearer ')) {
        res.status(401).json({ msg: "Unauthorized" })
    }

    const token = auth.split(' ')[1]

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log("dec", decoded)
        const { name } = decoded
        req.user = { name}

        next()
        
    } catch (error) {
        res.status(401).json({ msg: "Unauthorized" })
    }

    next()
}

module.exports = authenticationMiddleware