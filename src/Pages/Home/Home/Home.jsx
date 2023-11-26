import React from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import TextContent from "../TextContent/TextContent";
import AboutSection from "../AboutSection/AboutSection";
import Services from "../Services/Services";
import LookNaturalTextSection from "../LookNaturalTextSection/LookNaturalTextSection";
import WorkingHours from "../WorkingHours/WorkingHours";
import HomeParallax from "../HomeParallax/HomeParallax";
import ServiceMenu from "../ServiceMenu/ServiceMenu";
import Gallery from "../Gallery/Gallery";
import OurLocation from "../OurLocation/OurLocation";
import TrendingSection from "../../../Pages/Home/TrendingSection/TrendingSection";
import Wizard from "../../../Component/WaitList/Steps/Wizard";
import WaitList from "../../../Component/WaitList/WaitList";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      {/* <TextContent /> */}
      <AboutSection />
      <Services />
      <Wizard></Wizard>
      {/* <WaitList></WaitList> */}
      <TrendingSection />
      <Gallery />
      <OurLocation />
    </div>
  );
};

export default Home;
