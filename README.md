# 🚀 Lutfi-Lab.ID

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)
![React](https://img.shields.io/badge/react-18.2.0-61dafb.svg)
![NestJS](https://img.shields.io/badge/nestjs-10.0.0-ea2845.svg)

**A Modern Full-Stack Dashboard Application with Role-Based Access Control**

[Features](#-features) • [Tech Stack](#-tech-stack) • [Installation](#-installation) • [Usage](#-usage) • [Security](#-security) • [Author](#-author)

</div>

---

## ✨ Features

### 🎛️ Dashboard Components
- **Task Manager** - Comprehensive task management with CRUD operations
- **Kanban Board** - Visual project management with drag-and-drop
- **Habit Tracker** - Track and build daily habits
- **Pomodoro Timer** - Productivity timer with focus sessions
- **Calculator** - Full-featured scientific calculator
- **Stopwatch** - Precision timing with lap functionality

### 🎮 Mini Games
- **2048 Game** - Classic sliding puzzle game
- **Snake Game** - Retro arcade game
- **Tetris** - Block-stacking puzzle game
- **Chess** - Full chess game implementation
- **Tic Tac Toe** - Classic X and O game
- **Memory Card Game** - Card matching game

### 🛠️ Productivity Tools
- **Hacker Terminal** - Interactive terminal emulator
- **Music Player** - Built-in music player
- **Weather Widget** - Real-time weather information
- **Mini Tools** - Collection of utility tools
- **Link Manager** - Organize and manage links
- **Global Search** - Search across all features

### 🔐 Security & Access Control
- **Role-Based Access** - User, Admin, Super Developer roles
- **Protected Routes** - Secure route protection
- **JWT Authentication** - Secure token-based auth
- **Activity Logs** - Track all user activities

### 🎨 UI/UX Features
- **Dark Mode** - Beautiful dark theme
- **Multi-language Support** - Internationalization ready
- **Toast Notifications** - Real-time notifications
- **Analytics Dashboard** - Visual data analytics
- **Settings Panel** - Comprehensive settings

---

## 🛠️ Tech Stack

### Frontend
| Technology | Description |
|------------|-------------|
| **React 18** | UI Library |
| **Vite** | Build Tool |
| **React Router v6** | Client-side Routing |
| **Axios** | HTTP Client |
| **CSS3** | Styling with Modern Features |

### Backend
| Technology | Description |
|------------|-------------|
| **NestJS 10** | Node.js Framework |
| **MongoDB** | NoSQL Database |
| **Mongoose** | ODM for MongoDB |
| **Passport** | Authentication |
| **JWT** | Token-based Auth |

### Security
| Package | Purpose |
|---------|---------|
| **Helmet** | HTTP Headers Security |
| **Argon2** | Password Hashing |
| **Throttler** | Rate Limiting |
| **express-mongo-sanitize** | NoSQL Injection Prevention |
| **xss-clean** | XSS Attack Prevention |
| **hpp** | HTTP Parameter Pollution Prevention |

---

## 📦 Installation

### Prerequisites
- Node.js >= 18.0.0
- MongoDB (local or Atlas)
- npm or yarn

### Clone Repository
```bash
git clone https://github.com/MuhammadLutfiMuzakiiVY/lutfi-lab-id.git
cd lutfi-lab-id
```

### Backend Setup
```bash
cd backend
npm install
```

Create `.env` file in backend directory:
```env
# Database
MONGODB_URI=mongodb://localhost:27017/lutfi-lab-id

# JWT
JWT_SECRET=your-super-secret-key
JWT_EXPIRES_IN=7d

# Server
PORT=3000
NODE_ENV=development
```

Start backend server:
```bash
npm run start:dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

---

## 🚀 Usage

### Development Mode
```bash
# Terminal 1 - Backend
cd backend
npm run start:dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

### Production Build
```bash
# Build frontend
cd frontend
npm run build

# Build & start backend
cd backend
npm run build
npm run start:prod
```

### Access the Application
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000
- **API Documentation**: http://localhost:3000/api/docs

---

## 🔐 Security

This application implements multiple layers of security:

| Feature | Implementation |
|---------|----------------|
| **Password Hashing** | Argon2 (memory-hard algorithm) |
| **Authentication** | JWT with refresh tokens |
| **Rate Limiting** | NestJS Throttler |
| **Input Validation** | class-validator |
| **CORS Protection** | Configured CORS policy |
| **HTTP Security Headers** | Helmet.js |
| **NoSQL Injection Prevention** | express-mongo-sanitize |
| **XSS Prevention** | xss-clean middleware |

---

## 📁 Project Structure

```
lutfi-lab-id/
├── backend/
│   ├── src/
│   │   ├── auth/           # Authentication module
│   │   ├── users/          # User management
│   │   ├── common/         # Shared utilities
│   │   └── main.ts         # Entry point
│   ├── .env                # Environment variables
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── context/        # React contexts
│   │   ├── services/       # API services
│   │   ├── styles/         # CSS stylesheets
│   │   └── App.jsx         # Main app component
│   └── package.json
│
└── README.md
```

---

## 👤 Author

<div align="center">

**Muhammad Lutfi Muzaki**

*Developer & Cybersecurity Professional*

[![GitHub](https://img.shields.io/badge/GitHub-MuhammadLutfiMuzakiiVY-181717?style=for-the-badge&logo=github)](https://github.com/MuhammadLutfiMuzakiiVY)
[![Email](https://img.shields.io/badge/Email-muhammadlutfimuzaki2@gmail.com-D14836?style=for-the-badge&logo=gmail)](mailto:muhammadlutfimuzaki2@gmail.com)

</div>

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**⭐ Star this repository if you find it helpful! ⭐**

Made with ❤️ by Muhammad Lutfi Muzaki

</div>
