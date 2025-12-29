const {requesttest} = require('../controllers/test.controllers')
const express = require('express')

const router = express.Router()

router.post('/request', requesttest);

module.exports = router