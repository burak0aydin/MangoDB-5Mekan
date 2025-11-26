# MongoDB Cloud Bağlantılı Backend

Bu proje, ders kapsamında verilen ödev doğrultusunda hazırlanmış olup,
slaytta gösterilen Express + Mongoose backend yapısının **MongoDB Cloud (Atlas)**
veritabanına bağlanacak şekilde güncellenmiş halidir. Ayrıca MongoDB Cloud üzerinde
5 adet mekan verisi eklenmiş ve proje GitHub üzerinden teslim edilmiştir.

---

## 📌 1. Projenin Amacı

Bu çalışmada amaç:

- Slayttaki backend yapısını kullanarak bir Express API oluşturmak,
- Lokal MongoDB yerine **MongoDB Cloud bağlantı adresi (URI)** kullanmak,
- MongoDB Cloud üzerinde **5 mekandan oluşan bir veri koleksiyonu** oluşturmak,
- Güncellenmiş backend kodunu **GitHub üzerinden teslim etmek**.

Bu proje, ödevde istenen tüm gereklilikleri yerine getirmektedir.

---

## 📌 2. MongoDB Cloud Bağlantı Adresi (dbURI)

Projede kullanılan aktif MongoDB Cloud bağlantı adresi:

mongodb+srv://test:test@odev.ax1nkhr.mongodb.net/mekanbul?retryWrites=true&w=majority&appName=Odev


- Kullanıcı adı: **test**  
- Şifre: **test**  
- Veritabanı: **mekanbul**  
- Koleksiyon: **venues**

---

## 📌 3. API Endpoint

### **GET /api/venues**

Bu endpoint, MongoDB Cloud üzerindeki `venues` koleksiyonunda yer alan
5 mekan verisini JSON formatında döndürmektedir.

Örnek çıktı:

```json
[
  {
    "coords": {
      "type": "Point",
      "coordinates": [
        30.713,
        36.882
      ]
    },
    "_id": "692784065bd4e5e4c3567d54",
    "name": "Kampüs Kafe",
    "address": "Üniversite Caddesi No:1 Antalya",
    "rating": 4,
    "foodanddrink": [
      "kahve",
      "tatlı"
    ]
  },
  {
    "coords": {
      "type": "Point",
      "coordinates": [
        30.714,
        36.883
      ]
    },
    "_id": "6927841d5bd4e5e4c3567d5b",
    "name": "Teknokent Coffee",
    "address": "Teknokent Yerleşkesi Binası Antalya",
    "rating": 5,
    "foodanddrink": [
      "latte",
      "sandviç"
    ]
  },
  {
    "coords": {
      "type": "Point",
      "coordinates": [
        30.715,
        36.881
      ]
    },
    "_id": "692784425bd4e5e4c3567d6a",
    "name": "Kütüphane Büfe",
    "address": "Merkez Kütüphane Yanı",
    "rating": 3,
    "foodanddrink": [
      "çay",
      "su",
      "çikolata"
    ]
  },
  {
    "coords": {
      "type": "Point",
      "coordinates": [
        30.716,
        36.882
      ]
    },
    "_id": "692784515bd4e5e4c3567d6d",
    "name": "Merkez Kafeterya",
    "address": "Ana Kampüs",
    "rating": 4,
    "foodanddrink": [
      "yemek",
      "tatlı"
    ]
  },
  {
    "coords": {
      "type": "Point",
      "coordinates": [
        30.712,
        36.884
      ]
    },
    "_id": "692784615bd4e5e4c3567d74",
    "name": "Çatı Kafe",
    "address": "Çatı Katı - Mühendislik Fakültesi",
    "rating": 5,
    "foodanddrink": [
      "kahve",
      "çay"
    ]
  }
]

