import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslation } from "react-i18next";
import Button from "../../shared/Buttons/Button";

const Intro = () => {
  const containerRef = useRef();
  const { t } = useTranslation();

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".intro-badge", {
        opacity: 0,
        y: -30,
        duration: 1,
        ease: "power4.out",
      })
        .from(
          ".intro-title span",
          {
            y: 100,
            opacity: 0,
            stagger: 0.2,
            duration: 1.2,
            ease: "expo.out",
          },
          "-=0.6",
        )
        .from(".intro-text", { opacity: 0, y: 20, duration: 1 }, "-=0.8")
        .from(
          ".intro-btns",
          { opacity: 0, scale: 0.9, stagger: 0.2, duration: 0.8 },
          "-=0.6",
        )
        .from(
          ".stat-card",
          {
            opacity: 0,
            x: 50,
            stagger: 0.1,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.5",
        );

      gsap.to(".glow-1", {
        x: 50,
        y: 30,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".glow-2", {
        x: -50,
        y: -30,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id="intro"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary to-slate-900 text-white pt-20"
    >
      {/* BG */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="glow-1 absolute top-[15%] left-[5%] w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full" />
        <div className="glow-2 absolute bottom-[15%] right-[5%] w-[500px] h-[500px] bg-emerald-500/10 blur-[150px] rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* LEFT */}
        <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
          {/* Badge */}
          <div className="intro-badge inline-flex items-center gap-3 px-4 py-1.5 mt-10 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-300">
              {t("intro.badge")}
            </span>
          </div>

          <h1 className="intro-title text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter">
            <span className="inline-block">{t("intro.titleMain")}</span> <br />
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400">
              {t("intro.titleAccent")}
            </span>
          </h1>

          {/* Text */}
          <p className="intro-text text-gray-300 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
            {t("intro.description")}
          </p>

          {/* Buttons */}
          <div className="intro-btns flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4">
            <Button className="!px-10 !py-4 !rounded-full !bg-blue-600 shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-blue-500/50 transition-all font-bold uppercase tracking-widest text-xs">
              {t("intro.btnCourses")}
            </Button>

            <button className="flex items-center gap-4 text-white font-black uppercase tracking-[0.3em] text-[10px] group">
              <span className="w-10 h-[1px] bg-white/20 group-hover:w-16 transition-all duration-500" />
              {t("intro.btnAbout")}
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-5 relative h-[500px] flex items-center justify-center">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-48 h-48 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-full border border-white/10 backdrop-blur-3xl flex items-center justify-center relative z-20 shadow-[0_0_50px_rgba(37,99,235,0.2)]"
          >
            <div className="text-center">
              <span className="block text-4xl font-black">15K+</span>
              <span className="text-[10px] uppercase tracking-widest opacity-50">
                {t("intro.stats.students")}
              </span>
            </div>
          </motion.div>

          {[
            { val: "50+", lab: "Mentors", pos: "top-10 left-0" },
            {
              val: "98%",
              lab: t("intro.stats.success"),
              pos: "bottom-10 right-0",
            },
            { val: "24/7", lab: "Support", pos: "top-20 right-10" },
          ].map((item, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, 15, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 3 + i, repeat: Infinity }}
              className={`absolute ${item.pos} p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md z-30`}
            >
              <span className="block text-xl font-black text-blue-400">
                {item.val}
              </span>
              <span className="text-[8px] uppercase tracking-[0.2em]">
                {item.lab}
              </span>
            </motion.div>
          ))}

          <div className="absolute w-[400px] h-[400px] border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
          <div className="absolute w-[550px] h-[550px] border border-white/5 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
        </div>
      </div>

      {/* Scroll */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <span className="text-[9px] uppercase tracking-[0.4em] rotate-90 mb-5 origin-left translate-x-2">
          Scroll
        </span>
      </motion.div>
    </section>
  );
};

export default Intro;
