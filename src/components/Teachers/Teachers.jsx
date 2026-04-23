import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import t1 from "../../assets/teachers/teacher1.jpg";
import t2 from "../../assets/teachers/teacher2.jpg";
import t3 from "../../assets/teachers/teacher3.jpg";
import t4 from "../../assets/teachers/teacher4.jpg";
import t5 from "../../assets/teachers/teacher5.jpg";
import t6 from "../../assets/teachers/teacher6.jpg";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TeacherImage = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-44 h-44 mx-auto mb-8">
      {!isLoaded && (
        <SkeletonTheme baseColor="#0f172a" highlightColor="#d69f3820">
          <Skeleton
            circle
            width={176}
            height={176}
            className="absolute inset-0"
          />
        </SkeletonTheme>
      )}
      <div
        className={`w-full h-full rounded-full p-1.5 bg-gradient-to-tr from-[#d69f38] via-blue-500 to-[#d69f38] transition-all duration-1000 ${isLoaded ? "scale-100 rotate-0" : "scale-90 rotate-12"}`}
      >
        <div className="w-full h-full rounded-full border-[6px] border-slate-950 overflow-hidden bg-slate-900 shadow-2xl">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-1000 grayscale hover:grayscale-0 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          />
        </div>
      </div>
      <div className="absolute -bottom-2 -right-2 bg-[#d69f38] p-2 rounded-full border-4 border-slate-950 shadow-lg">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="black">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </div>
    </div>
  );
};

const Teachers = () => {
  const { t } = useTranslation();

  const teachers = [
    { id: "t1", img: t1 },
    { id: "t2", img: t2 },
    { id: "t3", img: t3 },
    { id: "t4", img: t4 },
    { id: "t5", img: t5 },
    { id: "t6", img: t6 },
  ];

  return (
    <section
      id="teachers"
      className="py-32 bg-gradient-to-b from-primary to-slate-950 text-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[5%] w-80 h-80 bg-[#d69f38]/10 blur-[130px] rounded-full" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#d69f38] text-[10px] font-black uppercase tracking-[0.8em] block mb-4"
          >
            Expert Team
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase mb-6"
          >
            {t("teachers.title")}
          </motion.h2>
          <div className="w-24 h-1.5 bg-[#d69f38] mx-auto rounded-full shadow-[0_0_20px_#d69f38]" />
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -15 }}
              className="relative group"
            >
              {/* Card Main Body */}
              <div className="bg-white/[0.03] backdrop-blur-3xl rounded-[4rem] p-12 border border-white/10 transition-all duration-500 group-hover:border-[#d69f38]/40 group-hover:bg-white/[0.07] flex flex-col items-center">
                <TeacherImage
                  src={teacher.img}
                  alt={t(`teachers.list.${teacher.id}.name`)}
                />

                <div className="text-center">
                  <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-3 group-hover:text-[#d69f38] transition-colors duration-500">
                    {t(`teachers.list.${teacher.id}.name`)}
                  </h3>

                  <div className="inline-block px-5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 group-hover:border-[#d69f38]/20 transition-all">
                    <span className="text-[#d69f38] text-[11px] font-black uppercase tracking-widest">
                      {t(`teachers.list.${teacher.id}.role`)}
                    </span>
                  </div>

                  <p className="text-white/30 text-[11px] font-medium leading-relaxed uppercase tracking-widest border-t border-white/5 pt-6">
                    {t("teachers.exp")}
                  </p>
                </div>

                {/* Subtle Hover Glow */}
                <div className="absolute -inset-1 bg-gradient-to-b from-[#d69f38]/20 to-transparent rounded-[4rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
