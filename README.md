# 📚 Book Manager — Week 5

A full-stack Book Manager application built with **React, Context API, Tailwind CSS, Node.js, Express, MongoDB, and automated testing**.

This Week 5 version focuses on **testing across the stack, full-stack deployment, SEO, accessibility, and performance optimization**.

---

## ✨ Features

### 🔐 Authentication

* User registration
* User login
* JWT authentication
* Protected routes
* Logout functionality

### 📚 Book Management

* Create books
* View books
* Update books
* Delete books
* Search books
* Sort books
* Book cover image upload
* Form validation
* Loading and error states

### 📊 Dashboard

* Book statistics
* Data visualization
* Charts powered by backend data

### 🧪 Testing

* Frontend component tests using Vitest and React Testing Library
* User interaction tests
* Form validation tests
* Backend API tests using Jest and Supertest
* End-to-end tests using Playwright

### 🚀 Deployment & Optimization

* Frontend deployed to Render
* Backend deployed to Render
* Production environment variables configured
* SEO metadata implemented
* `robots.txt` configured
* Image `alt` attributes added
* Accessible form controls and links
* Responsive mobile and desktop layout
* Lighthouse performance and quality audit completed

---

# 🛠️ Tech Stack

## Frontend

* React
* Vite
* React Router DOM
* React Context API
* Tailwind CSS
* Axios
* Lucide React
* Recharts
* Vitest
* React Testing Library
* Playwright
* JavaScript (ES6+)

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* Multer
* Jest
* Supertest

---

# 📁 Project Structure

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
│   ├── Dashboard.jsx
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
```

---

# 🚀 Installation

Clone the frontend repository:

```bash
git clone https://github.com/Abdulkhaliqdev2007/book-manager-frontend-week5.git
```

Navigate to the project:

```bash
cd book-manager-frontend-week5
```

Install dependencies:

```bash
npm install
```

---

# 🔧 Environment Variables

Create a `.env` file in the frontend root directory:

```env
VITE_API_URL=http://localhost:5000/api
```

For the deployed frontend, the API URL is configured to use the production backend:

```env
VITE_API_URL=https://book-manager-week5-2-backend.onrender.com/api
```

> Do not commit `.env` files containing private credentials to GitHub.

---

# ▶️ Run the Application

Start the frontend development server:

```bash
npm run dev
```

The frontend normally runs at:

```text
http://localhost:5173
```

Make sure the backend server is also running.

---

# 🌐 Deployment

## Frontend

The frontend is deployed as a production build on Render.

**Live App:**

[https://book-manager-week5-2-frontend.onrender.com](https://book-manager-week5-2-frontend.onrender.com)

The frontend communicates with the deployed Express.js backend through the `VITE_API_URL` environment variable.

## Backend

**Production Backend:**

[https://book-manager-week5-2-backend.onrender.com](https://book-manager-week5-2-backend.onrender.com)

**API Base URL:**

[https://book-manager-week5-2-backend.onrender.com/api](https://book-manager-week5-2-backend.onrender.com/api)

**Backend Repository:**

[https://github.com/Abdulkhaliqdev2007/book-manager-week5-2-backend](https://github.com/Abdulkhaliqdev2007/book-manager-week5-2-backend)

---

# 🧪 Testing

This project includes automated tests across the frontend and backend.

## Frontend Unit & Component Tests

Frontend tests are written using:

* Vitest
* React Testing Library

Run all frontend tests:

```bash
npm run test:run
```

Run tests in watch mode:

```bash
npm test
```

The frontend currently includes tests for:

* BookCard component rendering
* BookCard user interactions
* BookForm submission
* Login page rendering
* Login form validation
* Invalid email validation
* Password visibility toggle
* Successful login and navigation

### Frontend Test Result

```text
Test Files: 3 passed
Tests:      10 passed
```

---

# 🔄 End-to-End Testing

End-to-end tests are written using **Playwright**.

Run E2E tests:

```bash
npx playwright test
```

Run E2E tests with the browser visible:

```bash
npx playwright test --headed
```

The E2E tests simulate real user interactions with the application.

---

# 🖥️ Backend Testing

The backend uses:

* Jest
* Supertest

Backend tests cover core API endpoints, including authentication and book operations.

Navigate to the backend:

```bash
cd ../backend
```

Install dependencies:

```bash
npm install
```

Run backend tests:

```bash
npm run test
```

### Backend Test Result

```text
Test Suites: 3 passed
Tests:       12 passed
```

### Backend Repository

[https://github.com/Abdulkhaliqdev2007/book-manager-week5-2-backend](https://github.com/Abdulkhaliqdev2007/book-manager-week5-2-backend)

---

# 📊 Testing Summary

| Test Area           | Tool                           |    Tests |
| ------------------- | ------------------------------ | -------: |
| Frontend Components | Vitest + React Testing Library |       10 |
| Backend API         | Jest + Supertest               |       12 |
| End-to-End          | Playwright                     | Included |

**Total Frontend Tests: 10**

**Total Backend Tests: 12**

---

# 🔍 SEO & Accessibility

The application was checked using Google Lighthouse.

Implemented SEO and accessibility improvements include:

* Valid document title
* Meta description
* Descriptive links
* Crawlable links
* Image `alt` attributes
* Valid `robots.txt`
* Responsive layout
* Accessible form labels
* Accessible button labels
* Successful HTTP status codes

### Latest Lighthouse Results

```text
SEO:             100
Accessibility:   100
Best Practices:  100
Performance:      98
```

---

# ⚡ Performance

The application was tested using Lighthouse with mobile emulation and throttled network conditions.

### Current Lighthouse Score

```text
Performance:     99
Accessibility:  100
Best Practices: 100
SEO:             100
```

Performance optimization work included:

* Production Vite build
* Code splitting
* Lazy-loaded application pages
* Optimized assets
* Responsive layout
* Removal of unnecessary development resources from production

> Lighthouse scores can vary slightly between runs depending on network conditions, device emulation, browser state, server response time, and other environmental factors.

---

# 🏗️ Architecture Overview

```text
┌──────────────────────┐
│      React/Vite      │
│      Frontend        │
└──────────┬───────────┘
           │
           │ Axios / REST API
           ▼
┌──────────────────────┐
│   Node.js + Express  │
│       Backend        │
└──────────┬───────────┘
           │
           │ Mongoose
           ▼
┌──────────────────────┐
│    MongoDB Atlas     │
│      Database        │
└──────────────────────┘
```

The frontend communicates with the Express REST API using Axios.

Authentication uses JWT tokens, while MongoDB Atlas stores users and books.

---

# 🔗 Repositories

## Frontend

[https://github.com/Abdulkhaliqdev2007/book-manager-frontend-week5](https://github.com/Abdulkhaliqdev2007/book-manager-frontend-week5)

## Backend

[https://github.com/Abdulkhaliqdev2007/book-manager-week5-2-backend](https://github.com/Abdulkhaliqdev2007/book-manager-week5-2-backend)

---

# 🎯 Week 5 Learning Goals

This project demonstrates:

* Automated frontend testing
* React component testing
* User interaction testing
* Form validation testing
* Backend API testing
* Happy-path API testing
* Failure-case API testing
* End-to-end testing
* Test-driven debugging
* Automated quality checks
* Full-stack deployment
* Environment configuration
* SEO optimization
* Accessibility improvements
* Performance auditing
* Full-stack testing workflow

---

# 👨‍💻 Author

**Hafiz Abdul Khaliq**

GitHub:

[https://github.com/Abdulkhaliqdev2007](https://github.com/Abdulkhaliqdev2007)
