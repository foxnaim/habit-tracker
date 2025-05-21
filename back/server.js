require('dotenv').config(); // ДО всего остального

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI;

// Подключение к MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB подключена'))
  .catch(err => console.error('Ошибка MongoDB:', err));

// Маршруты
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Сервер работает на http://localhost:${PORT}`);
});
