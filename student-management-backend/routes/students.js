const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// GET with pagination + search
router.get('/', async (req, res) => {
  const { page = 1, limit = 5, search = '' } = req.query;
  const query = {
    $or: [
      { name: new RegExp(search, 'i') },
      { course: new RegExp(search, 'i') }
    ]
  };
  const students = await Student.find(query)
    .limit(limit * 1)
    .skip((page - 1) * limit);
  const count = await Student.countDocuments(query);
  res.json({ students, totalPages: Math.ceil(count / limit), currentPage: page });
});

// GET by ID
router.get('/:id', async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.json(student);
});

// POST
router.post('/', async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.status(201).json(student);
});

// PUT
router.put('/:id', async (req, res) => {
  const updated = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE
router.delete('/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;
