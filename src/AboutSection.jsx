import React from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const AboutSection = () => {
  const cardAnimation = {
    hidden: { opacity: 0, x: 50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.8 },
    }),
  };

  return (
    <section className="py-36 px-[10%] bg-[radial-gradient(circle_at_center,#0a0612_10%,#000000_100%)] text-white relative z-10 min-h-screen flex flex-col justify-center md:py-24 md:px-[5%]">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="font-['Space_Grotesk'] text-6xl mb-20 bg-gradient-to-r from-[#00ff88] via-[#00ff88] to-[#ba55d3] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(186,85,211,0.3)] text-center md:text-5xl md:mb-16"
      >
        WHY MEMECOIN WILL DOMINATE THE MEMEVERSE
      </motion.h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mx-auto lg:gap-12">
        {/* Lottie Animation */}
        <motion.div 
          initial={{ opacity: 1, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full h-full flex items-center justify-center "
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,255,136,0.1)] to-[rgba(186,85,211,0.1)] rounded-3xl" />
          <DotLottieReact
            src="/newdo.lottie"
            loop
            autoplay
            className="w-full h-full object-contain relative z-10"
          />
        </motion.div>
        
        {/* Info Section */}
        <div className="flex flex-col gap-8">
          {[
            {
              icon: "🛸",
              title: "Quantum Tokenomics",
              description:
                "Deflationary burn + 0% tax. Yes, we're smarter than your average raccoon.",
            },
            {
              icon: "🤖",
              title: "AI-Powered Hype Engine",
              description:
                "Our AI tweets 69 dank memes/hour. Viral or we die trying.",
            },
            {
              icon: "🌌",
              title: "SpaceDAO Governance",
              description:
                "Holders vote on galactic conquest targets. Mars first, then your ex's wallet.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardAnimation}
              className="bg-gradient-to-br from-[rgba(31,31,31,0.95)] to-[rgba(42,42,42,0.95)] backdrop-blur-lg text-white p-8 rounded-2xl relative shadow-[0_10px_30px_rgba(0,255,127,0.15)] overflow-hidden z-10 border border-[rgba(186,85,211,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,255,127,0.2)] group"
            >
              <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(186,85,211,0.15),transparent_70%)] transition-transform duration-500 scale-0 group-hover:scale-100" />
              
              <h3 className="text-3xl mb-4 text-[#00ff88] relative z-10 flex items-center gap-3 font-semibold md:text-2xl">
                <span className="text-4xl">{card.icon}</span> {card.title}
              </h3>
              <p className="text-lg leading-relaxed text-white/90 relative z-10 md:text-base">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
