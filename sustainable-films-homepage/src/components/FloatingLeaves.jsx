// src/components/FloatingLeaves.jsx
import React from 'react';

const leafImages = ['/leaf1.png', '/leaf2.png', '/leaf3.png'];

const FloatingLeaves = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {Array.from({ length: 20 }).map((_, index) => {
        const size = Math.floor(Math.random() * 40) + 40; // 40–80px
        const left = Math.random() * 100;
        const duration = Math.random() * 20 + 10; // 10–30s
        const delay = Math.random() * 10;
        const leaf = leafImages[index % leafImages.length]; // cycle through leaf1-3

        return (
          <img
            key={index}
            src={leaf}
            alt="leaf"
            className="absolute animate-floatLeaf"
            style={{
              width: `${size}px`,
              left: `${left}%`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingLeaves;
