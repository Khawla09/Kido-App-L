import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    try {
        const response =await axios.post('http://localhost:3005/api/user/login',{username,password, });
      setUser(response.data.user);
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  const signup = async (email, username, password) => {
    try {
        axios.post("http://localhost:3005/api/user/register",{email, username, password})
      // Automatically log in after signup (optional)
    //   await login(username, password);
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Verify token and get user info (optional)
      setUser({ username: "username-from-token" }); // Replace with actual user data retrieval
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
