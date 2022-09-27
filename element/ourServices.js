import Link from 'next/link';

function OurServices() {
    return (
      <>  
          <section className="content-inner bg-gray">
              <div className="container">
                  <div className="row align-items-center">
                      <div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                          <div className="section-head style-1 mb-4">
                              {/* <h6 className="sub-title bgl-primary m-b20 text-primary">About Us</h6> */}
                              <h2 className="title"><span class="text-loudspeaker-one">Loudspeaker One</span> Can Help You Achieve Your Business Goal</h2>
                          </div>
                          <p className="m-b30">
                            We created <span class="text-loudspeaker-one">Loudspeaker One</span> - to give you easy access to all what is necessary to promote your Business goals. 
                            Grow your online presence, promote your sales, Loudspeaker One has got you covered. 
                            Website editor, Newsletter, Online shop, Scheduling Tools… and so much more. One login is all you need.</p>
                          <Link href="/contact-us"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Start Trial</a></Link>
                      </div>
                      <div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                          <div className="dz-media">
                              <img src="images/homepage/business.png" alt=""/>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section className="content-inner">
              <div className="container">
                  <div className="row align-items-center">

                      <div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                          <div className="dz-media">
                              <img src="images/about/img2.png" alt=""/>
                          </div>
                      </div>
                      <div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                          <div className="section-head style-1 mb-4">
                              {/* <h6 className="sub-title bgl-primary m-b20 text-primary">Package</h6> */}
                              <h2 className="title">For Everyone</h2>
                          </div>
                          <h5>No-code, user-friendly platform, enjoy easy access to more tools you will ever need.“</h5>
                          <p className="m-b30">Creating and maintaining a homepage with ease, online shops, email campaigns, real data protective streaming, scheduling client dates, social media posts all is just one click away.</p>
                          <btn className="btn btn-outline-secondary mr-4">Learn More</btn>
                          <Link href="/contact-us"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Start Trial</a></Link>
                         {/* <Link href="/sme-landing-page"><a  className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Learn More</a></Link>  */}
                      </div>
                  </div>
              </div>
          </section>

          <section className="content-inner bg-gray">
              <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div className="section-head style-1 mb-4">
                            {/* <h6 className="sub-title bgl-primary m-b20 text-primary">Package</h6> */}
                            <h2 className="title">For Business Owners</h2>
                        </div>
                        <h5>Simplify and optimize digital marketing, let businessmen focus only on business.</h5>
                        <p className="m-b30">One-stop platform where you can create and manage your brand online, schedule social media posts, send email campaigns, easily create and maintain your web-presence and for sure also get your shop running.</p>
                        <Link href="/sme-landing-page"><btn className="btn btn-outline-secondary mr-4">Learn More</btn></Link>
                        <Link href="/contact-us"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Start Trial</a></Link>
                    {/* <Link href="/sme-landing-page"><a  className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Learn More</a></Link>  */}
                    </div>
                    <div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                        <div className="dz-media">
                            <img src="images/homepage/businessman.png" alt=""/>
                        </div>
                    </div>
                  </div>
              </div>
          </section>
          
          <section className="content-inner">
              <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div className="dz-media">
                            <img src="images/homepage/enterprise.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                        <div className="section-head style-1 mb-4">
                            {/* <h6 className="sub-title bgl-primary m-b20 text-primary">Package</h6> */}
                            <h2 className="title">For Enterprise</h2>
                        </div>
                        <h5><span class="text-loudspeaker-one">Loudspeaker One</span> is the essence of all our long term service on enterprise clients</h5>
                        <p className="m-b30">We consolidate all of our provided services for last 10 years as enterprise digital marketing solutions provider into one-stop solution. 
                        Let us customize our system for exactly your needs. 
                        Whenever it is about sending out and managing centralized content for several numbers of clients, franchise partners or locations 
                        <span class="text-loudspeaker-one">Loudspeaker One</span> is where to go.</p>
                        <btn className="btn btn-outline-secondary mr-4">Learn More</btn>
                        <Link href="/contact-us"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Start Trial</a></Link>
                    {/* <Link href="/sme-landing-page"><a  className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Learn More</a></Link>  */}
                    </div>
                  </div>
              </div>
          </section>
      </>
    )
  }
  
  export default OurServices;