//models
const { Bookings } = require("../model/booking/bookings.model");
//helpers
const { errorCatcher } = require("../helpers/errorCatcher");
const { bookingData } = require("../helpers/validator");

const bookAVehicle = errorCatcher(async (req, res) => {
  let { name, vehicleId, dateRange } = req.body;

  //deleting unnecessary field
  if (dateRange) delete dateRange[0]?.key;

  //validating all fields from frontend
  const { error } = bookingData.validate(req.body);

  //if validation valid throw validation error message
  if (error) throw new Error(error.details[0].message);

  //in this dateRange from frontend is in array format so changing it to a object from that array
  let newBooking = {
    name,
    dateRange: {
      startDate: new Date(dateRange[0].startDate).toISOString().split("T")[0],
      endDate: new Date(dateRange[0].endDate).toISOString().split("T")[0],
    },
    vehicleId,
  };

  //checking there are already bookings on the selected date range
  let overlappingBooking = await Bookings.findOne({
    vehicleId,
    "dateRange.startDate": { $lte: newBooking.dateRange.endDate },
    "dateRange.endDate": { $gte: newBooking.dateRange.startDate },
  });

  //if already bookings on the selected date range returning error message
  if (overlappingBooking) throw new Error("There are already bookings on the selected date range.");

  let savedBooking = await Bookings.create(newBooking);
  savedBooking = await savedBooking.populate({ path: "vehicleId", populate: { path: "typeId", select: "name" } });

  res.status(200).json(savedBooking);
});

module.exports = { bookAVehicle };
