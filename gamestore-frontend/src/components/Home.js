// src/components/Home.js

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        playsInline
        className="absolute w-full h-full object-cover"
        onEnded={(e) => e.target.pause()}
      >
        <source src="/videos/animated-logo.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-background bg-opacity-70 flex flex-col items-center justify-center">
        <h1 className="text-6xl font-extrabold mb-4 text-accent">
          Welcome to GameTopia
        </h1>
        <p className="text-2xl font-bold mb-8 text-gray-700 ">
          Discover the best games, consoles, and accessories.
        </p>
        <Link
          to="/games"
          className="bg-primary hover:bg-accent text-white font-bold py-3 px-6 rounded-full"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}

export default Home;
