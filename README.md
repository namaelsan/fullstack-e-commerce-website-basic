# 🛍️ Fullstack E-Commerce Website (Basic)

A simple yet functional fullstack e-commerce website built using **React**, **Node.js**, **Express**, and **MongoDB**. This project serves as a foundational implementation of a complete e-commerce system with user authentication, product management, and cart functionality.

## 🚀 Features

- 🛒 Product listing
- 📦 Order management (basic)
- 💻 Frontend with React & Chakra
- 🌐 Backend API with Express.js
- 📁 MongoDB for database storage

## 🧰 Tech Stack

**Frontend:**
- React
- React Router
- Chakra v2
- Vite

**Backend:**
- Node.js
- Express
- MongoDB
- Mongoose
- dotenv
  

## 📁 Project Structure

```bash
fullstack-e-commerce-website-basic/
│
├── backend/                 # Node.js + Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── frontend/                # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── App.jsx
│       └── main.jsx
│
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/namaelsan/fullstack-e-commerce-website-basic
cd fullstack-e-commerce-website-basic
```

### 2. Backend & Frontend Setup

```bash
# Create a .env file and add your MongoDB connection string:
# MONGO_URI=your_mongo_connection_string
npm run build
```

### 3. Starting up the api & web interface

```bash
npm run start
```

The frontend and backend will run on `http://localhost:PORT`.

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

## 📸 Screenshots

> ![screenshot-20250523-170252Z-selected](https://github.com/user-attachments/assets/6e375421-651b-48b3-8396-49dba7d8e182)
> ![screenshot-20250523-170247Z-selected](https://github.com/user-attachments/assets/993b9503-005f-40ba-9fa8-63aee1035476)


## 💡 Future Improvements

- Payment integration (e.g., Stripe)
- Admin dashboard
- Product search and filter
- Responsive design improvements

## 📄 License

This project is licensed under the GPL License.
