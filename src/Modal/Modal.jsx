import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { X, User, Phone, Send, ShieldCheck } from "lucide-react";
import toast from "react-hot-toast";
import { IMaskInput } from "react-imask";

const Modal = ({ isOpen, onClose, courseTitle }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: "", phone: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Ma'lumotlarni tayyorlash (Trim)
    const nameTrimmed = formData.name.trim();
    const rawPhone = formData.phone.replace(/\s/g, ""); // Bo'shliqlarni olib tashlash

    // 2. Ism validatsiyasi (Faqat harflar uchun Regex)
    // O'zbekcha O', G' harflari va Kirill/Lotin alifbolari uchun
    const nameRegex = /^[A-Za-zА-Яа-яЁёO'o'G'g'ʻʼshchSHCH\s]+$/;

    if (nameTrimmed.length < 3) {
      return toast.error("Ism kamida 3 ta harfdan iborat bo'lishi kerak");
    }

    if (!nameRegex.test(nameTrimmed)) {
      return toast.error(
        "Ismda faqat harflar bo'lishi shart (raqamlar yoki belgilar mumkin emas)",
      );
    }

    // 3. Telefon validatsiyasi (+998 va 9ta raqam = 13 ta belgi)
    if (rawPhone.length < 13) {
      return toast.error("Telefon raqamini to'liq kiriting");
    }

    // 4. Muvaffaqiyatli yuborish (Simulatsiya)
    toast.success(t("modal.success_msg") || "Tez orada bog'lanamiz!", {
      style: {
        borderRadius: "20px",
        background: "#03214e",
        color: "#fff",
        border: "1px solid rgba(214, 159, 56, 0.3)",
      },
      iconTheme: {
        primary: "#d69f38",
        secondary: "#fff",
      },
    });

    console.log("Yuborildi:", {
      name: nameTrimmed,
      phone: rawPhone,
      course: courseTitle,
    });

    setTimeout(() => {
      onClose();
      setFormData({ name: "", phone: "" });
    }, 800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            className="relative bg-gradient-to-br from-slate-900 to-primary w-full max-w-md rounded-[3rem] p-8 md:p-12 border border-white/10 shadow-2xl text-white overflow-hidden"
          >
            {/* Xavfsizlik belgisi (Shield) */}
            <div className="absolute top-1 -right-1 left-35 opacity-5">
              <ShieldCheck size={150} />
            </div>

            <button
              onClick={onClose}
              className="absolute top-8 right-8 text-white/30 hover:text-[#d69f38] transition-colors"
            >
              <X size={24} />
            </button>

            <div className="mb-10 relative">
              <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-2">
                {t("modal.title")}
              </h3>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                <span className="text-[10px] uppercase font-bold text-white/40 tracking-widest">
                  {t("modal.course_label")}:
                </span>
                <span className="text-[10px] uppercase font-black text-[#d69f38]">
                  {courseTitle}
                </span>
              </div>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Ism Input */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-2">
                  <User size={12} className="text-[#d69f38]" />{" "}
                  {t("modal.name")}
                </label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => {
                    const value = e.target.value.replace(
                      /[^A-Za-zА-Яа-яЁёO'o'G'g'shchai\s]/g,
                      "",
                    );
                    setFormData({ ...formData, name: value });
                  }}
                  className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl outline-none focus:border-[#d69f38]/50 transition-all font-semibold"
                  placeholder="Fayozbek Baxromov"
                />
              </div>

              {/* Telefon Input (MASK BILAN) */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-2">
                  <Phone size={12} className="text-[#d69f38]" />{" "}
                  {t("modal.phone")}
                </label>
                <IMaskInput
                  mask="+998 00 000 00 00"
                  definitions={{
                    0: /[0-9]/,
                  }}
                  value={formData.phone}
                  unmask={false} // Format bilan birga saqlash
                  onAccept={(value) =>
                    setFormData({ ...formData, phone: value })
                  }
                  required
                  placeholder="+998 __ ___ __ __"
                  className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl outline-none focus:border-[#d69f38]/50 transition-all font-semibold"
                />
              </div>

              <button
                type="submit"
                className="group w-full relative overflow-hidden py-5 bg-[#d69f38] hover:bg-[#c48e2f] text-white rounded-2xl font-black uppercase tracking-[0.3em] text-[11px] transition-all flex items-center justify-center gap-3 mt-4"
              >
                <span className="relative z-10">{t("modal.send")}</span>
                <Send
                  size={14}
                  className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
