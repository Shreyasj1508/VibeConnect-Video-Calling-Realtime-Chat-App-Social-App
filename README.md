# 🎥 VibeConnect - Real-Time Video Calling & Chat Platform

A full-stack social networking application designed for language learners to connect, practice conversations through real-time video calls, and chat with each other. Built with modern web technologies and deployed on cloud platforms.

![VibeConnect](frontend/public/screenshot-for-readme.png)

## 🌐 Live Demo

- **Frontend:** [https://vibe-connect-video-calling-realtime-taupe.vercel.app/](https://vibe-connect-video-calling-realtime-taupe.vercel.app/)
- **Backend API:** [https://vibeconnect-video-calling-realtime-chat.onrender.com](https://vibeconnect-video-calling-realtime-chat.onrender.com)

## ✨ Features

- **Authentication** - JWT-based auth with bcrypt password hashing and cookie sessions
- **Social Network** - Friend requests, user discovery, recommendations, and notifications
- **Real-Time Chat** - One-on-one messaging with Stream Chat SDK
- **Video Calling** - Peer-to-peer video calls with Stream Video SDK
- **User Profiles** - Language preferences, bio, location, and onboarding
- **Responsive UI** - Modern design with Tailwind CSS, DaisyUI, and dark/light themes

## 🛠️ Technology Stack

**Frontend:** React 19, Vite, React Router, TanStack Query, Axios, Stream Chat/Video SDKs, Tailwind CSS, DaisyUI, Zustand

**Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT, bcryptjs, Stream Chat SDK

**Deployment:** Vercel (Frontend), Render (Backend), MongoDB Atlas, Stream.io

## 📋 Prerequisites

- Node.js (v18+)
- MongoDB (local or Atlas)
- Stream.io account

## 🚀 Getting Started

### 1. Clone Repository

```bash
git clone <your-repo-url>
cd streamify-video-calls
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create `backend/.env`:

```env
PORT=5001
NODE_ENV=development
MONGO_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_jwt_secret_key
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
```

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Create `frontend/.env`:

```env
VITE_STREAM_API_KEY=your_stream_api_key
```

### 4. Run Application

**Backend:**
```bash
cd backend
npm run dev
```
Server runs on `http://localhost:5001`

**Frontend:**
```bash
cd frontend
npm run dev
```
App runs on `http://localhost:5173`

## 🔌 API Endpoints

**Authentication:** `/api/auth/signup`, `/api/auth/login`, `/api/auth/logout`, `/api/auth/me`, `/api/auth/health`

**Users:** `/api/users`, `/api/users/friends`, `/api/users/friend-requests`, `/api/users/friend-request/:id`

**Chat:** `/api/chat/token`

## 🔒 Environment Variables

**Backend:** `PORT`, `NODE_ENV`, `MONGO_URI`, `JWT_SECRET_KEY`, `STREAM_API_KEY`, `STREAM_API_SECRET`

**Frontend:** `VITE_STREAM_API_KEY`

## 🚢 Deployment

### Frontend (Vercel)
1. Push to GitHub
2. Import in Vercel
3. Build: `npm run build --prefix frontend`
4. Output: `frontend/dist`
5. Add `VITE_STREAM_API_KEY`

### Backend (Render)
1. Create Web Service
2. Connect GitHub repo
3. Build: `npm install`
4. Start: `npm start`
5. Add env vars: `MONGO_URI`, `JWT_SECRET_KEY`, `STREAM_API_KEY`, `STREAM_API_SECRET`, `NODE_ENV=production`

Update `vercel.json` with your Render backend URL.

## 👨‍💻 Author

Shreyas jaiswal

## 🙏 Acknowledgments

- [Stream.io](https://getstream.io/) for real-time communication SDKs
- [Vercel](https://vercel.com/) for frontend hosting
- [Render](https://render.com/) for backend hosting
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for database hosting

---

⭐ If you found this project helpful, please give it a star!
