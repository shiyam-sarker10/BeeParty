

const OurHappyParents = () => {
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
            Testimonial
          </h3>
          <h2 className="font-title font-bold text-3xl md:text-4xl lg:text-5xl text-center w-full md:w-1/2 mx-auto  text-gray-900">
            Our Happy Parents
          </h2>
          <p className="text-center text-gray-500">
            Here are some our happy parents testimonial
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
            <div data-aos="fade-left" className="shadow-md ">
              <div className="bg-[#F6F6F6] tracking-wider rounded-t-xl text-gray-500 font-custom text-xl p-10">
                Beeparty made our childs birthday unforgettable! The attention
                to detail and creative ideas were exceptional.
              </div>
              <div className=" bg-white rounded-b-xl p-5 flex justify-center items-center">
                <div className="flex gap-x-6 items-center">
                  <img
                    className="w-[70px] h-[70px] rounded-full"
                    src="../../../src/assets/t1.jpg"
                    alt="user"
                  />
                  <div>
                    <h2 className=" text-xl font-title">Steven hawks</h2>
                    <p className="text-gray-400">From USA, California</p>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-down" className="shadow-md rounded-xl">
              <div className="bg-[#F6F6F6] tracking-wider rounded-t-xl text-gray-500 font-custom text-xl p-10">
                We&apos;re grateful for  stress-free planning.
                They exceeded our expectations, 
              </div>
              <div className=" bg-white rounded-b-xl p-5 flex justify-center items-center">
                <div className="flex gap-x-6 items-center">
                  <img
                    className="w-[70px] h-[70px] rounded-full"
                    src="../../../src/assets/t2.jpg"
                    alt="user"
                  />
                  <div>
                    <h2 className=" text-xl font-title">Eva Elfie</h2>
                    <p className="text-gray-400">From USA, California</p>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-right" className="shadow-md rounded-xl">
              <div className="bg-[#F6F6F6] tracking-wider rounded-t-xl text-gray-500 font-custom text-xl p-10">
                Exceptional service! Beeparty&apos;s team ensured everything ran
                smoothly. Our child&apos;s birthday was a hit
              </div>
              <div className=" bg-white rounded-b-xl p-5 flex justify-center items-center">
                <div className="flex gap-x-6 items-center">
                  <img
                    className="w-[70px] h-[70px] rounded-full"
                    src="../../../src/assets/t3.jpg"
                    alt="user"
                  />
                  <div>
                    <h2 className=" text-xl font-title">Steven hawks</h2>
                    <p className="text-gray-400">From USA, California</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurHappyParents;
