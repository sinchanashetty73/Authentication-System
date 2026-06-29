# 🔐 Authentication System

A secure full-stack Authentication System built using **React.js**, **Flask**, **MongoDB**, **JWT Authentication**, and **bcrypt**. This project allows users to register, log in securely, access protected routes, and log out using JWT-based authentication.



## 📌 Features

- User Registration
- User Login
- Secure Password Hashing using bcrypt
- JWT Authentication
- Protected Dashboard
- Logout Functionality
- Input Validation
- Responsive Modern UI
- Glassmorphism Authentication Pages
- MongoDB Database Integration



## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- React Icons
- React Toastify
- Framer Motion
- CSS3

### Backend
- Python
- Flask
- Flask-CORS
- Flask-JWT-Extended
- Flask-PyMongo
- bcrypt
- python-dotenv

### Database
- MongoDB



# 📂 Project Structure


Authentication-System/
│
├── backend/
│   ├── app.py
│   ├── config.py
│   ├── extensions.py
│   ├── .env
│   ├── routes/
│   │      auth_routes.py
│   ├── middleware/
│   ├── models/
│   ├── utils/
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── styles/
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
│
└── README.md




# 🚀 Installation

## 1. Clone the Repository

bash
git clone https://github.com/yourusername/authentication-system.git


Go to the project folder.

bash
cd Authentication-System




# ⚙ Backend Setup

Go to backend folder

bash
cd backend


Create a virtual environment

### Windows

bash
python -m venv venv


Activate the environment

bash
venv\Scripts\activate


Install dependencies

bash
pip install -r requirements.txt


Create a **.env** file

env
MONGO_URI=mongodb://localhost:27017/auth_db
JWT_SECRET_KEY=your_secret_key


Run Flask Server

bash
python app.py


Backend runs at


http://127.0.0.1:5000




# 💻 Frontend Setup

Open a new terminal

bash
cd frontend


Install packages

bash
npm install


Run React

bash
npm run dev


Frontend runs at


http://localhost:5173




# 📡 API Endpoints

## Register


POST /register


Request

json
{
    "username":"John",
    "email":"john@gmail.com",
    "password":"123456"
}


Response

json
{
    "message":"Registration Successful"
}




## Login


POST /login


Request

json
{
    "email":"john@gmail.com",
    "password":"123456"
}


Response

json
{
    "message":"Login Successful",
    "token":"JWT_TOKEN"
}




## Dashboard


GET /dashboard
```

Header

```
Authorization:
Bearer JWT_TOKEN
```

Response

json
{
    "message":"Welcome",
    "user":"john@gmail.com"
}
```

---

# 🔒 Security Features

- Password hashing using bcrypt
- JWT Authentication
- Protected Routes
- Duplicate Email Validation
- Email Format Validation
- Password Length Validation
- Session Management using JWT
- Secure Logout



# 📸 Application Workflow

1. User registers with Username, Email, and Password.
2. Password is securely hashed using bcrypt.
3. User information is stored in MongoDB.
4. User logs in with valid credentials.
5. JWT token is generated.
6. JWT token is stored in localStorage.
7. Protected Dashboard is accessible only with a valid JWT.
8. User logs out by clearing the stored token.





# 🎯 Future Enhancements

- Forgot Password
- Email Verification
- Refresh Tokens
- User Profile Management
- OAuth Login (Google/Microsoft)
- Admin Panel
- Two-Factor Authentication (2FA)

