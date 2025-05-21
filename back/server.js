const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth'); // импортируем роутер авторизации

const app = express();
app.use(cors()); // разрешаем CORS
app.use(express.json()); // парсим JSON
