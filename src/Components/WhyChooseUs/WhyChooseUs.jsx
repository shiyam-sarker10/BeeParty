
const WhyChooseUs = () => {
    return (
      <div data-aos="fade-down">
        <div className="relative py-20">
          <img
            src="../../../src/assets/red.png"
            className="absolute left-[58%] top-[-50px]"
            alt=""
          />
          <div className="container mx-auto space-y-4">
            <h3 className=" font-custom text-center  text-[#FEBF05] tracking-tighter text-3xl">
              Why Choose Us
            </h3>
            <h2 className="font-title font-bold text-3xl md:text-4xl lg:text-5xl text-center w-full md:w-1/2 mx-auto  text-gray-900">
              Making Moments In To Memories
            </h2>
            <p className="text-center text-gray-500">
              Its our first priority to gift you a beautiful moment
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
              <div
                data-aos="fade-left"
                className=" bg-[#f6f6f6] shadow-md space-y-4 p-10 rounded-xl flex flex-col justify-center items-center"
              >
                <div className="bg-white p-5 rounded-full flex justify-center items-center">
                  <img
                    className="w-[40px]"
                    src="../../../src/assets/support.svg"
                    alt="customer support"
                  />
                </div>
                <h4 className="font-title text-[#FEBF05] text-lg font-semibold tracking-wide ">
                  Free Consultations
                </h4>
                <p className="text-center text-gray-400">
                  Accessible 24/7, our dedicated support team is here to assist
                  you anytime, ensuring customer satisfaction.
                </p>
                <button className="px-4 py-2 bg-[#FEBF05]  rounded-lg font-custom text-white">
                  Learn More
                </button>
              </div>
              <div
                data-aos="fade-up"
                className=" bg-[#f6f6f6] shadow-md space-y-4 p-10 rounded-xl flex flex-col justify-center items-center"
              >
                <div className="bg-white p-5 rounded-full flex justify-center items-center">
                  <img
                    className="w-[40px]"
                    src="../../../src/assets/expert.svg"
                    alt="Certified Expert"
                  />
                </div>
                <h4 className="font-title text-[#FEBF05] text-lg font-semibold tracking-wide ">
                  Certified Expert
                </h4>
                <p className="text-center text-gray-400">
                  Our team consists of certified experts dedicated to delivering
                  top-quality solutions and support.
                </p>
                <button className="px-4 py-2 bg-[#FEBF05]  rounded-lg font-custom text-white">
                  Learn More
                </button>
              </div>
              <div
                data-aos="fade-right"
                className=" bg-[#f6f6f6] shadow-md space-y-4 p-10 rounded-xl flex flex-col justify-center items-center"
              >
                <div className="bg-white p-5 rounded-full flex justify-center items-center">
                  <img
                    className="w-[40px]"
                    src="../../../src/assets/premium.svg"
                    alt="Premium material"
                  />
                </div>
                <h4 className="font-title text-[#FEBF05] text-lg font-semibold tracking-wide ">
                  Premium material
                </h4>
                <p className="text-center text-gray-400">
                  We proudly offer premium materials, ensuring the highest
                  quality products for your satisfaction.
                </p>
                <button className="px-4 py-2 bg-[#FEBF05]  rounded-lg font-custom text-white">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default WhyChooseUs;