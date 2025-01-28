import React, { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const { hours, minutes, seconds } = prev;
        if (seconds > 0) return { ...prev, seconds: seconds - 1 };
        if (minutes > 0) return { hours, minutes: minutes - 1, seconds: 59 };
        if (hours > 0) return { hours: hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0612] flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ba55d320_0%,transparent_70%)] animate-pulse" />
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#0a0612] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#0a0612] to-transparent" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 relative -mt-20"
          >
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#00ff88]/10 to-[#ba55d3]/10 border border-[#00ff88]/20"
              >
                <span className="text-[#00ff88] font-bold">🔥 Next 1000x Gem on Solana</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-6xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-[#00ff88] to-[#ba55d3] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(186,85,211,0.3)]">
                  MOON MISSION
                </span>
                <div className="text-4xl mt-4 text-[white]">ACTIVATED 🚀</div>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-white/80"
              >
                Don't miss your chance to join the most hyped memecoin launch of 2024! 
                Early birds get the gains 💎✨
              </motion.p>
            </div>

            
  {/* Timer Section */}
<motion.div 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5 }}
  className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
>
  <div className="grid grid-cols-3 gap-8">
    {[
      { value: timeLeft.hours, label: 'HOURS' },
      { value: timeLeft.minutes, label: 'MINUTES' },
      { value: timeLeft.seconds, label: 'SECONDS' }
    ].map((item, index) => (
      <div key={index} className="text-center">
        <div className="text-6xl font-bold bg-gradient-to-r from-[#00ff88] to-[#ba55d3] bg-clip-text text-transparent">
          {item.value.toString().padStart(2, '0')}
        </div>
        <div className="text-lg text-white/60 mt-2">{item.label}</div>
      </div>
    ))}
  </div>
  <div className="text-center mt-2 text-white/80 text-xl font-semibold">Until Presale Ends!</div>
</motion.div>




            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-[#00ff88] to-[#ba55d3] text-white font-bold text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(186,85,211,0.5)] hover:-translate-y-1">
                <span className="relative z-10">🚀 JOIN PRESALE NOW</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 rounded-xl" />
              </button>
              <button className="px-8 py-4 rounded-xl border-2 border-[#ba55d3]/30 text-white/90 font-bold text-lg hover:bg-[#ba55d3]/10 transition-all duration-300">
                Read Whitepaper 📄
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 12 }}
            animate={{ opacity: 1, scale: 1, rotate: 6 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/20 to-[#ba55d3]/20 blur-3xl animate-pulse" />
            <div className="relative z-10">
              <DotLottieReact 
                src="Animation - 1738039878429(1).lottie"
                loop
                autoplay
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;