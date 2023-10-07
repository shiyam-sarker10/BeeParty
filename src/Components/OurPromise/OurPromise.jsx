
const OurPromise = () => {
  return (
    <div className="my-20">
      <div className="container mx-auto">
        <h3 className="mb-10 font-custom text-center text-4xl text-[#FEBF05]">
          Our Promise
        </h3>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div data-aos="fade-up-right" className=" md:w-[50%] relative">
            <img
              src="../../../src/assets/pop.gif"
              className="absolute w-[100px] left-[100px] top-[25px]"
              alt=""
            />
            <img
              className="w-full"
              src="../../../src/assets/shape1.png"
              alt="This is an image"
            />
          </div>
          <div data-aos="fade-up-left" className=" space-y-4 w-full md:w-[50%]">
            <h2 className="text-center md:text-right font-title font-bold text-5xl md:w-[80%]">
              There’s nothing more magical than a child’s imagination
            </h2>
            <p className=" text-center md:text-right text-gray-500 w-full md:w-[80%]">
              We will creating unforgettable birthdays with personalized themes,
              exquisite decorations, and joyful memories for every celebration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPromise;
