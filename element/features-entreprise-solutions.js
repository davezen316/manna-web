import Link from 'next/link';

function FeaturesEntrepriseSolutions() {
    return (
      <>  
          <section className="content-inner">
              <div className="container">
                  <div className="row align-items-center">
                      <div id="client-management" className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                          <div className="dz-media">
                              <img src="images/enterprise-solutions/client-management.png" alt=""/>
                          </div>
                      </div>
                      <div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                          <div className="section-head style-1 mb-4">
                              <h2 className="title">Client Management</h2>
                          </div>
                          <h4>Host and manage all of your clients' <span class="text-loudspeaker-one">Loudspeaker One</span> from a single platform</h4>
                          <p className="m-b30"><span class="text-loudspeaker-one">Loudspeaker One</span> allows you to become one of our hosts, 
                          which includes the ability to host websites for your clients 
                          and obtain master control over all of the websites you create with a variety of cooperative functions.</p>
                          <Link href="/contact-us"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Start Trial</a></Link>
                      </div>

                      <div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                          <div className="section-head style-1 mb-4">
                              <h2 className="title">Client Content Delivery</h2>
                          </div>
                          <h4>Deliver your specialised make content to all of your clients immediately</h4>
                          <p className="m-b30">
                            Never stop providing value to your clients and assisting them in growing so that everyone will grows together.
                            <span class="text-loudspeaker-one">Loudspeaker One</span> makes it simple for you to create marketing content and distribute it to all of your clients.
                          </p>
                          <Link href="/contact-us"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Start Trial</a></Link>
                      </div>
                      <div id="client-content-delivery" className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                          <div className="dz-media">
                              <img src="images/enterprise-solutions/client-content-delivery.png" alt=""/>
                          </div>
                      </div>


                      <div id="client-lead-generation" className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                          <div className="dz-media">
                              <img src="images/enterprise-solutions/client-lead-generation.png" alt=""/>
                          </div>
                      </div>
                      <div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                          <div className="section-head style-1 mb-4">
                              <h2 className="title">Client Lead Generation</h2>
                          </div>
                          <h4>Create a digital marketing campaign and get everyone to participate with a single click</h4>
                          <p className="m-b30">Professionally designed marketing campaign can now be instantly communicated to all of your clients with a single click.
                            Thoughtfully designed to overcome all of the challenges in sharing your ideas to a large number of clients.</p>
                          <Link href="/contact-us"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Start Trial</a></Link>
                      </div>

                      <div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                          <div className="section-head style-1 mb-4">
                              <h2 className="title">Custom Layout</h2>
                          </div>
                          <h4>We are ready to customize the layout you desire</h4>
                          <p className="m-b30">We understand that different businesses will have different layout requirements for their convenience, 
                          so we are always willing to listen to your needs and make the necessary changes to help you succeed in business.</p>
                          <Link href="/contact-us"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Start Trial</a></Link>
                      </div>
                      <div id="custom-layout" className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                          <div className="dz-media">
                              <img src="images/enterprise-solutions/custom-layout.png" alt=""/>
                          </div>
                      </div>

                      <div id="custom-feature" className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                          <div className="dz-media">
                              <img src="images/about/img4.png" alt=""/>
                          </div>
                      </div>
                      <div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                          <div className="section-head style-1 mb-4">
                              <h2 className="title">Custom Feature</h2>
                          </div>
                          <h4>Any idea can be realised with us</h4>
                          <p className="m-b30">Customer's achievement is our first priority. 
                          If you have any suggestions for improving the efficiency and effectiveness of your business, 
                          we are always available to discuss with you about making your unique idea a reality.</p>
                          <Link href="/contact-us"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Start Trial</a></Link>
                      </div>

                  </div>
              </div>
          </section>
      </>
    )
  }
  
  export default FeaturesEntrepriseSolutions;