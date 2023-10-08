
import TeamCards from "./TeamCards";

const MeetOurTeam = () => {
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
            Meet Our Team
          </h3>
          <h2 className="font-title font-bold text-3xl md:text-4xl lg:text-5xl text-center w-full md:w-1/2 mx-auto  text-gray-900">
            It takes two flints to make a fire.
          </h2>
          <p className="text-center text-gray-500">
            Meet Our Core certified Expert Team Members
          </p>
         <TeamCards></TeamCards>
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
