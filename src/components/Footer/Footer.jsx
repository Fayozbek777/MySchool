import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Globe, ArrowUpRight } from "lucide-react";

import { FaTelegram } from "react-icons/fa";

import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaTelegram size={18} />,
      href: "https://t.me/fayozbek",
      label: "Telegram",
    },
    { icon: <CiInstagram size={18} />, href: "#", label: "Instagram" },

    { icon: <CiYoutube size={18} />, href: "#", label: "YouTube" },
  ];

  const footerLinks = [
    { key: "privacy", href: "#" },
    { key: "offer", href: "#" },
  ];

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 relative overflow-hidden border-t border-white/5">
      {/* Background Subtle Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 items-start">
          {/* Logo & Slogan */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-3xl font-black italic tracking-tighter uppercase"
            >
              Edu<span className="text-[#d69f38]">Center</span>
            </motion.div>
            <p className="text-white/40 text-xs font-bold uppercase tracking-widest leading-relaxed max-w-[250px]">
              {t("footer.slogan") ||
                "Kelajak texnologiyalarini bugun biz bilan o'rganing."}
            </p>
          </div>

          {/* Social Media */}
          <div className="flex flex-col md:items-center space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d69f38]">
              Social Media
            </span>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-[#d69f38] hover:border-[#d69f38]/50 transition-all duration-500"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="md:text-right space-y-4">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d69f38]">
              Support
            </span>
            <a
              href="mailto:info@educenter.uz"
              className="group flex items-center md:justify-end gap-2 text-xl font-black italic tracking-tight hover:text-[#d69f38] transition-colors"
            >
              info@educenter.uz
              <ArrowUpRight
                size={20}
                className="text-white/20 group-hover:text-[#d69f38] transition-all"
              />
            </a>
            <a
              href="tel:+79001111111"
              className="group flex items-center md:justify-end gap-2 text-xl font-black italic tracking-tight hover:text-[#d69f38] transition-colors"
            >
              +998 55 578 55 55
              <ArrowUpRight
                size={20}
                className="text-white/20 group-hover:text-[#d69f38] transition-all"
              />
            </a>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-black uppercase tracking-widest text-white/20">
            © {currentYear} Edu
            <span className="text-white/40 text-[#d69f38]">Center</span>.{" "}
            {t("footer.rights")}
          </div>

          <div className="flex gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 hover:text-[#d69f38] transition-colors"
              >
                {t(`footer.links.${link.key}`)}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/20">
            <Globe size={12} />
            Uzbekistan, Tashkent
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
