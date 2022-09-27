import { useState } from 'react';
import Slider from "react-slick";


function TestimonialSlider() {
    const [asd, setAsd] = useState();
    const settings = {
        dots:true,
        arrows:false,
        centerMode:true,
        slidesToShow:3,
        dots:false,
        infinite:true,
        slidesToScroll:1,
        autoplay:true,
		responsive: [
			
			{
			  breakpoint: 1320,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
				centerMode:false,
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
				centerMode:false,
			  }
			},
		]	
	};
const renderArrows = () => {
    return (
      <div className="owl-nav">
        <div
          className="owl-prev"
          onClick={() => asd.slickPrev()}
        >
          <i className="fa fa-arrow-left"></i>
        </div>
        <div
          className="owl-next"
          onClick={() => asd.slickNext()}
        >
          <i className="fa fa-arrow-right"></i>
        </div>
      </div>
    );
  };
    return (
        <>
        <div className="testimonials-carousel1 owl-carousel owl-theme owl-btn-2 owl-btn-white owl-btn-center">
            <Slider
                ref={c => setAsd(c)}
                {...settings} 
                
            >
                <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.2s"
					
                >
                    <div className="testimonial-1">
                        <div className="testimonial-text">
                            <p>
                                “ We rely on Proof Point especially in the areas of SEO, SEA, programming & consulting.
                                And that for more than 10 years. "
                            </p>
                        </div>
                        <div className="testimonial-detail">
                            <div className="clearfix">
                                <strong className="testimonial-name">
                                    Alois Maier 
                                </strong>
                                <span className="testimonial-position">
                                    Managing Director<br/>
                                    PACTA INVEST GmbH{" "}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.4s"
                >
                    <div className="testimonial-1">
                        <div className="testimonial-text">
                            <p>
                                “ With the KWS website system and Proof Point's SEO work, 
                                we are really well received by our users and are found in the search engines. "
                            </p>
                        </div>
                        <div className="testimonial-detail">
                            <div className="clearfix">
                                <strong className="testimonial-name">
                                    Jean-Philippe 
                                </strong>
                                <span className="testimonial-position">
                                    Lang Club Management <br/>
                                    Home of Balance DornbirnVorarlberg{" "}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.6s"
                >
                    <div className="testimonial-1">
                        <div className="testimonial-text">
                            <p>
                                " We use the KWS website system including the online lead system and are completely satisfied. 
                                I would like to commend the great and always prompt Proof Point support. "
                            </p>
                        </div>
                        <div className="testimonial-detail">
                            <div className="clearfix">
                                <strong className="testimonial-name">
                                    Franz Lehermeier  
                                </strong>
                                <span className="testimonial-position">
                                    Owner of fitness and therapy center, Landau{" "}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                    <div className="testimonial-1">
                        <div className="testimonial-text">
                            <p>
                                “For many years we have relied on the service in the area of ​​the Internet. 
                                Creative ideas for our advertising also come from Proof Point. Thanks. "
                            </p>
                        </div>
                        <div className="testimonial-detail">
                            <div className="clearfix">
                                <strong className="testimonial-name">
                                    dr Rüdiger Blass  
                                </strong>
                                <span className="testimonial-position">
                                    Partner Sultanow & Partner Tax Advisor{" "}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                    <div className="testimonial-1">
                        <div className="testimonial-text">
                            <p>
                                “Proof Point enabled us to serve the Swiss fitness market with a professional website system. 
                                With this team, our contractual partners are always one step ahead. 
                                Cleverly linked to app and FB. Always up to date with SEO and the latest Google rules.”
                            </p>
                        </div>
                        <div className="testimonial-detail">
                            {/* <div className="testimonial-pic">
                                <img
                                    src="images/testimonials/pic3.jpg"
                                    alt=""
                                />
                            </div> */}
                            <div className="clearfix">
                                <strong className="testimonial-name">
                                    Ariane Egli
                                </strong>
                                <span className="testimonial-position">
                                    Partner & Senior Consultant<br />
                                    Greinwalder & Partner Switzerland{" "}
                                </span>
                                {/* <ul className="star-rating">
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
            {renderArrows()}
            </div>
        </>
    );
}

export default TestimonialSlider;
