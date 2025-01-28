import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 ${isScrolled ? 'bg-[rgba(10,6,18,0.95)]' : 'bg-transparent'} backdrop-blur-lg py-4 px-[5%] z-[1000] border-b border-[rgba(186,85,211,0.1)] transition-all duration-300 ${isScrolled ? 'shadow-[0_4px_30px_rgba(0,0,0,0.1)]' : ''}`}>
      <div className="flex justify-between items-center max-w-[1400px] mx-auto">
        <div className="text-2xl font-bold bg-gradient-to-r from-[#00ff88] to-[#ba55d3] bg-clip-text text-transparent cursor-pointer">
          $MEMECOIN
        </div>
        
        <div className="hidden md:flex gap-8 items-center">
          <motion.a whileHover={{ y: -2 }} className="text-white cursor-pointer relative group">
            About
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gradient-to-r from-[#00ff88] to-[#ba55d3] transition-all duration-300 group-hover:w-full"></span>
          </motion.a>
          <motion.a whileHover={{ y: -2 }} className="text-white cursor-pointer relative group">
            Tokenomics
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gradient-to-r from-[#00ff88] to-[#ba55d3] transition-all duration-300 group-hover:w-full"></span>
          </motion.a>
          <motion.a whileHover={{ y: -2 }} className="text-white cursor-pointer relative group">
            Roadmap
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gradient-to-r from-[#00ff88] to-[#ba55d3] transition-all duration-300 group-hover:w-full"></span>
          </motion.a>
          <motion.a whileHover={{ y: -2 }} className="text-white cursor-pointer relative group">
            Community
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gradient-to-r from-[#00ff88] to-[#ba55d3] transition-all duration-300 group-hover:w-full"></span>
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#00ff88] to-[#ba55d3] border-none px-6 py-3 rounded-full text-black font-bold cursor-pointer transition-transform duration-200"
          >
            Connect Wallet
          </motion.button>
        </div>

        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white text-2xl cursor-pointer bg-transparent border-none"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[70px] left-0 right-0 bg-[rgba(10,6,18,0.98)] backdrop-blur-lg p-8 flex flex-col gap-6 border-b border-[rgba(186,85,211,0.1)]"
          >
            <a className="text-white cursor-pointer">About</a>
            <a className="text-white cursor-pointer">Tokenomics</a>
            <a className="text-white cursor-pointer">Roadmap</a>
            <a className="text-white cursor-pointer">Community</a>
            <button className="bg-gradient-to-r from-[#00ff88] to-[#ba55d3] border-none px-6 py-3 rounded-full text-black font-bold cursor-pointer transition-transform duration-200 hover:scale-105">
              Connect Wallet
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 