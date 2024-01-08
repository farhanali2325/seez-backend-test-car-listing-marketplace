const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  carId: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', required: true },
  bookingDate: { type: Date, default: Date.now },
  // ... other booking details
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
