const User = require('../models/User'); // импортируем модель пользователя
const bcrypt = require('bcrypt'); // импортируем bcrypt для хеширования паролей
const jwt = require('jsonwebtoken'); // импортируем jsonwebtoken для создания токенов

const JWT_SECRET = process.env.JWT_SECRET || 'supersecret'; // секретный ключ для JWT, его нужно хранить в .env файле

exports.registerUser = async (req, res) =>{
 const {emaul, password} = req.body; // получаем email и пароль из тела запроса
 try {
  const userExists = await User.findOne({email}); // проверяем существует ли пользователь с таким email
  if (userExists) return res.status(400).json({message: 'Пользователь уже существует' }); // если существует, возвращаем ошибку

  const hashedPassword = await bcrypt.hash(password, 10); // хешируем пароль
  const user = await User.create({email, password: hashedPassword}); // создаем нового пользователя

  const token = jwt.sign({id: user._id}, JWT_SECRET, {expiresIn: '1d'}); // создаем токен
  res.status(201).json({token}); // возвращаем токен
 } catch (err){
  res.status(500).json({ message: 'Ошибка регистрации', error: err.massage }); // если произошла ошибка, возвращаем ошибку
 }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Пользователь не найден' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Неверный пароль' });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '7d' });
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Ошибка входа', error: err.message });
  }
};
