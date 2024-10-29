// src/components/Footer.js

import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-6">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} GameTopia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
