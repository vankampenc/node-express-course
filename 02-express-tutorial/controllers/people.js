const {people} = require('../data')

const getPeople = (req, res) => {
    res.status(200).json({ sucess: true, data: people})
}
const addPerson = (req, res) =>{
    const {name} = req.body
    if (name) {
        people.push({ id: people.length + 1, name: name });
        res.status(201).json({ success: true, name: name});
    }
    res.status(400).json({ success: false, message: "Please provide a name" });

module.exports = { getPeople, addPerson }