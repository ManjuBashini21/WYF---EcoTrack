const mongoose = require('mongoose');

const govAccessLogSchema = new mongoose.Schema({
  govUserId: { type: mongoose.Schema.Types.ObjectId, ref: 'GovUser' },
  accessedAt: { type: Date, default: Date.now },
  accessedData: String, // e.g., "Theme Analytics - State: Tamil Nadu"
});

module.exports = mongoose.model('GovAccessLog', govAccessLogSchema);
