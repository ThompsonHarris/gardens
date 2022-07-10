const { body, validationResult } = require('express-validator');

const validateAuth = () => {
    return (req, res, next) => {
      //perform authentication
      next();
    };
  };

const validateGarden = [
  body('name').isLength({ min: 3 }).trim().escape(),
  body('description').isLength({ min: 3 }).trim().escape(),
  body('address').isLength({ min: 3 }).trim().escape(),
  body('city').isLength({ max: 10 }).trim().escape(),
  body('state').isLength({ max: 2 }).trim().escape(),
  body('zipcode').isLength({ max: 7 }).trim().escape(),
  body('memberlimit').isNumeric().trim().escape(),
]

const validateMember = [
  body('firstname').isLength({ min: 3 }).trim().escape(),
  body('lastname').isLength({ min: 3 }).trim().escape(),
  body('email').isLength({ min: 3 }).trim().escape(),
]

const cacheValidationError = () => {
  return (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next()
  }
}

module.exports = { validateAuth, validateGarden, validateMember, cacheValidationError };