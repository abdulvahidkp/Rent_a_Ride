const express = require('express');
const { connectToDatabase } = require('./db/connection');
const app = express();
require('dotenv/config')
const PORT = process.env.PORT || 3000

//db connection



connectToDatabase();
app.listen(3000,()=>console.log(`server running at PORT ${PORT}`))