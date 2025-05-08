Student Management System project, covering:

✅ Project Description

🔧 Frontend & Backend Setup Instructions

🧩 MongoDB Integration

🚀 Features

🛠️ Challenges Faced

📷 Screenshots (placeholder links)

📁 Folder Structure

# 🎓 Student Management System

A full-stack web application to manage student records, built with **React**, **Node.js/Express**, and **MongoDB**. This app allows users to **add, edit, delete, and search** student data with a clean and modern user interface using **Material UI**.

---

## 📚 Features

- 📥 Add new students with validation
- 📋 Display a paginated list of students
- 🔍 Search students by name or course
- ✏️ Edit existing student details
- ❌ Delete student records
- 💅 Clean, modern UI with Material UI components
- 🌐 Full REST API integration (GET, POST, PUT, DELETE)

---

## 🖥️ Tech Stack

| Layer       | Technology                |
|-------------|---------------------------|
| Frontend    | React, Material UI, Axios |
| Backend     | Node.js, Express          |
| Database    | MongoDB (Mongoose)        |
| Validation  | Yup + React Hook Form     |

---

## 📁 Folder Structure

student-management/
├── backend/
│ ├── models/
│ ├── routes/
│ └── server.js
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ └── App.js


---

🌐 API Endpoints
| Method | Endpoint            | Description      |
| ------ | ------------------- | ---------------- |
| GET    | `/api/students`     | Get all students |
| POST   | `/api/students`     | Add new student  |
| PUT    | `/api/students/:id` | Update student   |
| DELETE | `/api/students/:id` | Delete student   |

💡 Challenges Faced
🧩 1. Connecting Frontend and Backend
Initial trouble due to CORS and incorrect proxy config. Solved with proper middleware setup and React proxy.

🧩 2. MongoDB Connection
Faced issues with missing mongod command. Resolved by installing MongoDB locally and switching to MongoDB Atlas for easier deployment.

🧩 3. Form Validation and UX
React Hook Form with Yup helped in structuring clean validations. Material UI elevated the form UI significantly.

🧩 4. Pagination + Search Logic
Implemented on both backend and frontend using limit, skip, and query params in Mongoose.

✅ Future Improvements
User authentication (JWT)

Role-based access (Admin/Student)

Deployment with Vercel + Render/Heroku

Toast notifications on actions

## 🚀 Getting Started
git clone https://github.com/mohammadshakirsaifi/React-Fullstack-Student-Management-Site.git
### 🔹 Prerequisites

- Node.js & npm
- MongoDB (local or Atlas)

---

### 🔹 Backend Setup

```bash
cd student-management-backend
npm install

## Create a .env file in the backend directory:

MONGO_URI=mongodb://localhost:27017/studentDB
PORT=5000

## Start the backend:

node server.js

##🔹 Frontend Setup

cd student-management-frontend
npm install
npm start

Frontend runs at: http://localhost:3000

Backend runs at: http://localhost:5000

📬 Contact
For feedback, questions, or suggestions:
Mohammad Shakir
📧 shakir0.saifi@gmail.com
