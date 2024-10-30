// src/components/Login.js

import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import ForgotPasswordModal from './ForgotPasswordModal';
import RegisterModal from './RegisterModal';

function Login() {
  const { setAuthData } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/auth/login', {
        username,
        password,
      });
      const token = response.data;
      setAuthData({ token, username });
      navigate('/');
    } catch (error) {
      console.error('Login error', error);
      alert('Invalid credentials');
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* Logo and Title */}
          <div className="text-center">
            <Link to="/" className="flex justify-center items-center">
              {/* Logo */}
              <img
                className="h-12 w-12"
                src="/images/gametopia.png" // Replace with your logo path
                alt="Logo"
              />
              <span className="text-3xl font-extrabold text-gray-900 ml-2">GameTopia</span>
            </Link>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Welcome Back</h2>
            <p className="mt-2 text-sm text-gray-600">Please login to your account.</p>
          </div>
          {/* Form */}
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="sr-only">
                  Email address
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="relative">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-t-0 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 px-3 py-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            {/* Forgot Password */}
            <div className="flex items-center justify-between">
              <div></div>
              <div className="text-sm">
                <button
                  type="button"
                  onClick={() => setForgotPasswordOpen(true)}
                  className="font-medium text-primary hover:text-primary-dark"
                >
                  Forgot password?
                </button>
              </div>
            </div>
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Sign In
              </button>
            </div>
            {/* Sign-Up Link */}
            <div className="text-center text-sm">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => setRegisterOpen(true)}
                className="font-medium text-primary hover:text-primary-dark"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Modals */}
      {forgotPasswordOpen && (
        <ForgotPasswordModal onClose={() => setForgotPasswordOpen(false)} />
      )}
      {registerOpen && (
        <RegisterModal onClose={() => setRegisterOpen(false)} />
      )}
    </>
  );
}

export default Login;
