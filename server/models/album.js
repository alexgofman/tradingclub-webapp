const mongoose = require("mongoose");
const Shchema = mongoose.Schema;

const RecordSchema = new Schema({
  artist:String,
  album:String,
  image:String,
  owner:String
});

module.exports = mongoose.model('Album', RecordSchema);