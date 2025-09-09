import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import Logo from "../assets/WebLogo/Logo.svg";
import PageContainer from "../layout/PageContainer";

const navLinks = [
  { href: "about", label: "About" },
  { href: "expertise", label: "Expertise" },
  { href: "service", label: "Service" },
  { href: "resources", label: "Resources" },
  { href: "projects", label: "Projects" },
  { href: "contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10 ">
        <PageContainer>
          <nav className="flex items-center justify-between py-5">
            {/* Logo */}
            <Link to="/home" className="flex items-center">
              <img
                className="h-12 w-auto"
                src={Logo}
                alt="AuraUI Logo"
                height={40}
                width={120}
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="relative text-white text-sm font-medium transition-all duration-300 hover:text-purple-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-purple-500 after:to-pink-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex">
              <Link
                to="/signup"
                className="px-5 py-2 text-sm font-medium text-white rounded-full bg-gradient-to-r from-purple-600 to-pink-500 hover:shadow-[0_0_15px_rgba(217,70,239,0.7)] transition-all duration-300"
              >
                Sign up
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-all"
            >
              {isMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </nav>
        </PageContainer>
      </header>

      <div className="pt-16"></div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-2xl flex flex-col items-center justify-center space-y-6"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={link.href}
                  className="text-2xl font-medium text-white hover:text-purple-400 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                to="/signup"
                className="mt-6 px-6 py-3 text-lg font-medium text-white rounded-full bg-gradient-to-r from-purple-600 to-pink-500 hover:shadow-[0_0_20px_rgba(217,70,239,0.8)] transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign up
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
