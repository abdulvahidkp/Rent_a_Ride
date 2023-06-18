const Joi = require("joi");

const bookingData = Joi.object({
  name: Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
  }).required(),
  vehicleId: Joi.string()
    .required()
    .regex(/^[0-9a-fA-F]{24}$/), // Assuming Mongoose ObjectId is 24 characters hexadecimal string
  dateRange: Joi.array()
    .items(
      Joi.object({
        startDate: Joi.date().iso().required(),
        endDate: Joi.date().iso().required(),
      })
    )
    .min(1)
    .required(),
});

module.exports = { bookingData };
