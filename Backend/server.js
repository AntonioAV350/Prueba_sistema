require('dotenv').config();
const express = require('express');
const cors = require('cors');
const pool = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const query = `
      SELECT u.username, r.nombre AS rol 
      FROM usuarios u 
      JOIN roles r ON u.rol_id = r.id 
      WHERE u.username = $1 AND u.password = $2
    `;
    const result = await pool.query(query, [username, password]);

    if (result.rows.length > 0) {
      res.json({ success: true, user: result.rows[0] });
    } else {
      res.status(401).json({ success: false, message: 'Usuario o contraseña incorrectos.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error interno del servidor.' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor de API corriendo en http://localhost:\  ${PORT}`);
});