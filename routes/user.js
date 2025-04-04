const express = require('express');
const router = express.Router();

router.post('/exams', (req, res) => {
    const examData = req.body; 
    res.status(201).json({ message: 'Exam created successfully', data: examData });
});

router.get('/exams', (req, res) => {
    const exams = req.body
    res.status(200).json(exams);
}); 

router.put('/exams/:id', (req, res) => {
    const examId = req.params.id;
    const updatedExam = req.body;
    res.status(200).json({ message: `Exam ${examId} updated successfully`, data: updatedExam });
}); 

router.get('/', (req, res) => {
    res.send('Welcome to the routerrraaAAAAAAAAA CONFLICTTT!');
});

module.exports = router;
