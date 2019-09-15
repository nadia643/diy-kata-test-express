const express = require('express');

const router = express.Router();
const numbersController = require('../controllers/numbers');

router.get('/add/:a/and/:b', numbersController.add);

router.get('/subtract/:b/from/:a', numbersController.subtract);

router.post('/multiply', numbersController.multiply);

router.post('/divide', numbersController.divide);

router.post('/remainder', numbersController.remainder);

module.exports = router;
