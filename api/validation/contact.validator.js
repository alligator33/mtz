const Joi = require("joi");

const schema = Joi.object({
  email: Joi.string()
    .email()
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.type) {
          case "any.empty":
            err.message = "Please provide an email address";
            break;
          case "string.email":
            err.message = "Please provide a valid email address";
            break;
          case "any.required":
            err.message = "Email field is required";
            break;
          default:
            break;
        }
      });
      return errors;
    }),

  mobile: Joi.string()
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.type) {
          case "any.empty":
            err.message = "Please provide a mobile number";
            break;
          case "any.required":
            err.message = "Mobile field is required";
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  name: Joi.string().required().error(errors => {
    errors.forEach(err => {
      switch (err.type) {
        case "any.empty":
          err.message = "Please provide your full name";
          break;
        case "any.required":
          err.message = "full name is required";
          break;
        default:
          break;
      }
    });
    return errors;
  }),
  subject: Joi.string()
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.type) {
          case "any.empty":
            err.message = "Please provide a subject";
            break;
          case "any.required":
            err.message = "Subject field is required";
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  message: Joi.string()
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.type) {
          case "any.empty":
            err.message = "Tell us more about your request";
            break;
          case "any.required":
            err.message = "Tell us more about your request";
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  username: Joi.string().allow(""),
  traderName: Joi.string().allow(""),
  member: Joi.string().allow(""),
});

module.exports = schema;
