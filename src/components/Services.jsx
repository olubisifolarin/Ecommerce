import React from "react";
import Cards from "../constant/cards";
import { MdLocalShipping } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";
import { IoMdReturnLeft } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";

const Services = () => {
  return (
    <div className="servicePage px-4 py-8">
      <h1 className="text-white text-center text-2xl md:text-3xl font-semibold mb-8">
        Why People Choose Us
      </h1>

      <div className="flex flex-col sm:flex-row w-full md:flex-row w-full lg:flex-row w-full flex-wrap justify-center  gap-6 px-4">
        <Cards className=""
          icon={<GiCheckMark className="card-icon" />} 
          title="Quality Products" 
        />
        <Cards 
          icon={<MdLocalShipping className="card-icon" />} 
          title="Free Shipping" 
        />
        <Cards 
          icon={<IoMdReturnLeft className="card-icon" />} 
          title="14-day Return" 
        />
        <Cards 
          icon={<IoCallSharp className="card-icon" />} 
          title="24/7 Support" 
        />
      </div>
    </div>
  );
};

export default Services;
