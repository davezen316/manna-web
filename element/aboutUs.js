import Link from 'next/link';

function AboutUs() {
    return (
      <>  
          <section className="content-inner">
              <div className="container">
                  <div className="row align-items-center">
                      <div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                          <div className="dz-media">
                              <img src="images/homepage/business.png" alt=""/>
                          </div>
                      </div>
                      <div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                          <div className="section-head style-1 mb-4">
                              <h6 className="sub-title bgl-primary m-b20 text-primary">About Us</h6>
                              <h2 className="title"><span class="text-loudspeaker-one">Loudspeaker One</span> Can Help You Achieve Your Business Goal</h2>
                          </div>
                          <p>
                            We created <span class="text-loudspeaker-one">Loudspeaker One</span> - to give you easy access to all what is necessary to promote your Business goals. 
                            Grow your online presence, promote your sales, Loudspeaker One has got you covered. 
                            Website editor, Newsletter, Online shop, Scheduling Tools… and so much more. One login is all you need.
                          </p>
                          <btn data-wow-duration="1.6s" data-wow-delay="1.7s" className="wow fadeInUp btn btn-primary">Get A Demo</btn>
                          {/* <img src="images/sign.png" alt=""/>
                          <h4 className="m-b30">CEO Jhone Doe</h4> */}
                         {/* <Link href="/about-us-1"><a  className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Learn More</a></Link>  */}
                      </div>
                  </div>
              </div>
          </section>
      </>
    )
  }
  
  export default AboutUs;