const express = require('express');
const mongoose = require('mongoose');

// KENDİ CONNECTION STRINGİM
const dbURI = 'mongodb+srv://test:test@odev.ax1nkhr.mongodb.net/mekanbul?retryWrites=true&w=majority&appName=Odev';

// MONGOOSE İLE MONGODB CLOUD'A BAĞLANDIM
mongoose.connect(dbURI)
  .then(() => {
    console.log('MongoDB Cloud veritabanına bağlanıldı ✅');
  })
  .catch((err) => {
    console.log('MongoDB bağlantı hatası ❌:', err);
  });

// MEKAN ŞEMASI
const venueSchema = new mongoose.Schema({
  name: String,
  address: String,
  rating: Number,
  foodanddrink: [String],
  coords: {
    type: {
      type: String
    },
    coordinates: [Number] // [boylam, enlem]
  }
});

// MODEL (koleksiyon adı: venues)
const Venue = mongoose.model('Venue', venueSchema, 'venues');

// EXPRESS UYGULAMASI
const app = express();

// Basit test endpoint'i
app.get('/', (req, res) => {
  res.send('Mekanbul backend calisiyor');
});

// MongoDB Cloud'daki 5 mekanı dönen endpoint
app.get('/api/venues', async (req, res) => {
  try {
    const venues = await Venue.find();
    res.json(venues);
  } catch (err) {
    console.error('Hata:', err);
    res.status(500).json({ error: 'Sunucu hatasi' });
  }
});

// SERVER'I BAŞLAT
const port = 3000;
app.listen(port, () => {
  console.log(`Server http://localhost:${port} adresinde calisiyor 🚀`);
});
