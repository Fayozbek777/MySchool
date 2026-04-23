import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Plus, Minus, HelpCircle } from "lucide-react";

const FaqItem = ({ item, index, activeIndex, setActiveIndex }) => {
  const isOpen = index === activeIndex;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`relative overflow-hidden rounded-[2rem] border transition-all duration-500 ${
        isOpen
          ? "bg-white/[0.08] border-[#d69f38]/50 shadow-[0_0_30px_rgba(214,159,56,0.1)]"
          : "bg-white/[0.03] border-white/10 hover:border-white/20"
      }`}
    >
      <button
        onClick={() => setActiveIndex(isOpen ? null : index)}
        className="w-full px-8 py-7 flex items-center justify-between gap-4 text-left outline-none"
      >
        <div className="flex items-center gap-4">
          <span
            className={`text-xl font-black italic tracking-tighter transition-colors duration-500 ${
              isOpen ? "text-[#d69f38]" : "text-white/20"
            }`}
          >
            0{index + 1}
          </span>

          <h3
            className={`text-lg md:text-xl font-bold uppercase italic tracking-tight transition-colors duration-500 ${
              isOpen ? "text-[#d69f38]" : "text-white"
            }`}
          >
            {item.q}
          </h3>
        </div>

        <div
          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 ${
            isOpen
              ? "bg-[#d69f38] border-[#d69f38] rotate-180"
              : "bg-white/5 border-white/10"
          }`}
        >
          {isOpen ? (
            <Minus size={20} color="black" strokeWidth={3} />
          ) : (
            <Plus size={20} className="text-[#d69f38]" strokeWidth={3} />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="px-8 pb-8 pt-2">
              <div className="h-[1px] w-full bg-white/10 mb-6" />
              <p className="text-white/60 text-base leading-relaxed font-medium uppercase tracking-tighter">
                {item.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Faq = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = t("faq.list", { returnObjects: true }) || [];

  return (
    <section
      id="faq"
      className="py-32 bg-gradient-to-b from-slate-950 to-primary text-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[30%] -right-20 w-96 h-96 bg-[#d69f38]/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-[20%] -left-20 w-96 h-96 bg-blue-500/5 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-[1000px] mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6"
          >
            <HelpCircle size={16} className="text-[#d69f38]" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#d69f38]">
              {t("faq.badge")}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-6"
          >
            {t("faq.title")}
          </motion.h2>

          <div className="w-24 h-1.5 bg-[#d69f38] mx-auto rounded-full" />
        </div>

        <div className="space-y-6">
          {faqs.map((item, index) => (
            <FaqItem
              key={index}
              item={item}
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
