const express = require('express');
const { connectToDatabase } = require('./db/connection');
const { addDefaultVehicleAndVehicleTypes } = require('./data/defaultData');
const app = express();
require('dotenv/config')
require('colors')
const PORT = process.env.PORT || 3000
const vehicleRoute = require('./router/vehicle.router');
const { errorHandler, notFound } = require('./middleware/error.middleware');


//db connection
connectToDatabase();

app.use('/api/vehicle',vehicleRoute)

app.use(notFound)
app.use(errorHandler)

app.listen(3000,()=>console.log(`server running at PORT ${PORT}`.yellow.bold))


//adding default datas
addDefaultVehicleAndVehicleTypes()