import Link from 'next/link';

function AboutUs() {
    return (
      <>  
          <section className="content-inner">
              <div className="container">
                  <div className="row align-items-center">
                      <div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                          <div className="dz-media">
                              <img src="images/homepage/business.png" className="move-1" alt=""/>
                          </div>
                      </div>
                      <div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                          <div className="section-head style-1 mb-4">
                              <h6 className="sub-title bgl-primary m-b20 text-primary">About Us</h6>
                              <h2 className="title">How <span class="text-loudspeaker-one">Loudspeaker One</span> Can Help You Achieve Your Business Goal</h2>
                          </div>
                          <p><span class="text-loudspeaker-one">Loudspeaker One</span> is an all-in-one platform that aimed to streamlines all your digital marketing operations.
                            Marketing shouldn't be a hassle. And it shouldn't take up your whole day either. 
                          </p>
                          <p>
                            That's why we created <span class="text-loudspeaker-one">Loudspeaker One</span> - so you could focus on what really matters.
                            Whether you're trying to grow your online presence, promote a sale, or drive traffic to your website, <span class="text-loudspeaker-one">Loudspeaker One</span> has got you covered.
                          </p>
                          
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