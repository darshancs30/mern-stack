const mongoose = require('mongoose');

const listItemSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  phone: { type: String, required: true },
  notes: { type: String },
  agent: { type: mongoose.Schema.Types.ObjectId, ref: 'Agent' }
});

module.exports = mongoose.model('ListItem', listItemSchema);
