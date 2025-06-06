const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { register, login, protected: protectedRoute } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);
router.get('/protected', auth, protectedRoute);

module.exports = router;