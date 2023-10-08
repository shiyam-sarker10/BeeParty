
import Mission from './Mission';
import Mission2 from './Mission2';

const OurMission = () => {
    return (
      <div data-aos="fade-down ">
        <div className="relative py-20">
          <img
            src="../../../src/assets/red.png"
            className="absolute left-[58%] top-[-50px]"
            alt=""
          />
          <div className="container mx-auto space-y-4">
            <h3 className=" font-custom text-center  text-[#FEBF05] tracking-tighter text-3xl">
              Our Mission
            </h3>
            <h2 className="font-title font-bold text-3xl md:text-4xl lg:text-5xl text-center w-full md:w-1/2 mx-auto  text-gray-900">
              We have a mission to make every kid smile
            </h2>
            <div
              data-aos="fade-up"
              className=" flex flex-wrap justify-between items-center py-20"
            >
              <Mission data-aos="fade-right"></Mission>
              <Mission2 data-aos="fade-left"></Mission2>
            </div>
          </div>
        </div>
      </div>
    );
};

export default OurMission;