# 🚀 Vestora — Full Stack Trading Platform

Vestora is a modern full-stack trading and investment platform inspired by real-world fintech applications.
Built to deeply understand scalable frontend architecture, backend APIs, portfolio systems, trading workflows, and modern product engineering.

---

# 🌟 Features

## Landing Platform

* Modern responsive UI
* Multi-page React application
* Professional fintech-inspired design
* Routing with React Router
* About / Products / Pricing / Support pages
* Signup interface
* Reusable UI components

## Trading Dashboard

* Holdings management
* Positions tracking
* Orders system
* Watchlist
* Funds section
* Buy/Sell action window
* Portfolio visualizations & charts
* Dashboard analytics

## Backend APIs

* Express.js REST APIs
* MongoDB Atlas integration
* Holdings API
* Positions API
* Orders API
* CORS support
* Environment variable configuration

---

# 🛠️ Tech Stack

## Frontend

* React.js
* React Router DOM
* Bootstrap
* Axios

## Dashboard

* React.js
* Chart.js
* Material UI / Bootstrap components

## Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

## Deployment

* Vercel (Frontend + Dashboard)
* Render / Railway (Backend)
* MongoDB Atlas (Database)

---

# 📂 Project Structure

```bash
Vestora/
│
├── frontend/      # Landing pages
├── dashboard/     # Trading dashboard
├── backend/       # Express backend + MongoDB
│
└── README.md
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/vestora-trading-platform.git
cd vestora-trading-platform
```

---

# 🖥️ Frontend Setup

```bash
cd frontend
npm install
npm start
```

Runs on:

```bash
http://localhost:3000
```

---

# 📊 Dashboard Setup

```bash
cd dashboard
npm install
npm start
```

Runs on:

```bash
http://localhost:3001
```

---

# 🔧 Backend Setup

```bash
cd backend
npm install
npm run dev
```

Runs on:

```bash
http://localhost:3002
```

---

# 🔐 Environment Variables

Create a `.env` file inside `backend/`

```env
MONGO_URL=your_mongodb_connection_string
PORT=3002
```

---

# 📡 API Endpoints

## Holdings

```http
GET /allHoldings
```

## Positions

```http
GET /allPositions
```

## New Order

```http
POST /newOrder
```

Example Request:

```json
{
  "name": "TCS",
  "qty": 2,
  "price": 3500,
  "mode": "BUY"
}
```

---

# 🎯 Learning Goals Behind Vestora

This project was built to deeply learn:

* Full Stack Development
* React Architecture
* REST APIs
* MongoDB Integration
* Fintech Product Design
* Component Reusability
* Dashboard Systems
* State Management
* Deployment Workflow
* Scalable Project Structure

---

# 🚀 Deployment

## Frontend & Dashboard

Deploy easily on:

* Vercel

## Backend

Deploy on:

* Render
* Railway

## Database

* MongoDB Atlas

---

# 🔮 Future Improvements

* Authentication & Authorization
* JWT Login System
* Live Stock APIs
* Real-time market updates
* Portfolio analytics
* Dark mode
* WebSockets
* AI-based investment insights
* Payment integration
* Advanced charts

---

# 👨‍💻 Developer

## Raj Tiwari

Full Stack Developer passionate about:

* Scalable applications
* Fintech products
* System design
* Problem solving
* Modern UI engineering

---

# 📬 Connect With Me

## GitHub

https://github.com/Rajtiwari0202

## LinkedIn

https://www.linkedin.com/in/rajtiwari02

---

# ⭐ If you liked this project

Give it a star ⭐ on GitHub.
