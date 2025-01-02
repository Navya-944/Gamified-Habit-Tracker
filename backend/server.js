require('dotenv').config();
const mongoose = require('mongoose');

// Use the MONGO_URI from the .env file
const uri = process.env.MONGO_URI;
// Check the MongoDB URI
console.log('MongoDB URI:', process.env.MONGO_URI);

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error.message);
  });

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Server is running...');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
