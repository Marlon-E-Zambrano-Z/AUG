const express = require('express');
const router = express.Router();

// Ruta básica de usuarios
router.get('/', (req, res) => {
    res.send('Lista de usuarios');
});

module.exports = router;
