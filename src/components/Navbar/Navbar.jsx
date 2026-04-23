import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown, Menu, X } from "lucide-react";
import gsap from "gsap";
import logo from "../../assets/logo/logo.png";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navRef = useRef(null);

  const languages = [
    { code: "uz", label: "O'zbekcha", flag: "🇺🇿" },
    { code: "ru", label: "Русский", flag: "🇷🇺" },
    { code: "en", label: "English", flag: "🇺🇸" },
  ];

  const currentLang =
    languages.find((l) => l.code === i18n.language) || languages[0];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".nav-anim", {
        y: -100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "expo.out",
      });
    }, navRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobil menyu ochilganda skrolni to'xtatish
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileOpen]);

  return (
    <>
      {/* NAVBAR KONTEYNERI 
        z-[9999] barcha sectionlardan (FAQ, Reviews) ustun turishini ta'minlaydi 
      */}
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-700 ${
          isScrolled
            ? "bg-black/50 backdrop-blur-2xl py-3 border-b border-white/10"
            : "bg-transparent py-7"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Section */}
          <div className="nav-anim nav-item flex items-center gap-3 group cursor-pointer relative overflow-hidden p-2">
            <motion.div
              whileHover={{ rotate: 180, scale: 1.1, borderRadius: "50%" }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="relative w-11 h-11 bg-gradient-to-br from-blue-600 via-indigo-500 to-emerald-400 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)] group-hover:shadow-blue-500/60 transition-shadow duration-500 z-10"
            >
              <div className="w-5 h-5 bg-white rounded-sm shadow-inner" />
            </motion.div>

            <div className="flex flex-col relative z-10">
              <img
                src={logo}
                alt="EduCenter Logo"
                className="h-8 w-auto object-contain brightness-0 invert group-hover:scale-105 transition-transform duration-300"
              />
              <motion.div className="h-[2px] bg-gradient-to-r from-blue-500 to-transparent w-0 group-hover:w-full transition-all duration-500" />
            </div>
          </div>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-10">
            {["home", "courses", "teachers", "faq"].map((item) => (
              <li key={item} className="nav-anim">
                <a
                  href={`#${item}`}
                  className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-all relative group"
                >
                  {t(`nav.${item}`)}
                  <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#3b82f6]" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6">
            {/* Language Selector */}
            <div className="nav-anim relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2.5 bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:bg-white/10 transition-all backdrop-blur-md"
              >
                <Globe
                  size={18}
                  className="text-blue-400 animate-[spin_8s_linear_infinite]"
                />
                <span className="text-[13px] font-bold text-white uppercase">
                  {currentLang.flag}
                </span>
                <ChevronDown
                  size={14}
                  className={`text-white/40 transition-transform ${isLangOpen ? "rotate-180" : ""}`}
                />
              </motion.button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.9 }}
                    className="absolute top-full mt-4 right-0 bg-zinc-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-2 w-44 shadow-2xl overflow-hidden z-[10001]"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          i18n.changeLanguage(lang.code);
                          setIsLangOpen(false);
                        }}
                        className={`flex items-center justify-between w-full px-4 py-3 rounded-xl transition-all ${
                          i18n.language === lang.code
                            ? "bg-blue-600 text-white"
                            : "text-white/50 hover:bg-white/5"
                        }`}
                      >
                        <span className="text-xs font-bold uppercase tracking-widest">
                          {lang.label}
                        </span>
                        <span className="text-lg">{lang.flag}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Desktop Login */}
            <motion.button className="nav-anim hidden md:block px-8 py-3 bg-blue-600 text-white rounded-full font-black text-[11px] uppercase tracking-[0.2em] shadow-xl shadow-blue-600/20">
              {t("nav.login")}
            </motion.button>

            {/* Burger Icon */}
            <button
              onClick={() => setIsMobileOpen(true)}
              className="lg:hidden text-white/80 hover:text-white transition-colors relative z-[10001]"
            >
              <Menu size={32} />
            </button>
          </div>
        </div>
      </nav>

      {/* FULL SCREEN MOBILE MENU 
        Fixed inset-0 va juda baland z-index orqali barcha qismlarni yopishini ta'minlaymiz
      */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#080808] z-[10000] flex flex-col lg:hidden overflow-hidden"
          >
            {/* Background Decor */}
            <div className="absolute -bottom-20 -right-20 text-[20rem] md:text-[30rem] font-black text-white/[0.02] select-none pointer-events-none uppercase italic">
              EDU
            </div>

            {/* Header in Menu */}
            <div className="flex justify-between items-center p-8 border-b border-white/5">
              <span className="text-sm font-bold tracking-[0.3em] text-blue-500 uppercase">
                Navigation
              </span>
              <motion.button
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileOpen(false)}
                className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white"
              >
                <X size={28} />
              </motion.button>
            </div>

            {/* Links Section */}
            <div className="flex-1 flex flex-col justify-center px-10 relative z-10">
              <div className="space-y-4">
                {["home", "courses", "teachers", "faq", "contact"].map(
                  (item, index) => (
                    <motion.div
                      key={item}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{
                        x: 0,
                        opacity: 1,
                        transition: { delay: 0.2 + index * 0.1 },
                      }}
                      className="group flex items-baseline gap-4"
                    >
                      <span className="text-blue-500/40 font-mono text-sm">
                        0{index + 1}
                      </span>
                      <a
                        href={`#${item}`}
                        onClick={() => setIsMobileOpen(false)}
                        className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white transition-all duration-500 hover:text-blue-500 hover:pl-4"
                      >
                        {t(`nav.${item}`)}
                      </a>
                    </motion.div>
                  ),
                )}
              </div>
            </div>

            {/* Footer in Menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.6 } }}
              className="p-10 border-t border-white/5 flex justify-between items-end relative z-10"
            >
              <div className="space-y-2">
                <p className="text-white/30 text-xs uppercase tracking-widest">
                  Connect with us
                </p>
                <div className="flex gap-6 text-sm font-bold">
                  <a href="#" className="text-white hover:text-blue-500">
                    Instagram
                  </a>
                  <a href="#" className="text-white hover:text-blue-500">
                    Telegram
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
