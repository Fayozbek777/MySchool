import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Intro from "../../components/Intro/Intro";
import Courses from "../../components/Courses/Courses";
import Teachers from "../../components/Teachers/Teachers";
import Reviews from "../../components/Reviews/Reviews";
import Faq from "../../components/Faq/Faq";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="relative">
      <Navbar />

      <main>
        <Intro />
        <Courses />
        <Teachers />
        <Reviews />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
