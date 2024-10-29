import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Games from './components/Games';
import Consoles from './components/Consoles';
import Accessories from './components/Accessories';
import Cart from './components/Cart';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/:category" element={<Games />} />
          <Route path="/consoles" element={<Consoles />} />
          <Route path="/consoles/:category" element={<Consoles />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/accessories/:subCategory" element={<Accessories />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
