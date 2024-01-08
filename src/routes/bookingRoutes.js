const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.post('/book', bookingController.bookCar);
router.delete('/cancel/:bookingId', bookingController.cancelBooking);

module.exports = router;
