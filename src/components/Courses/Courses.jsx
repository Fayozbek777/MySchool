import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Button from "../../shared/Buttons/Button";
import Modal from "../../Modal/Modal";

import c1 from "../../assets/courses/course1-image1.png";
import c2 from "../../assets/courses/course1-image2.png";
import c3 from "../../assets/courses/course1-image3.png";
import c4 from "../../assets/courses/course1-image4.png";
import c5 from "../../assets/courses/course1-image5.png";
import c6 from "../../assets/courses/course1-image6.png";
import c7 from "../../assets/courses/course1-image7.png";
import c8 from "../../assets/courses/course1-image8.png";
import c9 from "../../assets/courses/course1-image9.png";
import c10 from "../../assets/courses/course1-image10.png";
import c11 from "../../assets/courses/course1-image11.png";
import c12 from "../../assets/courses/course1-image12.png";
import c13 from "../../assets/courses/course1-image13.png";
import c14 from "../../assets/courses/course1-image14.png";
import c15 from "../../assets/courses/course1-image15.png";
import c16 from "../../assets/courses/course1-image16.png";
import c17 from "../../assets/courses/course1-image17.png";
import c18 from "../../assets/courses/course1-image18.png";
import c19 from "../../assets/courses/course1-image19.png";
import c20 from "../../assets/courses/course1-image20.png";

// --- Lazy Image Sub-component with Skeleton ---
const LazyImage = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      {!isLoaded && (
        <SkeletonTheme baseColor="#0f172a" highlightColor="#d69f3810">
          <Skeleton
            className="absolute inset-0 w-full h-full rounded-[3rem]"
            height="100%"
          />
        </SkeletonTheme>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-1000 ease-out ${
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-110"
        }`}
      />
    </div>
  );
};

const Courses = () => {
  const { t } = useTranslation();
  const [modal, setModal] = useState({ isOpen: false, title: "" });

  const coursesData = [
    { id: 1, img: c1, key: "frontend", price: "1.050.000", time: "10 oy" },
    { id: 2, img: c2, key: "design", price: "1.000.000", time: "6oy" },
    { id: 3, img: c3, key: "smm", price: "900.000", time: "5 oy" },
    { id: 4, img: c4, key: "backend", price: "1.300.000", time: "12 oy" },
    { id: 5, img: c5, key: "flutter", price: "1.500.000", time: "10 oy" },
    { id: 6, img: c6, key: "uiux", price: "1.100.000", time: "12 oy" },
    { id: 7, img: c7, key: "python", price: "1.200.000", time: "12 oy" },
    { id: 8, img: c8, key: "android", price: "1.400.000", time: "12 oy" },
    { id: 9, img: c9, key: "cyber", price: "1.800.000", time: "8 oy" },
    { id: 10, img: c10, key: "gamedev", price: "2.000.000", time: "12 oy" },
    { id: 11, img: c11, key: "pm", price: "1.000.000", time: "4 oy" },
    { id: 12, img: c12, key: "qa", price: "800.000", time: "7 oy" },
    { id: 13, img: c13, key: "fullstack", price: "1.600.000", time: "12 oy" },
    { id: 14, img: c14, key: "swift", price: "1.500.000", time: "12 oy" },
    { id: 15, img: c15, key: "datascience", price: "2.200.000", time: "12 oy" },
    { id: 16, img: c16, key: "marketing", price: "700.000", time: "5 oy" },
    { id: 17, img: c17, key: "unity", price: "1.900.000", time: "12 oy" },
    { id: 18, img: c18, key: "aspnet", price: "1.400.000", time: "12 oy" },
    { id: 19, img: c19, key: "copywriting", price: "800.000", time: "12 oy" },
    { id: 20, img: c20, key: "english", price: "600.000", time: "1 yil" },
  ];

  return (
    <section
      id="courses"
      className="py-24 bg-gradient-to-b from-primary to-slate-950 text-white relative overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] bg-blue-500/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[20%] -right-[10%] w-[40%] h-[40%] bg-[#d69f38]/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase mb-4"
          >
            {t("courses.title")}
          </motion.h2>
          <div className="w-32 h-1.5 bg-[#d69f38] mx-auto rounded-full shadow-[0_0_20px_rgba(214,159,56,0.4)]" />
        </div>

        {/* Premium Swiper Slider */}
        <div className="premium-slider-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            speed={1200}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={true}
            coverflowEffect={{
              rotate: 5,
              stretch: 0,
              depth: 150,
              modifier: 1.5,
              slideShadows: false,
            }}
            breakpoints={{
              320: { slidesPerView: 1.2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 40 },
              1024: { slidesPerView: 3, spaceBetween: 60 },
            }}
            className="!pb-24 !pt-10 overflow-visible"
          >
            {coursesData.map((course) => (
              <SwiperSlide
                key={course.id}
                className="transition-all duration-700"
              >
                {({ isActive }) => (
                  <div
                    className={`h-[600px] rounded-[4rem] p-[1.5px] transition-all duration-1000 ${
                      isActive
                        ? "bg-gradient-to-b from-[#d69f38]/50 to-transparent"
                        : "bg-white/10 opacity-40 blur-[2px] scale-90"
                    }`}
                  >
                    <div className="h-full w-full bg-[#0a1120]/80 backdrop-blur-3xl rounded-[3.9rem] p-6 flex flex-col border border-white/5 shadow-2xl relative overflow-hidden">
                      {/* Image Area */}
                      <div className="relative h-72 rounded-[3.2rem] overflow-hidden mb-8 flex-shrink-0 border border-white/5 shadow-2xl">
                        <LazyImage
                          src={course.img}
                          alt={t(`courses.list.${course.key}`)}
                        />
                        <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-2xl px-5 py-2.5 rounded-2xl font-black text-[11px] text-[#d69f38] border border-white/10 tracking-[0.2em] uppercase">
                          {course.time} {t("courses.duration")}
                        </div>
                      </div>

                      {/* Info Area */}
                      <div className="flex flex-col flex-grow px-2">
                        <h3 className="text-3xl font-black italic tracking-tighter uppercase mb-4 text-white group-hover:text-[#d69f38] transition-colors line-clamp-1">
                          {t(`courses.list.${course.key}`)}
                        </h3>
                        <p className="text-white/40 text-[13px] font-medium leading-relaxed mb-auto line-clamp-3 uppercase tracking-tighter opacity-80">
                          Professional darajadagi tajriba, real loyihalar va
                          dunyo standartlari asosidagi o'quv dasturi.
                        </p>

                        <div className="pt-8 border-t border-white/5 flex items-center justify-between mt-4">
                          <div className="flex flex-col">
                            <span className="text-[10px] text-white/30 uppercase font-black tracking-widest mb-1">
                              Kurs narxi:
                            </span>
                            <span className="text-2xl font-black text-[#d69f38]">
                              {course.price}{" "}
                              <small className="text-[10px] text-white/50 uppercase font-bold">
                                uzs
                              </small>
                            </span>
                          </div>

                          <Button
                            variant="glass"
                            onClick={() =>
                              setModal({
                                isOpen: true,
                                title: t(`courses.list.${course.key}`),
                              })
                            }
                            className="!rounded-2xl !py-4 !px-8 !text-[10px] !bg-white/10 hover:!bg-[#d69f38] hover:!text-black transition-all duration-500 transform active:scale-95"
                          >
                            {t("courses.more")}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <Modal
        isOpen={modal.isOpen}
        onClose={() => setModal({ ...modal, isOpen: false })}
        courseTitle={modal.title}
      />

      <style jsx global>{`
        .premium-slider-container .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.2) !important;
          opacity: 1 !important;
          width: 10px !important;
          height: 10px !important;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        .premium-slider-container .swiper-pagination-bullet-active {
          background: #d69f38 !important;
          width: 40px !important;
          border-radius: 10px !important;
          box-shadow: 0 0 15px rgba(214, 159, 56, 0.4);
        }
        .premium-slider-container .swiper-button-next,
        .premium-slider-container .swiper-button-prev {
          color: #d69f38 !important;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          width: 60px !important;
          height: 60px !important;
          border-radius: 50% !important;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.4s ease;
        }
        .premium-slider-container .swiper-button-next:hover,
        .premium-slider-container .swiper-button-prev:hover {
          background: #d69f38;
          color: black !important;
        }
        .premium-slider-container .swiper-button-next:after,
        .premium-slider-container .swiper-button-prev:after {
          font-size: 20px !important;
          font-weight: 900;
        }
        @media (max-width: 768px) {
          .premium-slider-container .swiper-button-next,
          .premium-slider-container .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Courses;
