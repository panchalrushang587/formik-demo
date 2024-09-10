const { body } = require("express-validator");

const userValidationRules = [
  body("userId").notEmpty().withMessage("User ID is required"),
  body("firstName").notEmpty().withMessage("First name is required"),
  body("lastName").notEmpty().withMessage("Last name is required"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("gender").notEmpty().withMessage("Gender is required"),
  body("phone").isMobilePhone().withMessage("Valid phone number is required"),
  body("dateOfJoining")
    .isISO8601()
    .toDate()
    .withMessage("Valid date is required"),
  body("userType")
    .isIn(["Admin", "Employee"])
    .withMessage("User type must be Admin or Employee"),
  body("permissions")
    .optional()
    .isArray()
    .withMessage("Permissions should be an array"),
];

module.exports = userValidationRules;
