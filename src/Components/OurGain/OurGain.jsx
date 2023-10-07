import CountUp from "react-countup";

const OurGain = () => {
  return (
    <div data-aos="fade-up" className="my-20">
      <h3 className="mb-10 font-custom text-center text-4xl text-[#FEBF05]">
        Our Gains
      </h3>
      <div className="container mx-auto ">

        <div className="bg-[#FFECC6] rounded-lg my-10 p-4 md:p-6 lg:p-10 flex-wrap  flex gap-x-40 justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-title text-[#FEBF05] text-3xl md:text-4xl lg:text-6xl tracking-widest font-black">
              {<CountUp end={485} duration={5} />}
            </h1>
            <h6 className="font-custom text-gray-600 tracking-wider">
              Happy Kid
            </h6>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-title text-[#FEBF05] text-3xl md:text-4xl lg:text-6xl tracking-widest font-black">
              {<CountUp end={369} duration={5} />}
            </h1>
            <h6 className="font-custom text-gray-600 tracking-wider ">
              Happy Parents
            </h6>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-title text-[#FEBF05] text-3xl md:text-4xl lg:text-6xl tracking-wider font-black">
              {<CountUp end={65} duration={5} />}+
            </h1>
            <h6 className="font-custom text-gray-600 tracking-wider">
              Expert Team
            </h6>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-title text-[#FEBF05] text-3xl md:text-4xl lg:text-6xl tracking-wider font-black">
              {<CountUp end={8} duration={5} />}+
            </h1>
            <h6 className="font-custom text-gray-600 tracking-wider">
              Years Experience
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurGain;
