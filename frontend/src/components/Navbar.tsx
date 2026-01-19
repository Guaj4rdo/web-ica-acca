"use client";

import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      label: t.nav.congress,
      href: "#about"
    },
    {
      label: t.nav.papers,
      href: "#paper-submission"
    },
    {
      label: t.nav.sponsors,
      href: "#sponsors"
    },
    {
      label: t.nav.contact,
      href: "#contact"
    }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-slate-900/95 backdrop-blur-md shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#"
            className={`text-xl transition-colors ${isScrolled ? "text-white" : "text-white"
              }`}
            whileHover={{ scale: 1.05 }}
          >
            <img src="/logowhite.png" alt="ICA-ACCA 2026" className="h-13 w-auto" />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => (item as any).submenu && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className={`flex items-center gap-1 transition-colors hover:text-blue-600 ${isScrolled ? "text-white" : "text-white"
                    }`}
                >
                  {item.label}
                </a>
              </div>
            ))}

            {/* Language Switcher */}
            <div className="relative border-l border-white/20 pl-6">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 text-white hover:text-blue-300 transition-colors"
                aria-label="Select Language"
              >
                <Globe className="w-5 h-5" />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
              </button>

              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-3 w-40 bg-white rounded-xl shadow-2xl py-2 overflow-hidden z-50 ring-1 ring-black/5"
                  >
                    <button
                      onClick={() => { setLanguage('es'); setIsLangMenuOpen(false); }}
                      className={`w-full text-left px-4 py-3 text-sm flex items-center justify-between hover:bg-gray-50 transition-colors ${language === 'es' ? 'text-blue-600 font-bold bg-blue-50/50' : 'text-gray-700'}`}
                    >
                      <span>Español</span>
                      {language === 'es' && <span className="text-xs bg-blue-100 text-blue-600 py-0.5 px-2 rounded-full">ES</span>}
                    </button>
                    <button
                      onClick={() => { setLanguage('en'); setIsLangMenuOpen(false); }}
                      className={`w-full text-left px-4 py-3 text-sm flex items-center justify-between hover:bg-gray-50 transition-colors ${language === 'en' ? 'text-blue-600 font-bold bg-blue-50/50' : 'text-gray-700'}`}
                    >
                      <span>English</span>
                      {language === 'en' && <span className="text-xs bg-blue-100 text-blue-600 py-0.5 px-2 rounded-full">EN</span>}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.a
              href="#paper-submission"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              {t.nav.callForPapers}
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${isScrolled ? "text-white" : "text-white"}`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-t border-slate-800"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item, index) => (
                <div key={index}>
                  <a
                    href={item.href}
                    className="block text-white hover:text-blue-400 transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </div>
              ))}

              {/* Mobile Language Switcher */}
              <div className="flex items-center gap-4 py-2 border-t border-slate-800 mt-2 pt-4">
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Globe className="w-4 h-4" />
                  <span>Idioma / Language:</span>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setLanguage("es")}
                    className={`font-medium ${language === "es" ? "text-blue-400" : "text-white"
                      }`}
                  >
                    ES
                  </button>
                  <button
                    onClick={() => setLanguage("en")}
                    className={`font-medium ${language === "en" ? "text-blue-400" : "text-white"
                      }`}
                  >
                    EN
                  </button>
                </div>
              </div>

              <a
                href="#paper-submission"
                className="block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-center transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav.submitPaper}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
