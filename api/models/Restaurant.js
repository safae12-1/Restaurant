const mongoose = require('mongoose');
const { Schema } = mongoose;

const RestauSchema = new Schema({
  name: { type: String, required: true },
  adresse: { type: String, required: false },
  latitude: { type: Number, required: false },
  longitude: { type:Number, required: false },
  rank: { type: Number, required: false },
  ouvert: { type: String, required: false },
  ferme: { type: String, required: false },
  serie: {type:String, required:false},
  zone: { type: Schema.Types.ObjectId, ref: 'Zone', required: false },
  specialite: { type: Schema.Types.ObjectId, ref: 'Specialite', required: true }
});

const Restaurant = mongoose.model('Restaurant', RestauSchema);

module.exports = Restaurant;
