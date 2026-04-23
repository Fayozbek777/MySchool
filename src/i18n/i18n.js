import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "uz",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "cookie", "htmlTag"],
      caches: ["localStorage"],
    },

    resources: {
      uz: {
        translation: {
          nav: {
            home: "Asosiy",
            courses: "Kurslar",
            teachers: "O'qituvchilar",
            faq: "Savollar",
            contact: "Aloqa",
            login: "Kirish",
          },
          reviews: {
            title: "Fikrlar",
          },
          contact: {
            title: "Savollaringiz bormi?",
            subtitle:
              "Ma'lumotlaringizni qoldiring va biz sizga 15 daqiqa ichida qo'ng'iroq qilamiz.",
            phone_label: "Telefon raqami",
            address_label: "Manzilimiz",
            address_value: "Toshkent sh, Navoiy ko'chasi, 21",
            form_name: "Sizning ismingiz",
            form_phone: "Telefon raqamingiz",
            submit_btn: "So'rov yuborish",
            errors: {
              name_short: "Ism kamida 3 ta harfdan iborat bo'lishi kerak",
              name_invalid: "Ismda faqat harflar bo'lishi shart",
              phone_short: "Telefon raqamini to'liq kiriting",
            },
          },
          footer: {
            slogan:
              "Kelajak texnologiyalarini bugun biz bilan o'rganing va professionalga aylaning.",
            rights: "Barcha huquqlar himoyalangan.",
            links: {
              privacy: "Maxfiylik siyosati",
              offer: "Ommaviy oferta",
            },
          },
          faq: {
            badge: "Support Center",
            title: "Ko'p so'raladigan savollar",

            list: [
              {
                q: "O'qishni tugatgandan so'ng sertifikat beriladimi?",
                a: "Ha, albatta. Kursni muvaffaqiyatli yakunlagan har bir talabaga rasmiy sertifikat beriladi.",
              },
              {
                q: "Darslar qaysi vaqtda bo'lib o'tadi?",
                a: "Ertalab, tushdan keyin va kechki guruhlar mavjud.",
              },
              {
                q: "Noldan boshlash mumkinmi?",
                a: "Ha, barcha kurslar noldan boshlab o'rgatiladi.",
              },
              {
                q: "Ishga joylashishda yordam berasizlarmi?",
                a: "Ha, Career Center orqali yordam beramiz.",
              },
              {
                q: "To'lovni bo'lib to'lash mumkinmi?",
                a: "Ha, bo'lib to'lash tizimi mavjud.",
              },
            ],
          },
          teachers: {
            title: "Ustozlar",
            exp: "10+ yillik tajribaga ega xalqaro darajadagi mutaxassis",

            list: {
              t1: {
                name: "Алексей Иванов",
                role: "Senior Frontend Developer",
              },
              t2: {
                name: "Otabek G'ulomov",
                role: "Art Director в Яндексе",
              },
              t3: {
                name: "Даниил Ким",
                role: "Head of Marketing",
              },
              t4: {
                name: "Jasur Jumayev",
                role: "Fullstack Engineer",
              },
              t5: {
                name: "Sardor Alimov",
                role: "Senior UI/UX Designer",
              },
              t6: {
                name: "Farrux Fayziyev",
                role: "Backend Architect",
              },
            },
          },
          modal: {
            title: "Kursga yozilish",
            course_label: "Kurs",
            name: "Ismingiz",
            success_msg: "Tez orada bog'lanamiz!",
            phone: "Telefon raqamingiz",
            send: "Yuborish",
          },

          intro: {
            badge: "Kelajak ta'limi",
            titleMain: "YANGI BILIMLARNI",
            titleAccent: "EGALLANG",
            description:
              "Professional mentorlar va real loyihalar bilan IT olamida o'z o'rningizni toping.",
            btnCourses: "Kurslarni tanlash",
            btnAbout: "Biz haqimizda",
            stats: {
              students: "Talabalar",
              success: "Natija",
            },
          },

          courses: {
            title: "Bizning yo'nalishlar",
            duration: "Davomiyligi",
            more: "Batafsil",
            show_all: "Barchasini ko'rish",
            hide_all: "Yopish",

            list: {
              frontend: "Frontend Pro",
              design: "Grafik dizayn",
              smm: "SMM mutaxassis",
              backend: "Backend Node.js",
              flutter: "Flutter Mobile",
              uiux: "UI/UX Advanced",
              python: "Python Data",
              android: "Android Kotlin",
              cyber: "Kiber xavfsizlik",
              gamedev: "3D Game Dev",
              pm: "Project Manager",
              qa: "QA Testing",
              fullstack: "FullStack React",
              swift: "iOS Swift",
              datascience: "Data Science",
              marketing: "Digital Marketing",
              unity: "Unity Developer",
              aspnet: "C# ASP.NET",
              copywriting: "Copywriting",
              english: "Business English",
            },
          },
        },
      },

      ru: {
        translation: {
          nav: {
            home: "Главная",
            courses: "Курсы",
            teachers: "Преподаватели",
            faq: "Вопросы",
            contact: "Контакты",
            login: "Войти",
          },
          reviews: {
            title: "Отзывы",
          },
          footer: {
            slogan:
              "Изучайте технологии будущего с нами уже сегодня и станьте профессионалом.",
            rights: "Все права защищены.",
            links: {
              privacy: "Политика конфиденциальности",
              offer: "Публичная оферта",
            },
          },
          faq: {
            badge: "Центр поддержки",
            title: "Часто задаваемые вопросы",

            list: [
              {
                q: "Выдаётся ли сертификат после окончания курса?",
                a: "Да, каждому студенту выдается официальный сертификат.",
              },
              {
                q: "Когда проходят занятия?",
                a: "Есть утренние, дневные и вечерние группы.",
              },
              {
                q: "Можно ли начать с нуля?",
                a: "Да, курсы подходят для новичков.",
              },
              {
                q: "Помогаете ли с трудоустройством?",
                a: "Да, у нас есть Career Center.",
              },
              {
                q: "Можно ли оплатить частями?",
                a: "Да, доступна рассрочка.",
              },
            ],
          },
          contact: {
            title: "Есть вопросы?",
            subtitle:
              "Оставьте свои данные, и мы перезвоним вам в течение 15 минут.",
            phone_label: "Номер телефона",
            address_label: "Наш адрес",
            address_value: "г. Ташкент, ул. Навои, 21",
            form_name: "Ваше имя",
            form_phone: "Ваш номер телефона",
            submit_btn: "Отправить заявку",
            errors: {
              name_short: "Имя должно содержать минимум 3 символа",
              name_invalid: "Имя должно содержать только буквы",
              phone_short: "Введите полный номер телефона",
            },
          },
          teachers: {
            title: "Наши преподаватели",
            exp: "Специалист с опытом более 10 лет на международном уровне",

            list: {
              t1: {
                name: "Алексей Иванов",
                role: "Senior Frontend Developer",
              },
              t2: {
                name: "Мария Петрова",
                role: "Art Director в Яндексе",
              },
              t3: {
                name: "Даниил Ким",
                role: "Head of Marketing",
              },
              t4: {
                name: "Jasur Jumayev",
                role: "Fullstack Engineer",
              },
              t5: {
                name: "Sardor Alimov",
                role: "Senior UI/UX Designer",
              },
              t6: {
                name: "Elena Sidorova",
                role: "Backend Architect",
              },
            },
          },
          modal: {
            title: "Запись на курс",
            course_label: "Курс",
            name: "Ваше имя",
            success_msg: "Мы скоро с вами свяжемся!",
            phone: "Ваш номер телефона",
            send: "Отправить",
          },
          intro: {
            badge: "Образование будущего",
            titleMain: "ОСВАИВАЙТЕ",
            titleAccent: "НОВЫЕ НАВЫКИ",
            description:
              "Найдите свое место в мире IT с профессиональными менторами.",
            btnCourses: "Выбрать курс",
            btnAbout: "О нас",
            stats: {
              students: "Студентов",
              success: "Успех",
            },
          },

          courses: {
            title: "Наши направления",
            duration: "Срок",
            more: "Подробнее",
            show_all: "Посмотреть все",
            hide_all: "Закрыт",

            list: {
              frontend: "Frontend Pro",
              design: "Графический дизайн",
              smm: "SMM специалист",
              backend: "Backend Node.js",
              flutter: "Flutter Mobile",
              uiux: "UI/UX Продвинутый",
              python: "Python Data",
              android: "Android Kotlin",
              cyber: "Кибербезопасность",
              gamedev: "3D Game Dev",
              pm: "Project Manager",
              qa: "QA Testing",
              fullstack: "FullStack React",
              swift: "iOS Swift",
              datascience: "Data Science",
              marketing: "Digital Marketing",
              unity: "Unity Developer",
              aspnet: "C# ASP.NET",
              copywriting: "Копирайтинг",
              english: "Бизнес английский",
            },
          },
        },
      },

      en: {
        translation: {
          nav: {
            home: "Home",
            courses: "Courses",
            teachers: "Teachers",
            faq: "FAQ",
            contact: "Contact",
            login: "Sign In",
          },
          reviews: {
            title: "Reviews",
          },
          footer: {
            slogan:
              "Learn future technologies with us today and become a professional.",
            rights: "All rights reserved.",
            links: {
              privacy: "Privacy Policy",
              offer: "Public Offer",
            },
          },
          faq: {
            badge: "Support Center",
            title: "Frequently Asked Questions",

            list: [
              {
                q: "Will I get a certificate after the course?",
                a: "Yes, every student receives an official certificate.",
              },
              {
                q: "When are the classes?",
                a: "Morning, afternoon, and evening groups are available.",
              },
              {
                q: "Can I start from zero?",
                a: "Yes, courses are beginner-friendly.",
              },
              {
                q: "Do you help with employment?",
                a: "Yes, we have a Career Center.",
              },
              {
                q: "Can I pay in installments?",
                a: "Yes, installment plans are available.",
              },
            ],
          },
          teachers: {
            title: "Our Teachers",
            exp: "International specialist with 10+ years of experience",

            list: {
              t1: {
                name: "Alexey Ivanov",
                role: "Senior Frontend Developer",
              },
              t2: {
                name: "Maria Petrova",
                role: "Art Director at Yandex",
              },
              t3: {
                name: "Daniil Kim",
                role: "Head of Marketing",
              },
              t4: {
                name: "Jasur Jumayev",
                role: "Fullstack Engineer",
              },
              t5: {
                name: "Sardor Alimov",
                role: "Senior UI/UX Designer",
              },
              t6: {
                name: "Elena Sidorova",
                role: "Backend Architect",
              },
            },
          },
          modal: {
            title: "Course Registration",
            course_label: "Course",
            name: "Your Name",
            success_msg: "We will contact you soon!",
            phone: "Your Phone Number",
            send: "Submit",
          },
          intro: {
            badge: "Future of Education",
            titleMain: "MASTERING",
            titleAccent: "NEW SKILLS",
            description:
              "Find your place in the IT world with professional mentors.",
            btnCourses: "Select Course",
            btnAbout: "About Us",
            stats: {
              students: "Learners",
              success: "Success",
            },
          },
          contact: {
            title: "Have questions?",
            subtitle:
              "Leave your details and we will call you within 15 minutes.",
            phone_label: "Phone number",
            address_label: "Our address",
            address_value: "Tashkent city, Navoi street, 21",
            form_name: "Your name",
            form_phone: "Your phone number",
            submit_btn: "Send request",
            errors: {
              name_short: "Name must be at least 3 characters",
              name_invalid: "Name must contain only letters",
              phone_short: "Please enter a valid phone number",
            },
          },
          courses: {
            title: "Our Courses",
            duration: "Duration",
            more: "Learn More",
            show_all: "Show All",
            hide_all: "Close",

            list: {
              frontend: "Frontend Pro",
              design: "Graphic Design",
              smm: "SMM Specialist",
              backend: "Backend Node.js",
              flutter: "Flutter Mobile",
              uiux: "UI/UX Advanced",
              python: "Python Data",
              android: "Android Kotlin",
              cyber: "Cyber Security",
              gamedev: "3D Game Dev",
              pm: "Project Manager",
              qa: "QA Testing",
              fullstack: "FullStack React",
              swift: "iOS Swift",
              datascience: "Data Science",
              marketing: "Digital Marketing",
              unity: "Unity Developer",
              aspnet: "C# ASP.NET",
              copywriting: "Copywriting",
              english: "Business English",
            },
          },
        },
      },
    },
  });

export default i18n;
