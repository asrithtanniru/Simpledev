"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import useTheme from './Theme-provider'

export default function ProfileImage() {
  const { toggleTheme, theme } = useTheme();
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setShowTooltip(true);
        // Hide tooltip after 4 seconds
        setTimeout(() => setShowTooltip(false), 4000);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [hasInteracted]);

  const handleClick = () => {
    toggleTheme();
    setHasInteracted(true);
    setShowTooltip(false);
  };

  const handleMouseEnter = () => {
    setHasInteracted(true);
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-20 animate-pulse blur-sm"></div>

      <div
        className="relative w-36 h-36 rounded-full overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 border-2 border-foreground group"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src="/images/image.png"
          alt="Asrith Tanniru"
          width={144}
          height={144}
          className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
          priority
        />

        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-2">
            {theme === 'dark' ? (
              <div className="bg-yellow-400 rounded-full p-2 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              </div>
            ) : (
              <div className="bg-slate-700 rounded-full p-2 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              </div>
            )}
          </div>
        </div>

        <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
      </div>

      <div className={`absolute -top-16 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${showTooltip ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}>
        <div className="bg-black dark:bg-white text-white dark:text-black px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg">
          {theme === 'dark' ? 'Switch to light mode?' : 'Switch to dark mode?'}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black dark:border-t-white"></div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-30 ${i === 0 ? 'top-2 right-4' : i === 1 ? 'bottom-6 left-2' : 'top-8 right-2'
              }`}
            style={{
              animationDelay: `${i * 0.5}s`,
              animationDuration: '4s'
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
