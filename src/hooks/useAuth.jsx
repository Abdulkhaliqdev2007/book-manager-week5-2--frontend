import { createContext, useContext, useState, useEffect } from 'react';
import {
  signup as signupApi,
  login as loginApi,
  getMe,
} from '../services/authService';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');

    try {
      return savedUser ? JSON.parse(savedUser) : null;
    } catch {
      localStorage.removeItem('user');
      return null;
    }
  });

  const [loading, setLoading] = useState(() => {
    return !!localStorage.getItem('token');
  });

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      setLoading(false);
      return;
    }

    const validateAuth = async () => {
      try {
        await getMe();
      } catch (err) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    validateAuth();
  }, []);

  const signup = async (userData) => {
    const data = await signupApi(userData);

    const newUser = {
      name: data.name,
      email: data.email,
    };

    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(newUser));

    setUser(newUser);

    return data;
  };

  const login = async (credentials) => {
    const data = await loginApi(credentials);

    const loggedInUser = {
      name: data.name,
      email: data.email,
    };

    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(loggedInUser));

    setUser(loggedInUser);

    return data;
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    window.location.href = '/login';
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signup,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};