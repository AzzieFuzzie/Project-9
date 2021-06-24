// const express = require('express');
// const router = express.Router();

// router.use(express.json());
// const { Courses } = require('../models');

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
//       res.status(404).json({ message: 'Course was not found' });
//     }
//   } catch (error) {
//     res.status(500);
//   }
// });

// router.post('/api/courses', async (req, res) => {
//   try {
//     if (req.body && req.body) {
//       Users.create();
//       res.status(201);
//     } else {
//       res.status(400).json({ message: '... required' });
//     }
//   } catch {
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
