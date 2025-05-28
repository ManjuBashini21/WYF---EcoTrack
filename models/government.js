const mongoose = require('mongoose');

const govUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  designation: {
    type: String, 
    required: true,
  },
  region: {
    state: { type: String, required: true },
    city: { type: String }, 
  },
  role: {
    type: String,
    enum: ['admin', 'state_admin', 'city_admin'],
    default: 'admin',
  },
});

module.exports = mongoose.model('GovUser', govUserSchema);
