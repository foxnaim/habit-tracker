const User = require('../models/User'); // Модель пользователя
const bcrypt = require('bcryptjs');     // Хеширование паролей
const jwt = require('jsonwebtoken');    // Создание JWT

const JWT_SECRET = process.env.JWT_SECRET || 'supersecret'; // Секретный ключ JWT

// Регистрация пользователя
exports.registerUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Проверка, существует ли пользователь
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'Пользователь уже существует' });

    // Хеширование пароля
    const hashedPassword = await bcrypt.hash(password, 10);

    // Создание пользователя
    const user = await User.create({ email, password: hashedPassword });

    // Создание JWT токена
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1d' });

    res.status(201).json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Ошибка регистрации', error: err.message });
  }
};

// Авторизация пользователя
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Поиск пользователя
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Пользователь не найден' });

    // Проверка пароля
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Неверный пароль' });

    // Создание JWT токена
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '7d' });

    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Ошибка входа', error: err.message });
  }
};
