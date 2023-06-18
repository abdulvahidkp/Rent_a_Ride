const express = require("express");
const { connectToDatabase } = require("./db/connection");
const { addDefaultDatas } = require("./data/defaultData");
const app = express();
require("dotenv/config");
require("colors");
const PORT = process.env.PORT || 3000;
const vehicleRoute = require("./router/vehicle.router");
const bookingRoute = require("./router/booking.router");
const { errorHandler, notFound } = require("./middleware/error.middleware");
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//cors setup for allowing req from other origin
app.use(
  cors({
    origin: "*",
  })
);

//db connection
connectToDatabase();

app.use("/api/vehicle", vehicleRoute);
app.use("/api/booking", bookingRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(3000, () => console.log(`server running at PORT ${PORT}`.yellow.bold));

//adding default datas
addDefaultDatas();
