import React from "react";

import { Link } from "react-router-dom";

const Hero = () => {
  const handleScroll=() =>{
    const targetElement = document.getElementById("explore-products");
    if(targetElement){
      targetElement.scrollIntoView({behavior: "smooth", block: "start"})
    }
  }
  return (
    <section className="h-screen bg-hero bg-no-repeat bg-cover bg-center py-20 ">
      <div className="container mx-auto flex justify-around h-full">
        {/* text */}
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] mr-3 bg-cyan-700"></div>Hot Trend
          </div>
          <h1 className="uppercase text-[55px] md:text-[70px] leading-[1.1] font-semibold mb-4">LIVEN UP YOUR DAY <br />
          <span className="font-light">BY WEARING JACK PROJECT</span></h1>
          <Link onClick={handleScroll} className='self-start uppercase font-semibold border-b-2 border-primary'>Discover More</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
