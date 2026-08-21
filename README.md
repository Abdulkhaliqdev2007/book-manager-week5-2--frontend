# 📚 Book Manager — Week 5

A full-stack Book Manager application built with React, Context API, Tailwind CSS, Node.js, Express, MongoDB, and automated testing.

This Week 5 version focuses on **testing across the stack**, including frontend unit/component tests, backend API tests, and end-to-end testing.

## ✨ Features

### 🔐 Authentication
- User registration
- User login
- JWT authentication
- Protected routes
- Logout functionality

### 📚 Book Management
- Create books
- View books
- Update books
- Delete books
- Search books
- Sort books
- Book cover image upload
- Form validation
- Loading and error states

### 🧪 Testing
- Frontend component tests using Vitest and React Testing Library
- User interaction tests
- Form validation tests
- Backend API tests using Jest and Supertest
- End-to-end tests using Playwright

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- React Router DOM
- React Context API
- Tailwind CSS
- Axios
- Lucide React
- Vitest
- React Testing Library
- Playwright
- JavaScript (ES6+)

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Multer
- Jest
- Supertest

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── BookCard.jsx
│   ├── BookForm.jsx
│   ├── DeleteConfirmDialog.jsx
│   ├── EmptyState.jsx
│   ├── ErrorAlert.jsx
│   ├── LoadingSpinner.jsx
│   ├── Navbar.jsx
│   ├── BookCard.test.jsx
│   └── BookForm.test.jsx
│
├── context/
│   └── BookContext.jsx
│
├── hooks/
│   └── useAuth.js
│
├── pages/
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── BookManager.jsx
│   └── Login.test.jsx
│
├── services/
│   ├── api.js
│   ├── authService.js
│   └── bookService.js
│
└── test/
    └── setup.js

e2e/
└── book-manager.spec.js

playwright.config.js
🚀 Installation

Clone the repository:

git clone https://github.com/Abdulkhaliqdev2007/book-manager-frontend-week5.git

Navigate to the project folder:

cd book-manager-frontend-week5

Install dependencies:

npm install
🔧 Environment Variables

Create a .env file in the frontend root directory if required:

VITE_API_URL=http://localhost:5000/api

Do not commit .env files to GitHub.

▶️ Run the Application

Start the frontend development server:

npm run dev

The frontend normally runs at:

http://localhost:5173

Make sure the backend server is also running.

🧪 Testing

This project includes automated tests across the frontend and backend.

Frontend Unit & Component Tests

Frontend tests are written using:

Vitest
React Testing Library

Run all frontend tests:

npm run test:run

Run tests in watch mode:

npm test

The frontend currently includes tests for:

BookCard component rendering and interactions
BookForm form submission
Login page rendering
Login form validation
Invalid email validation
Password visibility toggle
Successful login and navigation
Frontend Test Result
Test Files: 3 passed
Tests:      10 passed
🔄 End-to-End Testing

End-to-end tests are written using Playwright.

Run E2E tests:

npx playwright test

Run E2E tests with the browser visible:

npx playwright test --headed

The E2E tests simulate real user interactions with the application.

🖥️ Backend Testing

The backend uses:

Jest
Supertest

Backend tests cover core API endpoints, including authentication and book operations.

Navigate to the backend:

cd ../backend

Install dependencies:

npm install

Run backend tests:

npm run test

Current backend test result:

Test Suites: 3 passed
Tests:       12 passed

Backend repository:

https://github.com/Abdulkhaliqdev2007/book-manager-backend-week5.git

📊 Testing Summary
Test Area	Tool	Tests
Frontend Components	Vitest + React Testing Library	10
Backend API	Jest + Supertest	12
End-to-End	Playwright	Included
Total Frontend Tests		10
Total Backend Tests		12
🔗 Repositories
Frontend

https://github.com/Abdulkhaliqdev2007/book-manager-frontend-week5

Backend

https://github.com/Abdulkhaliqdev2007/book-manager-backend-week5

🎯 Week 5 Learning Goals

This project demonstrates:

Automated frontend testing
React component testing
User interaction testing
Form validation testing
Backend API testing
Happy-path API testing
Failure-case API testing
End-to-end testing
Test-driven debugging
Automated quality checks
Full-stack testing workflow
👨‍💻 Author
Hafiz Abdul Khaliq
GitHub:
https://github.com/Abdulkhaliqdev2007
