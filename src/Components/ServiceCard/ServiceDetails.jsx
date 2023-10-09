import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CountUp from "react-countup";

const ServiceDetails = () => {
    const [Service, setService] = useState({});
    let { id } = useParams();
    
    const serviceInfo = useLoaderData();
    useEffect(() => {
      const findService = serviceInfo?.find((service) => service.id == id);
      
      console.log("before",findService);
      setService(findService);
    }, [id]);
    const {
      name,
      price,
      recommendedFor,
      includedServices,
      image,
      detailed_description,
    } = Service;
    console.log(includedServices);

    return (
      <div className="px-4 my-20 home-bg relative">
        <div className="w-[500px]  rotate-[40deg]  backdrop-blur-md z-0 h-[600px] bg-[#ABCE4E]/50 top-[25px] left-[500px] rounded-xl absolute"></div>
        <div className="w-[500px]  rotate-[40deg]  backdrop-blur-md z-0 h-[600px] bg-[#ABCE4E]/50 top-[75px] left-[500px] rounded-xl absolute"></div>
        <div className="w-[500px]  rotate-[40deg]  backdrop-blur-md z-0 h-[600px] bg-[#ABCE4E]/50 top-[120px] left-[500px] rounded-xl absolute"></div>
        <div className="w-[500px]  rotate-[40deg]  backdrop-blur-md z-0 h-[600px] bg-[#ABCE4E]/50 top-[165px] left-[500px] rounded-xl absolute"></div>
        <div className="w-[500px]  rotate-[40deg]  backdrop-blur-md z-0 h-[600px] bg-[#ABCE4E]/50 top-[210px] left-[500px] rounded-xl absolute"></div>
        <div className="w-[500px]  rotate-[40deg]  backdrop-blur-md z-0 h-[600px] bg-[#ABCE4E]/50 top-[115px] left-[500px] rounded-xl absolute"></div>
        <div className="shadow-lg bg-white/90 w-max mx-auto backdrop-blur-md z-20 shadow-[#ABCE4E]/40 rounded-lg p-10">
          <div className="flex flex-col justify-center items-center">
            <img className="w-[300px]" src={image} alt="" />
          </div>
          <div className="grid justify-center space-y-10">
            <h1 className="font-title text-center text-2xl text-amber-800 md:text-3xl lg:text-4xl text">
              {name}
            </h1>
            <h1 className="font-title text-center text-2xl text-gray-800 text">
              What We Offer In The Package
            </h1>

            <ul className="flex flex-col justify-center items-center py-5">
              <div className="">
                {includedServices?.map((feature, idx) => (
                  <li
                    className="list-disc  r mx-auto text-[#ABCE4E] font-custom tracking-[3px] text-xl  text"
                    key={idx}
                  >
                    {feature}
                  </li>
                ))}
              </div>
            </ul>
            <h1 className="font-title text-center text-xl text-gray-900 lg:text-2xl text">
              recommendedFor :{" "}
              {<CountUp end={ recommendedFor } duration={8} />}{" "}+ Participants
            </h1>
            <p className="text-center font-custom text-amber-800 text-2xl">
              Price : {price}
            </p>
          </div>
        </div>
      </div>
    );
};

export default ServiceDetails;