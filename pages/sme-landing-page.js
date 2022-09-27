import { useEffect } from "react";
import SliderSME from "../element/slider-sme";
import Clients from "../element/clients";
import Service from "../element/service";
import AboutUsSME from "../element/aboutUsSME";
import Counter from "../element/counter";
import Features from "../element/our-features";
import Projects from "../element/projects";
import Newsletter from "../element/newsletter";
import Team from "../element/team";
import Pricing from "../element/pricing";
import Testimonial from "../element/testimonial";
import Blog from "../element/blog";
import Quote from "../element/quote";
import Cta from "../element/cta";
import Footer from "../layout/footer-comp";
import Header from "../layout/header";
import OurServicesSME from "../element/our-services-sme";
function Home() {
  useEffect(() => {
    document.querySelector("body").setAttribute("color", "color_1");
  }, []);
  return (
    <>
	<Header />
	  <div className="page-content bg-white" id="top">
        <SliderSME />
        <Clients />
        <AboutUsSME />
        {/* <Counter /> */}
        <Service />
        {/* <Features /> */}
        <OurServicesSME />
        {/* <Cta /> */}
        {/* <Projects /> */}
        <Newsletter />
        <Team />
        {/* <Pricing /> */}
        {/* <Testimonial /> */}
        {/* <Blog /> */}
        <Quote />
        <Cta />
	  { /* 
	  */}
      </div>
	  <Footer />
    </>
  );
}

export default Home;
