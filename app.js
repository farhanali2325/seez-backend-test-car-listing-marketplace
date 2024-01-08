const express = require('express');
const mongoose = require('mongoose');
const carRoutes = require('./src/routes/carRoutes');
const bookingRoutes = require('./src/routes/bookingRoutes');

const app = express();

mongoose.connect('mongodb://localhost:27017/carMarketplace', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

app.use('/cars', carRoutes);
app.use('/bookings', bookingRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
