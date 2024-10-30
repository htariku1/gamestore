// src/components/ForgotPasswordModal.js

import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

function ForgotPasswordModal({ onClose }) {
  const [email, setEmail] = useState('');
  const [confirmationScreen, setConfirmationScreen] = useState(false);

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Implement reset password functionality
    // For now, we'll just show the confirmation screen
    setConfirmationScreen(true);
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
          {confirmationScreen ? (
            <div className="p-6 text-center">
              <p className="text-lg font-semibold mb-4">
                If an account exists for {email}, you will get an email with instructions on resetting your password. If it doesn't arrive, be sure to check your spam folder.
              </p>
              <button
                onClick={onClose}
                className="mt-4 text-primary hover:text-primary-dark"
              >
                Back to Log in
              </button>
            </div>
          ) : (
            <form onSubmit={handleResetPassword} className="p-6">
              <h2 className="text-xl font-bold text-center mb-4">
                Enter your email to reset password
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
              <button
                type="submit"
                className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-900"
              >
                Reset password
              </button>
              <button
                type="button"
                onClick={onClose}
                className="mt-2 w-full text-center text-primary hover:text-primary-dark"
              >
                Cancel
              </button>
            </form>
          )}
        </div>
      </div>
      {/* Background overlay */}
      <div className="fixed inset-0 bg-black opacity-50"></div>
    </div>
  );
}

export default ForgotPasswordModal;
