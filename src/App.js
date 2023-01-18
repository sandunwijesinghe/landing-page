import React from "react";

//Import animate on scroll
import Aos from "aos";
import "aos/dist/aos.css";

//Import components
import About from "./components/About";
import CtaSection from "./components/CtaSection";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";

function App() {
  //aos initialization
  Aos.init({
    duration: 1800,
    offset: 0,
  });

  return (
    <div className="overflow-hidden">
   
      <Hero />
      <About/>
      <Features/>
      <Testimonials/>
      <CtaSection/>
      <Footer/>
     
    </div>
  );
}

export default App;
