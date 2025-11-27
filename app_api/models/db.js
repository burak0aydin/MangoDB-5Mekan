var mongoose = require("mongoose");

var dbURI =
  "mongodb+srv://test:test@odev.ax1nkhr.mongodb.net/mekanbul?retryWrites=true&w=majority&appName=Odev";

// Bağlantıyı yap
mongoose.connect(dbURI);

// Bağlantı durumlarını logla
mongoose.connection.on("connected", function () {
  console.log("Mongoose: " + dbURI + " adresindeki veritabanına bağlanıldı");
});

mongoose.connection.on("error", function (err) {
  console.log("Mongoose bağlantı hatası: " + err);
});

mongoose.connection.on("disconnected", function () {
  console.log("Mongoose bağlantısı kesildi");
});

// Uygulama kapandığında bağlantıyı kapat
process.on("SIGINT", function () {
  mongoose.connection.close();
  console.log("Bağlantı kapatıldı");
  process.exit(0);
});

// Şemayı/Modeli içeri al
require("./venue");

