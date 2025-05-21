const express = require('express');
const router = express.Router(); // роутер
const {registerUser, loginUser} = require('../controllers/authController'); //контроллеры авторизации
  

router.post('/register', registerUser); // роутер регистраций 
router.post('/login', loginUser); // роутер авторизаций

module.express = router; // экспортируем роутер
