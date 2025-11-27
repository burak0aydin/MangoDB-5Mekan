// MODELLERİ VE VERİTABANI BAĞLANTISINI YÜKLE
require("./app_api/models/db");

const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Mongoose içinden modele eriş (venue.js'de tanımlanan model)
const Venue = mongoose.model("venue");

// Test endpoint'i
app.get("/", (req, res) => {
  res.send("Mekanbul backend çalışıyor");
});

// MongoDB Cloud'daki mekanları dönen endpoint
app.get("/api/venues", async (req, res) => {
  try {
    const venues = await Venue.find();
    res.json(venues);
  } catch (err) {
    console.error("Hata:", err);
    res.status(500).json({ error: "Sunucu hatası" });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server http://localhost:${port} adresinde çalışıyor 🚀`);
});

