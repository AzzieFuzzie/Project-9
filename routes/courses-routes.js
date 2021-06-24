const express = require('express');
const router = express.Router();
router.use(express.json());
const { Courses } = require('../models');

router.post('/', async (req, res) => {
  try {
    const course = await Courses.create(req.body);
    res.status(201).json({ message: 'Course created succesfully' });
  } catch {
    res.status(500);
  }
});

// router.get('/api/courses', async (req, res) => {
//   try {
//     res.json(Courses);
//   } catch (error) {}
// });

// router.get('/api/courses/:id', async (req, res) => {
//   try {
//     const course = Courses.find();
//     if (course) {
//       res.json(course);
//     } else {
//       res.status(404).json({ message: 'Course was not found' }.end());
//     }
//   } catch (error) {
//     res.status(500);
//   }
// });

// router.put('/api/courses:id', async (req, res) => {
//   try {
//     const course = Users.findByPk(req.params.id);
//     Users.update();
//   } catch (error) {}
// });

// router.delete('/api/courses', (req, res) => {
//   Users.create();
// });

module.exports = router;
