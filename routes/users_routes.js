const { authenticateUser } = require('../auth-user');
const express = require('express');
const router = express.Router();
router.use(express.json());
const { Users } = require('../models');

// router.post('/create', async (req, res) => {
//   const user = await Book.create(req.body);
//   res.json(user);
// });

// Handler function to wrap each route.
asyncHandler = (cb) => {
  return async (req, res, next) => {
    try {
      await cb(req, res, next);
    } catch (error) {
      // Forward error to the global error handler
      next(error);
    }
  };
};

// Route that creates a new user.
router.post(
  '/users',
  asyncHandler(async (req, res) => {
    console.log(req.body);
    try {
      const user = await Users.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailaddress: req.body.emailaddress,
        password: req.body.password,
      });
      res.json(user);
      res.status(201).json({ message: 'Account successfully created!' });
    } catch (error) {
      if (
        error.name === 'SequelizeValidationError' ||
        error.name === 'SequelizeUniqueConstraintError'
      ) {
        const errors = error.errors.map((err) => err.message);
        res.status(400).json({ errors });
      } else {
        throw error;
      }
    }
  })
);

router.get(
  '/users',
  authenticateUser,
  asyncHandler(async (req, res) => {
    const user = req.currentUser;
    res.json({
      lastName: user.lastName,
      firstName: user.firstName,
      emailaddress: user.emailAddress,
    });
  })
);

module.exports = router;
