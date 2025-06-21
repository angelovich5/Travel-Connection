const express = require('express');
const router = express.Router();

const { registerUser, loginUser } = require('../controllers/userController');

// Verifica que ambas sean funciones:
console.log('registerUser es función?', typeof registerUser === 'function');
console.log('loginUser es función?', typeof loginUser === 'function');

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
