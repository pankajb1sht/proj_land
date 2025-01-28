import React from "react";
import { motion } from "framer-motion";
import { BsChevronRight } from "react-icons/bs";

const Roadmap = () => {
  const roadmapData = [
    {
      level: "🌑",
      stage: "SECRET LAUNCH",
      progress: "100%",
      description: "Stealth dropped like a raccoon ninja. 500 SOL LP burned 🔥",
      status: "completed"
    },
    {
      level: "🪐",
      stage: "GALACTIC LISTING",
      progress: "NOW!",
      description: "Raydium & Jupiter listing LIVE. Buy now or watch from Earth 🌍",
      status: "current"
    },
    {
      level: "💎",
      stage: "DIAMOND PAWS",
      progress: "Next",
      description: "Top 10 CEX listing + MEMECOIN merch store. Hoodies with rocket raccoons incoming!",
      status: "upcoming"
    },
    {
      level: "🌕",
      stage: "MOONSHOT",
      progress: "Locked",
      description: "$1B MCap or we livestream eating moon rocks. Not financial advice.",
      status: "locked"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="bg-gradient-to-b from-[rgba(10,6,18,0.95)] to-[rgba(0,0,0,0.98)] text-white py-24 px-4 relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-30" />
      <div className="absolute w-[800px] h-[800px] rounded-full blur-[120px] opacity-20 bg-gradient-to-r from-[#00ff88] to-[#ba55d3] animate-pulse" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 max-w-6xl w-full mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-5xl text-center mb-24 font-bold"
        >
          <span className="bg-gradient-to-r from-[#00ff88] to-[#ba55d3] bg-clip-text text-transparent">
            ROADMAP TO GALACTIC DOMINATION
          </span>
        </motion.h2>

        <div className="relative">
          {/* Single middle line */}
          <div className="absolute left-1/2 top-8 h-[calc(100%-4rem)] w-[2px] bg-gradient-to-b from-[#00ff88] to-[#ba55d3] transform -translate-x-1/2"></div>

          <div className="space-y-20 relative">
            {roadmapData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col md:flex-row items-center gap-8"
              >
                {/* Milestone marker on the left */}
                <div className="flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-[#00ff88]/20 to-[#ba55d3]/20 border border-[#ba55d3]/30 absolute left-1/2 transform -translate-x-1/2">
                  <span className="text-3xl">{item.level}</span>
                </div>

                {/* Content box */}
                <motion.div 
                  className="flex-1 w-full md:w-auto"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-gradient-to-br from-[rgba(31,31,31,0.95)] to-[rgba(42,42,42,0.95)] backdrop-blur-lg p-8 rounded-3xl border border-[rgba(186,85,211,0.15)] shadow-xl hover:shadow-[0_20px_40px_rgba(0,255,127,0.2)] transition-all duration-300">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      <span className="bg-gradient-to-r from-[#00ff88] to-[#ba55d3] bg-clip-text text-transparent">
                        {item.stage}
                      </span>
                      {item.status === 'current' && (
                        <BsChevronRight className="w-6 h-6 text-[#ba55d3] animate-pulse" />
                      )}
                    </h3>
                    
                    <p className="text-lg text-white/80 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold gap-2
                      ${item.status === 'completed' ? 'bg-[#00ff88]/20 text-[#00ff88]' : ''}
                      ${item.status === 'current' ? 'bg-[#ba55d3]/20 text-[#ba55d3] animate-pulse' : ''}
                      ${item.status === 'upcoming' ? 'bg-white/10 text-white/70' : ''}
                      ${item.status === 'locked' ? 'bg-white/5 text-white/50' : ''}`}
                    >
                      {item.progress}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes dashOffset {
          from {
            stroke-dashoffset: 1000;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        
        .path-animation {
          animation: dashOffset 3s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Roadmap;
