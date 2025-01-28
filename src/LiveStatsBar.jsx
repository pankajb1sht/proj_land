import React, { useState, useEffect } from "react";

const LiveStatsBar = () => {
  const [price, setPrice] = useState(0.000034);
  const [holders, setHolders] = useState(69420);
  
  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPrice(prev => prev * (1 + (Math.random() * 0.02 - 0.01)));
      setHolders(prev => prev + Math.floor(Math.random() * 10));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-around items-center bg-gradient-to-r from-[rgba(26,26,26,0.95)] to-[rgba(31,31,31,0.95)] text-white py-3 px-6 text-lg flex-wrap gap-5 backdrop-blur-lg border-b border-[rgba(186,85,211,0.2)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] sticky top-0 z-50 animate-[slideIn_0.5s_ease-out] lg:justify-around lg:px-6 md:justify-center md:text-base md:px-4 md:py-2 sm:text-sm sm:gap-4">
      <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300 md:flex-[1_1_40%] sm:flex-[1_1_100%] sm:justify-center">
        <span className="text-white/80">Price:</span>
        <span className="text-[#00FF7F] font-semibold">${price.toFixed(6)}</span>
        <span className="text-[#00FF7F] animate-pulse">↗️ 420.69%</span>
      </div>
      
      <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300 md:flex-[1_1_40%] sm:flex-[1_1_100%] sm:justify-center">
        <span className="text-white/80">Holders:</span>
        <span className="text-[#00FF7F] font-semibold">{holders.toLocaleString()}</span>
        <span className="text-[#00FF7F] animate-pulse">↗️</span>
      </div>
      
      <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300 md:flex-[1_1_40%] sm:flex-[1_1_100%] sm:justify-center">
        <span className="text-white/80">Burned:</span>
        <span className="text-[#00FF7F] font-semibold">50%</span>
        <span className="text-[#00FF7F] animate-pulse">🔥</span>
      </div>
      
      <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300 md:flex-[1_1_40%] sm:flex-[1_1_100%] sm:justify-center">
        <span className="text-white/80">TRENDING</span>
        <span className="text-[#00FF7F] font-semibold">#1</span>
        <span className="text-[#00FF7F] animate-pulse">🔥</span>
      </div>
    </div>
  );
};

export default LiveStatsBar;