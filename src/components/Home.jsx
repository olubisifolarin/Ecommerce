import React from "react";
import imgbg from "../assets/imgbg.png";
import boxer from "../assets/boxer.png";
import pinkbag from "../assets/pinkbag.png";
import crocs from "../assets/crocs.png";
import Services from "./Services";
import Shop from "./Shop";

const Home = () => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between px-4 py-10 md:px-12">
        {/* Text Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left text-white">
            Welcome to Elegant Wears, the place where style and comfort collide to make fashion a statement!
          </h1>
          <div className="text-center md:text-left pt-8">
            <button className="bg-yellow-700 hover:bg-white-700 text-white  font-semibold text-lg md:text-xl py-3 px-8 rounded-md border border-white">
              Shop Now 
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 relative flex justify-center items-center">
          <img src={imgbg} alt="home background" className="w-full max-w-md object-contain" />

          <div className="absolute top-0 left-0 flex flex-col items-start gap-4 p-4">
            <img src={boxer} alt="boxer" className="w-20 md:w-28 mt-10" />
            <img src={pinkbag} alt="pink bag" className="w-16 md:w-24" />
          </div>

          <img src={crocs} alt="crocs" className="absolute bottom-0 right-4 w-24 md:w-32" />
        </div>
      </div>

      <Services />
      <Shop />
    </>
  );
};

export default Home;
