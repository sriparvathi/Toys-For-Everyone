const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const toysSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  ageGroup: { type: String, required: true },
  price: {type: String, required: true},
  quantity: {type: Number, required: true},
});

const Toys = mongoose.model("toys", toysSchema);

module.exports = Toys;