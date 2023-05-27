const mongoose = require('mongoose');
const { Schema } = mongoose;

const SerieSchema = new Schema({
  name: { type: String, required: true },
  /*zone: { type: Schema.Types.ObjectId, ref: 'Zone', required: true }*/
});

const Serie = mongoose.model('Serie', SerieSchema);

module.exports = Serie;
