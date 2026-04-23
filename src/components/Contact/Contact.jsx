import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { toast } from "react-hot-toast";
import { Phone, MapPin, Send, User, ChevronRight } from "lucide-react";
import Button from "../../shared/Buttons/Button";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: "", phone: "+998 " });

  // Telefon raqamini chiroyli formatlash: +998 55 555 55 55
  const formatPhoneNumber = (value) => {
    if (!value) return "+998 ";
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength <= 3) return `+998 `;
    if (phoneNumberLength <= 5)
      return `+${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3)}`;
    if (phoneNumberLength <= 8)
      return `+${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3, 5)} ${phoneNumber.slice(5)}`;
    if (phoneNumberLength <= 10)
      return `+${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3, 5)} ${phoneNumber.slice(5, 8)} ${phoneNumber.slice(8)}`;
    return `+${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3, 5)} ${phoneNumber.slice(5, 8)} ${phoneNumber.slice(8, 10)} ${phoneNumber.slice(10, 12)}`;
  };

  const handlePhoneChange = (e) => {
    const formattedNumber = formatPhoneNumber(e.target.value);
    if (formattedNumber.length <= 17) {
      // +998 99 999 99 99 dan oshib ketmasligi uchun
      setFormData({ ...formData, phone: formattedNumber });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Ism validatsiyasi (Faqat harflar, kamida 3 ta)
    const nameTrimmed = formData.name.trim();
    const nameRegex = /^[A-Za-zА-Яа-яЁёO'o'G'g'ʻʼshchSHCH\s]+$/;

    if (nameTrimmed.length < 3) {
      return toast.error(t("contact.errors.name_short") || "Ism juda qisqa!");
    }
    if (!nameRegex.test(nameTrimmed)) {
      return toast.error(
        t("contact.errors.name_invalid") ||
          "Ismda faqat harflar bo'lishi kerak!",
      );
    }

    // 2. Telefon validatsiyasi (+998 va 9 ta raqam bo'lishi shart)
    const rawPhone = formData.phone.replace(/\s/g, "");
    if (rawPhone.length < 13) {
      return toast.error(
        t("contact.errors.phone_short") || "Telefon raqami noto'g'ri!",
      );
    }

    // Success Toast
    toast.success(t("modal.success_msg") || "So'rov yuborildi!", {
      duration: 4000,
      style: {
        borderRadius: "24px",
        background: "#03214e",
        color: "#fff",
        border: "1px solid rgba(214, 159, 56, 0.4)",
        padding: "16px 24px",
        fontSize: "14px",
        fontWeight: "900",
        textTransform: "uppercase",
        letterSpacing: "1px",
      },
    });

    setFormData({ name: "", phone: "+998 " });
  };

  // Animatsiya variantlari
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="contact"
      className="py-32 bg-gradient-to-b from-primary to-slate-950 text-white relative overflow-hidden"
    >
      {/* Background Ornaments */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[20%] -right-[10%] w-[500px] h-[500px] bg-[#d69f38]/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
        >
          {/* Info Section */}
          <div className="space-y-12">
            <motion.div variants={itemVariants}>
              <span className="text-[#d69f38] text-[11px] font-black uppercase tracking-[0.6em] block mb-4">
                Contact us
              </span>
              <h2 className="text-6xl md:text-7xl font-black italic tracking-tighter uppercase mb-6 leading-[0.9]">
                {t("contact.title") || "Savollaringiz bormi?"}
              </h2>
              <p className="text-white/40 text-lg uppercase tracking-tighter font-medium max-w-md border-l-2 border-[#d69f38] pl-6">
                {t("contact.subtitle") ||
                  "Ma'lumotlaringizni qoldiring va biz sizga tez orada aloqaga chiqamiz."}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#d69f38] transition-all duration-500 shadow-xl group-hover:shadow-[#d69f38]/20">
                  <Phone
                    className="text-[#d69f38] group-hover:text-black transition-colors"
                    size={26}
                  />
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase font-black tracking-widest mb-1">
                    Qo'ng'iroq qiling
                  </p>
                  <p className="text-2xl font-black italic tracking-tight">
                    +998 55 555 55 55
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#d69f38] transition-all duration-500 shadow-xl group-hover:shadow-[#d69f38]/20">
                  <MapPin
                    className="text-[#d69f38] group-hover:text-black transition-colors"
                    size={26}
                  />
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase font-black tracking-widest mb-1">
                    Manzilimiz
                  </p>
                  <p className="text-2xl font-black italic tracking-tight">
                    Toshkent sh, Navoiy 21
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form Section */}
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#d69f38]/20 to-blue-500/20 blur-3xl opacity-30" />
            <form
              onSubmit={handleSubmit}
              className="relative bg-[#0a1120]/60 backdrop-blur-3xl p-10 md:p-14 rounded-[4rem] border border-white/10 shadow-2xl space-y-8 overflow-hidden"
            >
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#d69f38] ml-4">
                  <User size={12} /> {t("contact.form_name") || "Ismingiz"}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-[2rem] px-8 py-6 focus:outline-none focus:border-[#d69f38] focus:bg-white/[0.08] transition-all text-lg font-black italic placeholder:text-white/10"
                  placeholder="FAYOZBEK"
                />
              </div>

              <div className="space-y-3">
                <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#d69f38] ml-4">
                  <Phone size={12} /> {t("contact.form_phone") || "Telefon"}
                </label>
                <input
                  type="text"
                  required
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className="w-full bg-white/5 border border-white/10 rounded-[2rem] px-8 py-6 focus:outline-none focus:border-[#d69f38] focus:bg-white/[0.08] transition-all text-lg font-black italic placeholder:text-white/10"
                />
              </div>

              <Button
                type="submit"
                className="w-full !rounded-[2rem] !py-7 !text-[11px] font-black uppercase tracking-[0.4em] flex items-center justify-center gap-4 group !bg-white !text-black hover:!bg-[#d69f38] transition-all duration-500 overflow-hidden"
              >
                <span className="relative z-10 relative top-2">
                  {t("contact.submit_btn") || "Yuborish"}
                </span>
                <Send
                  size={18}
                  className="relative left-38 -top-2 z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"
                />
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
