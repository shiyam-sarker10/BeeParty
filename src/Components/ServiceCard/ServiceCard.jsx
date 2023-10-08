

const ServiceCard = ({serviceInfo}) => {
      const { id, name, price, description, image } = serviceInfo;
    return (
      <div data-aos="fade-right">
        <div className="bg-white/20 backdrop-blur-md text-center space-y-6  p-5 shadow-lg rounded-lg flex flex-col justify-center items-center">
          <div>
            <img className="w-[400px]" src={image} alt="" />
          </div>
          <h3 className="font-title text-gray-800 text-2xl">{name}</h3>
          <p className="text-sm text-gray-500">{description}</p>
          <h4 className="text-[#FEBF05] text-center text-xl font-custom">
            {price}/Party
          </h4>
          <button className="px-4 py-2 bg-[#FEBF05] tracking-wider rounded-lg font-title text-white">View Details</button>
        </div>
      </div>
    );
};

export default ServiceCard;