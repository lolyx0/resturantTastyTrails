import React from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Dishes from "./components/Dishes";
import About from "./components/About";
import Mission from "./components/Mission";
import Experstise from "./components/Experstise";
import Review from "./components/Review";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <HeroSection />
      <Navbar />
      <Dishes />
      <About />
      <Mission />
      <Experstise />
      <Review />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default App;
