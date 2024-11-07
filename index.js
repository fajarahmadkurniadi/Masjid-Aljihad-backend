const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// Endpoint login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Kredensial login yang benar
  const adminEmail = 'admin@example.com';
  const adminPassword = 'password123';

  // Verifikasi kredensial
  if (email === adminEmail && password === adminPassword) {
    res.json({ success: true, token: 'some-token' });
  } else {
    res.status(401).json({ success: false, message: 'Email atau password salah' });
  }
});

// Jalankan server pada port 5000
app.listen(5000, () => {
  console.log('Server berjalan pada port 5000');
});
