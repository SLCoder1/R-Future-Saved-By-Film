// src/components/Layout.jsx
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import ChatBox from '../ChatBox'; // adjust path if it's in src/components/
import chatIcon from '../components/chatImage.png'; // adjust based on your folder


export default function Layout({ children }) {
  const [showChatBox, setShowChatBox] = useState(false);

  const toggleChatBox = () => {
    setShowChatBox(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-[#3c3b28] text-[#f5f0e1] font-serif">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6">
        {/* Logo and Title */}
        <div className="flex flex-col items-start">
          <div className="flex items-center space-x-2">
            <img src="/logo.svg" alt="Logo" className="w-6 h-6" />
            <span className="text-sm">R'Frame: Stories</span>
          </div>
          <span className="text-sm">for Sustainability</span>
        </div>

        {/* Nav Links */}
        <div className="flex space-x-6 text-sm">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/animated" className="hover:underline">Animated/Family</Link>
          <Link to="/dystopian" className="hover:underline">Dystopian/Sci-Fi</Link>
          <Link to="/documentary" className="hover:underline">Documentary</Link>
          <Link to="/drama" className="hover:underline">Drama</Link>
        </div>
      </nav>

      <main className="px-10 pb-10">
        {children}
      </main>
      {/* Floating Chat Icon */}
      <div className = "p-4">
        <button
          onClick={toggleChatBox}
          className="fixed bottom-6 right-6 z-50 bg-white rounded-full shadow-lg p-2 hover:scale-105 transition"
        >
          <img src={chatIcon} alt="Toggle Chat" className="w-10 h-10" />
        </button>

        {showChatBox && (
          <div className="fixed bottom-20 right-6 z-50">
            <ChatBox />
          </div>
        )}
      </div>
      

    </div>
  );
}
