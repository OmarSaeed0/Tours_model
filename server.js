const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const tourRoutes = require('./routes/tourRoutes');

dotenv.config({ path: './.env' });

const app = express();
app.use(express.json());

mongoose.connect(process.env.DATABASE).then(() => console.log('DB connection successful!'));

app.use('/api/v1/tours', tourRoutes);

const port = process.env.PORT ;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
