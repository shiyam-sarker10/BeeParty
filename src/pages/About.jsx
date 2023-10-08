import MeetOurTeam from "../Components/MeetOurTeam/MeetOurTeam";
import OurMission from "../Components/Our Mission/OurMission";
import OurHistory from "../Components/OurHistory/OurHistory";
import WhoWeAre from "../Components/whoWeAre/WhoWeAre";


const About = () => {
    return (
      <div className="home-bg px-4 ">
        <WhoWeAre></WhoWeAre>
        <OurHistory></OurHistory>
        <MeetOurTeam></MeetOurTeam>
        <OurMission></OurMission>
      </div>
    );
};

export default About;