const mongoose = require('mongoose');

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.DB_CONNECTION);
    console.log('Successfully connected to database'.blue.underline);
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  connectToDatabase,
};