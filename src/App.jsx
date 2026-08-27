import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import { AuthProvider } from "./hooks/useAuth";
import { BookProvider } from "./context/BookContext";

import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import LoadingSpinner from "./components/LoadingSpinner";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const BookManager = lazy(() => import("./pages/BookManager"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <AuthProvider>
      <BookProvider>
        <BrowserRouter>
          <Navbar />

          <Suspense
            fallback={
              <div className="flex min-h-[60vh] items-center justify-center">
                <LoadingSpinner />
              </div>
            }
          >
            <Routes>
              <Route
                path="/login"
                element={<Login />}
              />

              <Route
                path="/signup"
                element={<Signup />}
              />

              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <BookManager />
                  </PrivateRoute>
                }
              />

              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />

              <Route
                path="*"
                element={<NotFound />}
              />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </BookProvider>
    </AuthProvider>
  );
}

export default App;