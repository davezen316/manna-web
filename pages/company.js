import { useEffect } from "react";
import Slider from "../element/slider-comp";
import Clients from "../element/clients";
import Service from "../element/service";
import AboutUs from "../element/aboutUsComp";
import Counter from "../element/counter";
import Features from "../element/our-features";
import Projects from "../element/projects";
import Newsletter from "../element/newsletter";
import Team from "../element/team-comp";
import Pricing from "../element/pricing";
import Testimonial from "../element/testimonial";
import Blog from "../element/blog";
import Quote from "../element/quote";
import Cta from "../element/cta";
import Footer from "../layout/footer-comp";
import Header from "../layout/header-comp";
import OurServices from "../element/our-services-comp";

function Company() {
  useEffect(() => {
    document.querySelector("body").setAttribute("color", "color_1");
  }, []);
  return (
    <>
      <Header />
      <div className="page-content bg-white" id="top">
          <Slider />
          <Clients />
          {/* <Counter /> */}
          {/* <Service /> */}
          {/* <Projects /> */}
          <AboutUs />
          {/* <Features /> */}
          <OurServices />
          {/* <Newsletter /> */}
          <Team />
          {/* <Pricing /> */}
          <Testimonial />
          {/* <Blog /> */}
          <Quote />
          {/* <Cta /> */}
        </div>
      <Footer />
    </>
  );
}

export default Company;
