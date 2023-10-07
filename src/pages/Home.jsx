import Banner from "../Components/Banner/Banner";
import OurHappyParents from "../Components/Our Happy Parents/OurHappyParents";
import OurGain from "../Components/OurGain/OurGain";
import OurPromise from "../Components/OurPromise/OurPromise";
import WhyChooseUs from "../Components/WhyChooseUs/WhyChooseUs";


const Home = () => {
    return (
      <div className="home-bg">
        <Banner></Banner>
        <OurPromise></OurPromise>
        <OurGain></OurGain>
        <WhyChooseUs></WhyChooseUs>
        <OurHappyParents></OurHappyParents>
      </div>
    );
};

export default Home;