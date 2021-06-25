const express = require('express');
const router = express.Router();
const { authenticateUser } = require('../auth-user');
router.use(express.json());
const { Courses } = require('../models');

asyncHandler = (cb) => {
  return async (req, res, next) => {
    try {
      await cb(req, res, next);
    } catch (error) {
      // Forward error to the global error handler
      console.log(error);
      next(error);
    }
  };
};

router.post(
  '/',
  asyncHandler(async (req, res) => {
    const course = await Courses.create(req.body);
    res.status(201).json({ message: 'Course created succesfully' });
  })
);

// router.get(
//   '/',
//   asyncHandler(async (req, res) => {
//     const course = await Courses.findAll();
//     res.json(course);
//   })
// );

// router.get(
//   '/:id',
//   authenticateUser,
//   asyncHandler(async (req, res) => {
//     const course = Courses.findByPk(req.params.id);
//     if (course) {
//       res.json(course);
//     } else {
//       res.status(404).json({ message: 'Course was not found' }.end());
//     }
//   })
// );

// router.put(
//   '/id',
//   asyncHandler(async (req, res) => {
//     const course = await Courses.findByPk(req.params.id);
//     try {
//       if (course) {
//         course.title = req.body.title;
//         course.description = req.body.description;
//         await Courses.update(course);
//         res.status(204).end();
//       } else {
//         res.status(404).json({ message: 'Course was not found' });
//       }
//     } catch (error) {
//       res.status(500).json({ message: 'Course not found' });
//     }
//   })
// );

// router.delete(
//   '/delete:id',
//   authenticateUser,
//   asyncHandler(async (req, res) => {
//     const course = await Course.findByPk(req.params.id);
//     await Courses.destroy(course);
//     res.status(204).end();
//   })
// );

module.exports = router;
