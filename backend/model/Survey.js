const mongoose = require('mongoose');

const SurveySchema = new mongoose.Schema({
  question: String,
  answer: String,
  customerID: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Survey', SurveySchema);