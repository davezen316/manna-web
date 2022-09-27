import Slider from "react-slick";

function TeamSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    arrows: false,
    speed: 5000,
    responsive: [
      // {
      //   breakpoint: 1000,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //     infinite: true,
      //     dots: true,
      //   },
      // },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1	,
          infinite: true,
          dots: true,
        },
      },
	  {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <Slider
        {...settings}
        className="team-carousel1 owl owl-carousel owl-none owl-theme owl-dots-primary-full"
      >
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.1s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
              
                <img src="images/team/stephan.webp" alt="" />
              
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h4 className="dlab-name">
                  <a href="/team-1">Stephan Winkler</a>
                </h4>
                <span className="dlab-position">Founder & CEO <br/> Data Protection Officer DSB-TÜV</span>
              </div>
              <ul className="dlab-social-icon primary-light">
                <li>
                  <a href="https://en-gb.facebook.com/" className="fa fa-facebook"></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" className="fa fa-instagram"></a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" className="fa fa-linkedin"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.2s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
             
                <img src="images/team/dario.webp" alt="" />
              
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h4 className="dlab-name">
                  <a href="/team-1">Dario <br/> Brunner</a>
                </h4>
                <span className="dlab-position">General Manager</span>
              </div>
              <ul className="dlab-social-icon primary-light">
                <li>
                  <a href="https://en-gb.facebook.com/" className="fa fa-facebook"></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" className="fa fa-instagram"></a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" className="fa fa-linkedin"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.3s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
                <img src="images/team/jayden.webp" alt="" />   
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h4 className="dlab-name">
                  <a href="/team-1">Jayden <br/> Pang</a>
                </h4>
                <span className="dlab-position">Asia Managing Director</span>
              </div>
              <ul className="dlab-social-icon primary-light">
                <li>
                  <a href="https://en-gb.facebook.com/" className="fa fa-facebook"></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" className="fa fa-instagram"></a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" className="fa fa-linkedin"></a>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        {/* <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.4s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
                <img src="images/team/pic1.jpg" alt="" />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h4 className="dlab-name">
                  <a href="/team-1">Alina Jia</a>
                </h4>
                <span className="dlab-position">Senior Designer</span>
              </div>
              <ul className="dlab-social-icon primary-light">
                <li>
                  <a href="https://en-gb.facebook.com/" className="fa fa-facebook"></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" className="fa fa-instagram"></a>
                </li>
                <li>
                  <a href="https://twitter.com/login?lang=en" className="fa fa-twitter"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.5s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
             
                <img src="images/team/pic2.jpg" alt="" />
              
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h4 className="dlab-name">
                  <a href="/team-1">Suresh Doe</a>
                </h4>
                <span className="dlab-position">Senior Designer</span>
              </div>
              <ul className="dlab-social-icon primary-light">
                <li>
                  <a href="https://en-gb.facebook.com/" className="fa fa-facebook"></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" className="fa fa-instagram"></a>
                </li>
                <li>
                  <a href="https://twitter.com/login?lang=en" className="fa fa-twitter"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.6s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
              
                <img src="images/team/pic3.jpg" alt="" />
              
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h4 className="dlab-name">
                  <a href="/team-1">Domina Li</a>
                </h4>
                <span className="dlab-position">Senior Designer</span>
              </div>
              <ul className="dlab-social-icon primary-light">
                <li>
                  <a href="https://en-gb.facebook.com/" className="fa fa-facebook"></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" className="fa fa-instagram"></a>
                </li>
                <li>
                  <a href="https://twitter.com/login?lang=en" className="fa fa-twitter"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.7s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
             
                <img src="images/team/pic1.jpg" alt="" />
              
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h4 className="dlab-name">
                  <a href="/team-1">Alina Jia</a>
                </h4>
                <span className="dlab-position">Senior Designer</span>
              </div>
              <ul className="dlab-social-icon primary-light">
                <li>
                  <a href="https://en-gb.facebook.com/" className="fa fa-facebook"></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" className="fa fa-instagram"></a>
                </li>
                <li>
                  <a href="https://twitter.com/login?lang=en" className="fa fa-twitter"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.8s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
              
                <img src="images/team/pic2.jpg" alt="" />
              
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h4 className="dlab-name">
                  <a href="/team-1">Suresh Doe</a>
                </h4>
                <span className="dlab-position">Senior Designer</span>
              </div>
              <ul className="dlab-social-icon primary-light">
                <li>
                  <a href="https://en-gb.facebook.com/" className="fa fa-facebook"></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" className="fa fa-instagram"></a>
                </li>
                <li>
                  <a href="https://twitter.com/login?lang=en" className="fa fa-twitter"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.9s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
              
                <img src="images/team/pic3.jpg" alt="" />
             
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h4 className="dlab-name">
                  <a href="/team-1">Domina Li</a>
                </h4>
                <span className="dlab-position">Senior Designer</span>
              </div>
              <ul className="dlab-social-icon primary-light">
                <li>
                  <a href="https://en-gb.facebook.com/" className="fa fa-facebook"></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" className="fa fa-instagram"></a>
                </li>
                <li>
                  <a href="https://twitter.com/login?lang=en" className="fa fa-twitter"></a>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </Slider>
    </>
  );
}

export default TeamSlider;
