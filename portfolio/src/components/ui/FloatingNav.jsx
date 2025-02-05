import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Link } from "react-router-dom"; // заміна next/link

export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let currentScroll = window.scrollY;
      let direction = currentScroll - (window.lastScrollY || 0);

      if (currentScroll < 50) {
        setVisible(false);
      } else {
        setVisible(direction < 0);
      }

      window.lastScrollY = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className={`fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/20 
          rounded-full dark:bg-black bg-white shadow-lg z-50 pr-2 pl-8 py-2 flex items-center 
          justify-center space-x-4 ${className}`}
        >
          {navItems.map((navItem, idx) => (
            <Link
              key={`link-${idx}`}
              to={navItem.link}
              className="relative dark:text-neutral-50 flex items-center space-x-1 
              text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </Link>
          ))}
          <button className="border text-sm font-medium border-neutral-200 dark:border-white/20 
            text-black dark:text-white px-4 py-2 rounded-full relative">
            <span>Login</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px 
              bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
