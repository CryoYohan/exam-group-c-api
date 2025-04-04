const express = require('express');
const router = express.Router();

router.post('/exams', (req, res) => {
    const examData = req.body; 
    res.status(201).json({ message: 'Exam created successfully', data: examData });
});

router.get('/exams', (req, res) => {
    const exam = req.body
    res.status(200).json(exams);
}); 

//awdawdawd



router.get('/', (req, res) => {
    res.send('Welcome to the route!');
});

module.exports = router;
