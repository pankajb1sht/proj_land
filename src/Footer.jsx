import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaTelegram, FaDiscord, FaMedium } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  
  return (
    <footer className="bg-gradient-to-b from-[rgba(10,6,18,0.95)] to-[rgba(0,0,0,0.98)] text-white py-16 pb-8 relative overflow-hidden w-full backdrop-blur-lg border-t border-[rgba(186,85,211,0.1)]">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8"
        >
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <h3 className="text-[clamp(1.1rem,2vw,1.3rem)] font-semibold mb-2 bg-gradient-to-r from-[#00ff88] to-[#ba55d3] bg-clip-text text-transparent tracking-wide">
              $MEMECOIN
            </h3>
            <p className="text-white/70">
              The next generation meme coin that's taking the crypto world by storm! 🚀
            </p>
            <motion.div variants={itemVariants} className="flex gap-6 mt-2">
              {[
                { icon: <FaTwitter />, href: 'https://twitter.com/memecoin', label: 'Follow us on Twitter' },
                { icon: <FaTelegram />, href: 'https://t.me/memecoin', label: 'Join our Telegram' },
                { icon: <FaDiscord />, href: 'https://discord.gg/memecoin', label: 'Join our Discord' },
                { icon: <FaMedium />, href: 'https://medium.com/memecoin', label: 'Read our Medium blog' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white opacity-90 text-2xl cursor-pointer transition-all duration-300 p-3 rounded-full bg-white/5 border border-white/10 hover:opacity-100 hover:text-[#ba55d3] hover:bg-white/10 hover:border-[#ba55d3] hover:-translate-y-1 focus:outline-2 focus:outline-[#00ff88] focus:outline-offset-2"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <h3 className="text-[clamp(1.1rem,2vw,1.3rem)] font-semibold mb-2 bg-gradient-to-r from-[#00ff88] to-[#ba55d3] bg-clip-text text-transparent tracking-wide">
              Quick Links
            </h3>
            <nav aria-label="Quick links" className="flex flex-col gap-2">
              {['About Us', 'Tokenomics', 'Roadmap', 'Whitepaper'].map((link, index) => (
                <motion.a
                  key={index}
                  href={`#${link.toLowerCase().replace(' ', '')}`}
                  className="text-white/70 text-[clamp(0.9rem,1.5vw,1rem)] opacity-90 transition-all duration-200 hover:text-white hover:opacity-100 hover:translate-x-1 focus:outline-2 focus:outline-[#00ff88] focus:outline-offset-2 focus:rounded-sm py-1 flex items-center gap-2"
                >
                  {link}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <h3 className="text-[clamp(1.1rem,2vw,1.3rem)] font-semibold mb-2 bg-gradient-to-r from-[#00ff88] to-[#ba55d3] bg-clip-text text-transparent tracking-wide">
              Resources
            </h3>
            <nav aria-label="Resources" className="flex flex-col gap-2">
              {[
                { name: 'Documentation', href: '/docs' },
                { name: 'Smart Contract', href: '/contract' },
                { name: 'Audit Report', href: '/audit' }
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-white/70 text-[clamp(0.9rem,1.5vw,1rem)] opacity-90 transition-all duration-200 hover:text-white hover:opacity-100 hover:translate-x-1 focus:outline-2 focus:outline-[#00ff88] focus:outline-offset-2 focus:rounded-sm py-1 flex items-center gap-2"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Added new footer column */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <h3 className="text-[clamp(1.1rem,2vw,1.3rem)] font-semibold mb-2 bg-gradient-to-r from-[#00ff88] to-[#ba55d3] bg-clip-text text-transparent tracking-wide">
              Legal
            </h3>
            <div className="flex flex-col gap-2">
              <p className="text-white/70 text-sm">© {currentYear} MEMECOIN. All rights reserved.</p>
              <nav className="flex flex-col gap-2">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, index) => (
                  <motion.a
                    key={index}
                    href={`/${link.toLowerCase().replace(' ', '-')}`}
                    className="text-white/70 text-sm no-underline transition-all duration-200 hover:text-white focus:outline-2 focus:outline-[#00ff88] focus:outline-offset-2 focus:rounded-sm"
                  >
                    {link}
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
