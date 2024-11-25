const express = require("express");
const router = express.Router();
const {getPeople, addPerson, getPerson, putPeople, deletePeople} = require('../controllers/people')

const {people} = require('../data')

router.get('/', getPeople)

router.post('/', addPerson)


router.get('/:personID', getPerson)

router.put('/:personID', putPeople)

router.delete('/:personID', deletePeople)

module.exports = router