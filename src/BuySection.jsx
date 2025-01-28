import React from "react";
import { motion } from "framer-motion";

const BuySection = () => {
  const steps = [
    {
      title: "Connect Wallet",
      description: "Use any Solana-compatible wallet to connect securely.",
      icon: "🔗",
    },
    {
      title: "Buy SOL",
      description: "Transfer SOL to your wallet from a preferred exchange.",
      icon: "💰",
    },
    {
      title: "Swap for MEMECOIN",
      description: "Use Raydium or Jupiter to swap your SOL for MEMECOIN tokens.",
      icon: "🔄",
    },
    {
      title: "HODL or Use",
      description: "Store MEMECOIN in your wallet, stake it, or trade it.",
      icon: "🚀",
    },
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

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="bg-gradient-to-b from-[rgba(10,6,18,0.95)] to-[rgba(0,0,0,0.98)] text-white py-24 px-8 relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute w-[600px] h-[600px] rounded-full blur-[100px] opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,var(--accent-primary),transparent_70%)] -top-[200px] -left-[200px]"></div>
      <div className="absolute w-[600px] h-[600px] rounded-full blur-[100px] opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,var(--accent-secondary),transparent_70%)] -bottom-[200px] -right-[200px]"></div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 max-w-7xl mx-auto w-full"
      >
        <motion.h2
          variants={itemVariants}
          className="text-[clamp(2rem,5vw,3rem)] text-center mb-16 bg-gradient-to-r from-[#00ff88] to-[#ba55d3] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(186,85,211,0.3)] font-bold tracking-wide"
        >
          HOW TO BUY MEMECOIN
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-8 items-stretch relative z-10 py-6"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gradient-to-br from-[rgba(31,31,31,0.95)] to-[rgba(42,42,42,0.95)] backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-[rgba(186,85,211,0.2)] relative overflow-hidden transition-all duration-300 flex flex-col gap-3 group hover:-translate-y-1 hover:border-[rgba(186,85,211,0.4)] hover:shadow-[0_20px_40px_rgba(0,255,127,0.2)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(186,85,211,0.1),transparent_40%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              
              <div className="flex items-center gap-3 mb-3">
                <motion.span
                  variants={iconVariants}
                  whileHover="hover"
                  className="text-[clamp(1.5rem,4vw,2rem)] leading-none drop-shadow-[0_0_10px_rgba(186,85,211,0.5)]"
                >
                  {step.icon}
                </motion.span>
                <h3 className="text-[clamp(1.2rem,3vw,1.8rem)] text-[#00ff88] font-semibold leading-tight">
                  {step.title}
                </h3>
              </div>

              <p className="text-[clamp(1rem,2vw,1.2rem)] leading-relaxed text-white/70 flex-grow">
                {step.description}
              </p>

              <div className="text-sm font-semibold text-[#ba55d3] text-right tracking-wide mt-3">
                Step {index + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-[#00ff88] to-[#ba55d3] px-[clamp(2rem,4vw,3.5rem)] py-[clamp(1rem,2vw,1.4rem)] text-[clamp(1.1rem,1.5vw,1.2rem)] rounded-2xl text-white font-semibold mx-auto mt-16 relative overflow-hidden border-2 border-white/10 transition-all duration-300 flex items-center gap-3 hover:shadow-[0_20px_40px_rgba(0,255,127,0.3)] hover:border-white/20 group"
        >
          <span className="relative z-10">BUY MEMECOIN NOW 🚀</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default BuySection;