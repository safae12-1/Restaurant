const mongoose = require('mongoose');
const { Schema } = mongoose;

const SpecialiteSchema = new Schema({
  name: { type: String, required: true },
  zone: { type: Schema.Types.ObjectId, ref: 'Zone', required: true }
});

const Specialite = mongoose.model('Specialite', SpecialiteSchema);

module.exports = Specialite;
