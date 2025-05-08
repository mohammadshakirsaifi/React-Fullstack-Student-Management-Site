const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const studentRoutes = require('./routes/students');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/studentDB');

app.use('/api/students', studentRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
