const { authenticateUser } = require('../auth-user');
const express = require('express');
const router = express.Router();
router.use(express.json());
const { Users } = require('../models');

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

router.get(
  '/users',
  asyncHandler(async (req, res) => {
    const user = Users.findAll();
    res.json(user);
  })
);

// Route that creates a new user.
router.post(
  '/users',
  asyncHandler(async (req, res) => {
    console.log(req.body);
    try {
      const user = await Users.create(req.body);

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

module.exports = router;
