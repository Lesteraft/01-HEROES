const mongoose = require('mongoose');
const { Schema } = mongoose;

const HeroesSchema = new Schema({
  nombre: { type: String, required: true },
  bio: { type: String, required: true},
  img: { type: String, required: true},
  aparicion: { type: String, required: true},
  casa: { type: String, required: true},
});

module.exports = mongoose.model('Heroes', HeroesSchema);
