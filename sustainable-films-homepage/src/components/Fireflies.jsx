import React from 'react';

const Fireflies = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {Array.from({ length: 30 }).map((_, index) => {
        const size = Math.random() * 4 + 2; // 2–6px
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const duration = Math.random() * 4 + 2; // 2–6s
        const delay = Math.random() * 10;

        return (
          <div
            key={index}
            className="absolute rounded-full bg-yellow-200 opacity-70 animate-firefly"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              top: `${top}%`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`
            }}
          />
        );
      })}
    </div>
  );
};

export default Fireflies;
