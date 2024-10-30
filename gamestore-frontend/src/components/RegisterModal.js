// src/components/RegisterModal.js

import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import axios from 'axios';

function RegisterModal({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/auth/register', {
        username: email,
        password,
      });
      alert('Account created successfully');
      onClose();
    } catch (error) {
      console.error('Registration error', error);
      alert('Registration failed');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md">
          {/* Close Button */}
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            onClick={onClose}
          >
            <FaTimes />
          </button>
          <form onSubmit={handleCreateAccount} className="p-6">
            <h2 className="text-xl font-bold text-center mb-4">
              Join GameTopia for free
            </h2>
            <div className="mb-4">
              <input
                type="email"
                required
                placeholder="EMAIL"
                className="w-full px-3 py-2 bg-gray-100 rounded focus:outline-none focus:ring-primary focus:border-primary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                required
                placeholder="PASSWORD"
                className="w-full px-3 py-2 bg-gray-100 rounded focus:outline-none focus:ring-primary focus:border-primary"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
            >
              Create account
            </button>
            <p className="mt-2 text-sm text-center">
              By clicking 'Create account', you agree to the GameTopia{' '}
              <a href="/privacy-policy" className="text-primary hover:text-primary-dark">
                Privacy Policy
              </a>.
            </p>
            <p className="mt-4 text-center">
              Already have an account?{' '}
              <button
                type="button"
                onClick={onClose}
                className="text-primary hover:text-primary-dark"
              >
                Log in
              </button>
            </p>
          </form>
        </div>
      </div>
      {/* Background overlay */}
      <div className="fixed inset-0 bg-black opacity-50"></div>
    </div>
  );
}

export default RegisterModal;
