// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AuthProvider>
        <CartProvider>
          <Router>
            <App />
          </Router>
        </CartProvider>
      </AuthProvider>
    </ApolloProvider>
  </React.StrictMode>
);
