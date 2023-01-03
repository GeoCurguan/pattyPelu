const express = require('express');
const app = express();

const users = [
  {
    "nombre":"Fabian"
  },
  {
    "nombre": "Pedro"
  }
];

app.get('/api/users', (req, res) => {
    res.json({
      users : users
    });
});

app.listen(3001, () => {
  console.log('Servidor escuchando en puerto 3001');
});
