import React from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const SocialProof = () => {
  const stats = [
    {
      emoji: "🚀",
      value: "420K+",
      label: "DIAMOND HANDS"
    },
    {
      emoji: "💎",
      value: "$6.9M",
      label: "MARKET CAP"
    },
    {
      emoji: "🌙",
      value: "69K",
      label: "HOLDERS"
    },
    {
      emoji: "🔥",
      value: "100%",
      label: "LP BURNED"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const emojiVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="stats" className="bg-gradient-to-b from-[#090619] to-[#000000] text-white py-24 px-8 relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute w-[600px] h-[600px] rounded-full blur-[100px] opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,var(--accent-primary),transparent_70%)] -top-[200px] -right-[200px]"></div>
      <div className="absolute w-[600px] h-[600px] rounded-full blur-[100px] opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,var(--accent-secondary),transparent_70%)] -bottom-[200px] -left-[200px]"></div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 max-w-7xl mx-auto w-full"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-[clamp(2.5rem,8vw,4rem)] text-center mb-16 bg-gradient-to-r from-[#00ff88] to-[#ba55d3] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(186,85,211,0.3)] font-bold tracking-wide leading-tight"
        >
          TO THE MOON!
          <span className="block text-[clamp(1.5rem,4vw,2rem)] mt-4 opacity-90 font-medium">
            and maybe uranus next 👀
          </span>
        </motion.h2>
        
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative w-[min(300px,80vw)] h-[min(300px,80vw)] mx-auto mb-16 filter drop-shadow-[0_0_30px_rgba(186,85,211,0.2)]"
        >
          <DotLottieReact
            src="/money.lottie"
            autoplay
            loop
            className="w-full h-full"
          />
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-8 w-full py-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="bg-gradient-to-br from-[#1F1F1F] to-[#2A2A2A] backdrop-blur-lg rounded-2xl p-8 relative overflow-hidden shadow-lg transition-all duration-300 flex flex-col items-center justify-center gap-4 group hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-300"></div>
              
              <motion.div 
                variants={emojiVariants}
                className="text-[clamp(2.5rem,6vw,3.5rem)] leading-none filter drop-shadow-[0_0_15px_rgba(186,85,211,0.5)] mb-4"
              >
                {stat.emoji}
              </motion.div>
              
              <motion.div className="text-[clamp(2rem,5vw,2.8rem)] font-bold bg-gradient-to-r from-[#00ff88] to-[#ba55d3] bg-clip-text text-transparent my-2 tracking-wide">
                {stat.value}
              </motion.div>
              
              <motion.div className="text-[clamp(1rem,2.5vw,1.3rem)] text-white/70 font-medium tracking-wide">
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SocialProof;
