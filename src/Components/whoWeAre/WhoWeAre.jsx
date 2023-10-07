

const WhoWeAre = () => {
    return (
      <div className="my-20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row-reverse items-center justify-between">
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
            <div
              data-aos="fade-up-left"
              className=" space-y-4 w-full md:w-[40%]"
            >
              <h3 className="font-custom  text-2xl text-[#FEBF05]">
                Who we are
              </h3>
              <h2 className="text-center md:text-left font-title font-bold text-2xl md:text-4xl lg:text-5xl md:w-[80%]">
                Expert Birthday Planners with Heart
              </h2>
              <p className=" text-center md:text-left text-gray-500 w-full md:w-[80%]">
                Beeparty is a passionate team of dedicated event planners who
                specialize in crafting extraordinary birthday celebrations
                filled with creativity, attention to detail, and joyful
                memories.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default WhoWeAre;