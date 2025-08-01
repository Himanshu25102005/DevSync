import React, { useState } from 'react'
import { useTheme } from '../contexts/themeContext'
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: 'About', href: '#' },
  { label: 'FocusSync', href: '#' },
  { label: 'DoneGeon', href: '#' },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  // Animation variants
  const navVariants = {
    hidden: { y: -60, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 80, damping: 12 } }
  };
  const linksContainerVariants = {
    visible: { transition: { staggerChildren: 0.13, delayChildren: 0.2 } },
  };
  const linkVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 80, damping: 12 } },
  };
  const mobileMenuVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 60, damping: 15 } },
    exit: { x: '100%', opacity: 0, transition: { duration: 0.2 } }
  };

  return (
    
    <motion.nav
      className={`fixed top-0 left-0 w-full z-30 flex justify-evenly items-center font-semibold px-6 py-4 shadow-md ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="text-2xl font-bold tracking-tight"><a href="#">DevSync</a></div>

      {/* Desktop Links */}
      <motion.div
        className="hidden md:flex items-center gap-8 text-lg"
        variants={linksContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {navLinks.map((link, idx) => (
          <motion.a
            key={link.label}
            href={link.href}
            className="hover:text-primary transition-colors"
            variants={linkVariants}
          >
            {link.label}
          </motion.a>
        ))}
        <motion.button
          onClick={toggleTheme}
          className="cursor-pointer text-2xl focus:outline-none"
          variants={linkVariants}
        >
          <i className={theme === 'dark' ? `ri-moon-line` : `ri-sun-line`}></i>
        </motion.button>
        <motion.a href="#" variants={linkVariants}>
          <button className="text-2xl"><i className="ri-account-pin-circle-line"></i></button>
        </motion.a>
      </motion.div>

      {/* Hamburger Icon for Mobile */}
      <button
        className="md:hidden text-3xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <i className={menuOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={`fixed top-0 right-0 h-full w-3/4 max-w-xs z-40 flex flex-col gap-8 pt-24 px-8 shadow-lg ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            <motion.div
              className="flex flex-col gap-8"
              variants={linksContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-lg"
                  onClick={() => setMenuOpen(false)}
                  variants={linkVariants}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.button
                onClick={() => { toggleTheme(); setMenuOpen(false); }}
                className="cursor-pointer text-2xl w-fit"
                variants={linkVariants}
              >
                <i className={theme === 'dark' ? `ri-moon-line` : `ri-sun-line`}></i>
              </motion.button>
              <motion.a href="#" onClick={() => setMenuOpen(false)} variants={linkVariants}>
                <button className="text-2xl"><i className="ri-account-pin-circle-line"></i></button>
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
