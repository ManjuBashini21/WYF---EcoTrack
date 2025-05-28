const mongoose = require('mongoose');
const activitySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  theme: String,
  activityName: String,
  description: String,
  imageUrl: String,
  geo: {
    latitude: Number,
    longitude: Number,
  },
  timestamp: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Activity', activitySchema);
