import React from "react";
import { motion } from "framer-motion";

const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  variant = "primary",
}) => {
  const variants = {
    primary:
      "bg-[#03214e] text-white shadow-[0_10px_20px_rgba(3,33,78,0.2)] hover:shadow-[#03214e]/40",
    outline:
      "bg-transparent border-2 border-[#03214e] text-[#03214e] hover:bg-[#03214e] hover:text-white",
    glass:
      "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20",
    gold: "bg-[#d69f38] text-white shadow-[0_10px_20px_rgba(214,159,56,0.3)] hover:shadow-[#d69f38]/50",
  };

  return (
    <motion.button
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      type={type}
      onClick={onClick}
      className={`
        relative overflow-hidden
        inline-flex items-center justify-center gap-3 
        px-8 py-4 rounded-full font-black text-[11px] uppercase tracking-[0.2em]
        transition-all duration-500 ease-in-out
        cursor-pointer select-none active:opacity-90
        ${variants[variant] || variants.primary}
        ${className}
      `}
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[150%] hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />

      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default Button;
