const express = require("express");
const router = express.Router();
const {getPeople, addPerson} = require('../../controllers/people')

const {people} = require('../data')

router.get('/', getPeople)


router.post('/', addPerson)

module.exports = router