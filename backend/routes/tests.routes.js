const {givetest, submitanswer, requesttest, storetest, fetch_past_results} = require('../controllers/test.controllers.js')
const express = require('express')
const {verifyJWT} = require('../middleware/auth.middleware.js');
const router = express.Router()

router.post('/questions', verifyJWT, givetest);
router.post('/submit',verifyJWT, submitanswer);
router.post('/request/:user_id', requesttest);
router.post('/store',verifyJWT, storetest)
router.get('/see_results', verifyJWT, fetch_past_results);

module.exports = router;