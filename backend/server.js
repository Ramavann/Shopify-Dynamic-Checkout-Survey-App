const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const surveyRoutes = require('./routes/surveyRoutes');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/survey', surveyRoutes);

mongoose.set('strictQuery', false);
console.log("MongoDB URI:", process.env.MONGO_URI); // Debugging line

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
