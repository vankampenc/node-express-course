const jwt = require('jsonwebtoken')

const logon = async (req, res) => {
    const { name, password } = req.body
    const token = jwt.sign({ name, password }, process.env.JWT_SECRET, { expiresIn: '24h' })

    res.status(200).json({ token })
}

const hello = async (req, res) => {
    res.status(200).json({
        msg: `Hello, ${req.user.name}`
    })
}

module.exports = { logon, hello }