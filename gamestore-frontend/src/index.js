// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient'; // You need to set up Apollo Client
import { CartProvider } from './contexts/CartContext'; // New Context
import './index.css'; // Or './styles.css' if that's your stylesheet

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <CartProvider>
        <Router>
          <App />
        </Router>
      </CartProvider>
    </ApolloProvider>
  </React.StrictMode>
);
