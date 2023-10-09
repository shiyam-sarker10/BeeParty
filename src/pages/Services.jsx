
import ServiceCard from "../Components/ServiceCard/ServiceCard";
import Wishing from './../Components/Wishing/Wishing';

const Services = ({serviceData}) => {
 
  const { id, name, price, description, image } = serviceData;

  return (
    <div className="home-bg px-4">
      <div className="container mx-auto">
        <div data-aos="fade-down">
          <div className="relative py-20">
            <img
              src="../../../src/assets/red.png"
              className="absolute left-[58%] top-[-50px]"
              alt=""
            />
            <div className="container mx-auto space-y-4">
              <h3 className=" font-custom text-center  text-[#FEBF05] tracking-tighter text-3xl">
                What we offer
              </h3>
              <h2 className="font-title font-bold text-3xl md:text-4xl lg:text-5xl text-center w-full md:w-1/2 mx-auto  text-gray-900">
                Awesome Services
              </h2>
              <p className="text-center text-gray-500">
                Its our first priority to gift you a beautiful moment
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
                {serviceData.map((serviceInfo, index) => (
                  <ServiceCard
                    key={index}
                    serviceInfo={serviceInfo}
                  ></ServiceCard>
                ))}
              </div>
              <Wishing></Wishing>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
