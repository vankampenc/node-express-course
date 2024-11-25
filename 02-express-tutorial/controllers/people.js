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
}

const getPerson = (req, res) => {
    const { personID } = req.params

    const findPersonID = parseInt(personID)
    const person = people.find((person) => person.id === findPersonID)

    if (!person) {
        return res.status(404).send('<h1>Person ID Not Found<h1>')
    }

    res.status(200).json({success: true, data: person})
}

const putPeople = (req, res) => {
    const { personID } = req.params
    const { name } = req.body
    
    const person = people.find((person) => person.id === Number(personID))

    if (!person) {
        return res.status.json({ sucess: false, message: `No person with id:${personID}`})
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(personID)) {
            person.name = name
        }
        return person
    })
    res.status(200).json({sucess: true, data: newPeople})
}

const deletePeople = (req, res) => {
    const { personID } = req.params

    const person = people.find((person) => person.id === Number(personID))
    if (!person) {
        return res.status(404).json({ success: false, message: `No person with id:${personID}`})
    }
    const newPeople = people.filter(
        (person) => person.id !== Number(personID)
    )
    res.status(200).json({ success: true, data: newPeople})
}

module.exports = { getPeople, addPerson, getPerson, putPeople, deletePeople }