const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightsSchema = new Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: Date,
 
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Flights', flightsSchema);