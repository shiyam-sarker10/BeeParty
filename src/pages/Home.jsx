import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import OurHappyParents from "../Components/Our Happy Parents/OurHappyParents";
import OurGain from "../Components/OurGain/OurGain";
import OurPromise from "../Components/OurPromise/OurPromise";
import WhyChooseUs from "../Components/WhyChooseUs/WhyChooseUs";
import Services from "./Services";


const Home = () => {
   const serviceData = useLoaderData();
    return (
      <div className="home-bg">
        <Banner></Banner>
        <OurPromise></OurPromise>
        <OurGain></OurGain>
        <WhyChooseUs></WhyChooseUs>
        <OurHappyParents></OurHappyParents>
        <Services serviceData={serviceData}></Services>
      </div>
    );
};

export default Home;