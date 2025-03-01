const express = require('express');
const Survey = require('../models/Survey');
const router = express.Router();

// Submit survey response
router.post('/submit', async (req, res) => {
  try {
    const newSurvey = new Survey(req.body);
    await newSurvey.save();
    res.status(201).json({ message: 'Survey submitted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get survey responses
router.get('/responses', async (req, res) => {
  try {
    const responses = await Survey.find();
    res.json(responses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
