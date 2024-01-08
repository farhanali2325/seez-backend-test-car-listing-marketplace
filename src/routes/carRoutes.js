const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

router.post('/create', carController.createCar);
router.get('/search', carController.searchCars);

module.exports = router;
