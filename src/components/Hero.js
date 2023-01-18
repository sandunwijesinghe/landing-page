import React from "react";

//impoert hero data
import { heroData } from "../data";
//Import components
import Header from "./Header";

function Hero() {
  //Destribute hero data
  const { title, subtitle, btnText, image } = heroData;
  

  return (
    <section className="lg:h-[900px] py-12">
      <Header/>
      <div className="container mx-auto h-full relative">
        <div className=" flex flex-col lg:flex-row items-center h-full md:py-24 ">
          {/* Text */}
          <div className="text-center xl:text-left xl:absolute"  >
            <h1 className="h1 xl:max-w-[700px] mb-6 lg:mb-12" data-aos='fade-down' data-aos-delay='400'>{title}</h1>
            <p className="lead xl:max-w-[380px] mb-6 lg:mb-12" data-aos='fade-down' data-aos-delay='500'>{subtitle}</p>
            <button className="btn btn-primary mb-8 xl:mb-0 " data-aos='fade-down' data-aos-delay='600'>{btnText}</button>
          </div>

          {/* images */}
          <div className="xl:absolute xl:-right-12 xl:bottom-16" data-aos='fade-up' >
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
