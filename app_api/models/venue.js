var mongoose = require("mongoose");

var venueSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: String,
  rating: { type: Number, min: 0, max: 5, default: 0 },
  foodanddrink: [String],
  coords: {
    type: { type: String, default: "Point" },
    coordinates: { type: [Number], index: "2dsphere" }
  }
});

mongoose.model("venue", venueSchema, "venues");
