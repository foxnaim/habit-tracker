<div align="center">

# ✅ Habit Tracker

**Full-stack habit tracking system with analytics and streaks**

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

</div>

---

## About

A comprehensive habit tracking system that helps you build positive habits and break bad ones. Features streak tracking, analytics dashboard, and a Telegram bot for daily reminders.

## Architecture

This is a **monorepo** containing all parts of the Habit Tracker ecosystem:

| Package | Description | Repo |
|---------|-------------|------|
| `front/` | React frontend with Next.js | [habit-tracker-front](https://github.com/foxnaim/habit-tracker-front) |
| `back/` | Node.js REST API | [habit-tracker-back](https://github.com/foxnaim/habit-tracker-back) |
| `bot/` | Telegram bot for reminders | [habit-tracker-bottg](https://github.com/foxnaim/habit-tracker-bottg) |
| `shared/` | Shared types and utilities | — |

## Features

- ✅ **Habit CRUD** — Create, edit, delete habits
- 🔥 **Streaks** — Track daily streaks and best records
- 📊 **Analytics** — Visual progress charts and statistics
- 🤖 **Telegram Bot** — Daily reminders and quick check-ins
- 📱 **Responsive** — Mobile-friendly design
- 🔐 **Auth** — User authentication and personal data

## Getting Started

```bash
git clone https://github.com/foxnaim/habit-tracker.git
cd habit-tracker

# Frontend
cd front && yarn install && yarn dev

# Backend
cd ../back && yarn install && yarn start

# Telegram Bot
cd ../bot && pip install -r requirements.txt && python bot.py
```

## License

MIT © [foxnaim](https://github.com/foxnaim)
