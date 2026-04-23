import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

const Reviews = () => {
  const { t } = useTranslation();

  const reviewsData = [
    {
      id: 1,
      name: "Kamronbek Orziyev",
      role: "Frontend Developer",
      initial: "K",
      text: "Kurs juda professional darajada tashkil qilingan. Ayniqsa mentorlarning yordami va real loyihalar ustida ishlash menga juda yoqdi.",
    },
    {
      id: 2,
      name: "Sanjarbek Jumayev",
      role: "UI/UX Designer",
      initial: "S",
      text: "Dizayn asoslarini noldan o'rgandim. Hozirda o'z portfoliomga ega bo'ldim va birinchi buyurtmalarimni oldim.",
    },
    {
      id: 3,
      name: "Asadbek Fayzullayev",
      role: "Backend Developer",
      initial: "A",
      text: "FastAPI va PostgreSQL bo'yicha bilimlarimni mustahkamladim. Darslar juda aniq va lundal tushuntirilgan.",
    },
    {
      id: 4,
      name: "Diyorbek Ismoilov",
      role: "Mobile Developer",
      initial: "D",
      text: "Flutter kursi kutilganidan ham a'lo chiqdi. Ilova yaratishni noldan boshlab, AppStore ga yuklashgacha o'rgandim.",
    },
    {
      id: 5,
      name: "Iskandar Sobirov",
      role: "Fullstack Engineer",
      initial: "I",
      text: "Frontend va Backendni bitta kursda o'rganish — eng to'g'ri qaror bo'ldi. Hozirda o'z startupim ustida ishlayapman.",
    },
    {
      id: 6,
      name: "Boburmirzo Alimov",
      role: "Data Scientist",
      initial: "B",
      text: "Ma'lumotlar bilan ishlash va AI algoritmlari bo'yicha darslar juda qiziqarli o'tdi. Ilm-fanga bo'lgan qiziqishim oshdi.",
    },
    {
      id: 7,
      name: "Javohir Ergashev",
      role: "SMM Expert",
      initial: "J",
      text: "Marketing va strategiya bo'yicha olgan bilimlarim biznesimni rivojlantirishga katta yordam berdi. Rahmat!",
    },
  ];

  return (
    <section
      id="reviews"
      className="py-24 bg-gradient-to-b from-primary to-slate-950 text-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-[#d69f38]/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-4"
          >
            {t("reviews.title") || "Bitiruvchilar Fikri"}
          </motion.h2>
          <div className="w-24 h-1.5 bg-[#d69f38] mx-auto rounded-full shadow-[0_0_20px_#d69f38]" />
        </div>

        <div className="reviews-swiper-container">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            speed={800}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-20"
          >
            {reviewsData.map((review) => (
              <SwiperSlide key={review.id}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="h-full bg-white/[0.03] backdrop-blur-3xl rounded-[3.5rem] p-10 border border-white/10 hover:border-[#d69f38]/30 transition-all duration-500 flex flex-col relative"
                >
                  <div className="text-[#d69f38]/20 absolute top-8 right-10">
                    <Quote size={60} strokeWidth={3} />
                  </div>

                  <p className="text-white/60 text-lg italic leading-relaxed mb-10 relative z-10">
                    "{review.text}"
                  </p>

                  <div className="mt-auto flex items-center gap-5 border-t border-white/5 pt-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#d69f38] to-blue-600 flex items-center justify-center font-black text-xl text-white shadow-lg shadow-[#d69f38]/10">
                      {review.initial}
                    </div>
                    <div>
                      <h4 className="font-black text-white uppercase italic tracking-tighter">
                        {review.name}
                      </h4>
                      <p className="text-[#d69f38] text-[10px] font-black uppercase tracking-widest">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .reviews-swiper-container .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.1) !important;
          opacity: 1 !important;
          width: 8px !important;
          height: 8px !important;
          transition: all 0.4s ease !important;
        }
        .reviews-swiper-container .swiper-pagination-bullet-active {
          background: #d69f38 !important;
          width: 30px !important;
          border-radius: 5px !important;
          box-shadow: 0 0 15px rgba(214, 159, 56, 0.4);
        }
      `}</style>
    </section>
  );
};

export default Reviews;
