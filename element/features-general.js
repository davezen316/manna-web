import Link from 'next/link';

function FeaturesGeneral() {
    return (
      <>  
          <section className="content-inner">
              <div className="container">
                  <div className="row align-items-center">
                      <div id="local-listing" className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                          <div className="dz-media">
                              <img src="images/general-features/local-listing.png" alt=""/>
                          </div>
                      </div>
                      <div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                          <div className="section-head style-1 mb-4">
                              <h2 className="title">Local Listing</h2>
                          </div>
                          <h4>Business address is significantly more valuable than we realise</h4>
                          <p className="m-b30">By registering your business locations with this service, 
                            we can publish your location data to numerous popular internet platforms 
                            such as Google and Yext which increase the visibility of your digital presence.</p>
                          <Link href="/contact-us"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Start Trial</a></Link>
                      </div>

                      <div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                          <div className="section-head style-1 mb-4">
                              <h2 className="title">GDPR Center</h2>
                          </div>
                          <h4>We ensure that our system is fully GDPR compliant.</h4>
                          <p className="m-b30">With our GDPR consulting expertise, 
                            <span class="text-loudspeaker-one">Loudspeaker One</span> is developed fully compliant with GDPR regulations.
                            The system includes all necessary configuration to ensure you are free from mistake.</p>
                          <Link href="/contact-us"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Start Trial</a></Link>
                      </div>
                      <div id="gdpr-center" className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                          <div className="dz-media">
                              <img src="images/general-features/gdpr-center.png" alt=""/>
                          </div>
                      </div>


                      <div id="google-jobs-integration" className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                          <div className="dz-media">
                              <img src="images/general-features/google-jobs-integration.png" alt=""/>
                          </div>
                      </div>
                      <div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                          <div className="section-head style-1 mb-4">
                              <h2 className="title">Google Jobs Integration</h2>
                          </div>
                          <h4>Post the job opening on both your website and Google Jobs in a single click.</h4>
                          <p>The goal is to shorten the time it takes to do anything with <span class="text-loudspeaker-one">Loudspeaker One</span>.
                                We integrated this feature to make it easier for you to advertise the job opening.
                                There is less fuss, but more is accomplished.</p>
                          <Link href="/contact-us"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Start Trial</a></Link>
                      </div>

                      <div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                          <div className="section-head style-1 mb-4">
                              <h2 className="title">Customizable Email</h2>
                          </div>
                          <h4>A well-designed email will make it easier for your leads to understand your content.</h4>
                          <p>And so we've included a very user-friendly email designer to help you design your email 
                            with any possible layout that will help you capture the leads you're looking for.</p>
                          <Link href="/contact-us"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Start Trial</a></Link>
                      </div>
                      <div id="customizable-email" className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                          <div className="dz-media">
                              <img src="images/general-features/customizable-email.png" alt=""/>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
    )
  }
  
  export default FeaturesGeneral;