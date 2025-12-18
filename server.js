const express = require('express');
const path = require('path');
const app = express();

// Port otomatis dari Railway atau 3000 jika di laptop
const port = process.env.PORT || 3000;

// Menyajikan semua file statis (HTML, CSS, Gambar) di folder ini
app.use(express.static(__dirname));

// Jika halaman tidak ditemukan, kembalikan ke index.html (opsional)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Website TK Haluoleo berjalan di port ${port}`);
});