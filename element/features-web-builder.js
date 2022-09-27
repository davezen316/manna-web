import Link from 'next/link';

function FeaturesWebBuilder() {
    return (
      <>  
          <section className="content-inner">
              <div className="container">
                  <div className="row align-items-center">
                      {/* <div id="page-builder" className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                          <div className="dz-media">
                              <img src="images/homepage/page-builder.png" alt=""/>
                          </div>
                      </div>
                      <div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                          <div className="section-head style-1 mb-4">
                              <h6 className="sub-title bgl-primary m-b20 text-primary">Feature</h6>
                              <h2 className="title">Page Builder</h2>
                          </div>
                          <h4>Building a website has never been so easy.</h4>
                          <p className="m-b30">An intuitive page builder designed for everyone, design and launch your website with least effort needed.</p>
                      </div> */}

                      <div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                          <div className="section-head style-1 mb-4">
                              {/* <h6 className="sub-title bgl-primary m-b20 text-primary">Feature</h6> */}
                              <h2 className="title">Landing Page Builder</h2>
                          </div>
                          <h4>31 to 40 landing pages get seven times more leads than those with one to five landing pages</h4>
                          <p className="m-b30">Improve your marketing capabilities to the fullest; we created this tool to help you lighten your load so you can focus on your business.</p>
                          <Link href="/contact-us"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Start Trial</a></Link>
                          {/* <Link href="/about-us-1"><a  className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Learn More</a></Link>  */}
                      </div>
                      <div id="landing-page-builder" className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                          <div className="dz-media">
                              <img src="images/homepage/landing-page-builder.png" alt=""/>
                          </div>
                      </div>


                      <div id="section-templates" className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                          <div className="dz-media">
                              <img src="images/homepage/section-templates.png" alt=""/>
                          </div>
                      </div>
                      <div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                          <div className="section-head style-1 mb-4">
                              {/* <h6 className="sub-title bgl-primary m-b20 text-primary">Feature</h6> */}
                              <h2 className="title">Section Templates</h2>
                          </div>
                          <h4>Designed sections for construct your website like Lego bricks</h4>
                          <p>We've created handful of templates for you build the website, 
                            as simple as choose and combine few section templates into your webpage and it will be done. </p>
                          <Link href="/contact-us"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Start Trial</a></Link>
                      </div>

                      <div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                          <div className="section-head style-1 mb-4">
                              {/* <h6 className="sub-title bgl-primary m-b20 text-primary">Feature</h6> */}
                              <h2 className="title">Responsive Design Supported</h2>
                          </div>
                          <h4>Mobile devices generated 54.4% of global website traffic </h4>
                          <p>Google drives 96% of mobile search traffic and recommends responsive design as a best practice, 
                            so we have built the builder with responsive design supported for you to stay fit in the search ranking.</p>
                          <Link href="/contact-us"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Start Trial</a></Link>
                      </div>
                      <div  id="responsive-design-supported" className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                          <div className="dz-media">
                              <img src="images/homepage/responsive-design-supported.png" alt=""/>
                          </div>
                      </div>

                      {/* <div id="multilingual-supported" className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                          <div className="dz-media">
                              <img src="images/homepage/multilingual-supported.png" alt=""/>
                          </div>
                      </div>
                      <div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                          <div className="section-head style-1 mb-4">
                              <h6 className="sub-title bgl-primary m-b20 text-primary">Feature</h6>
                              <h2 className="title">Multilingual Supported</h2>
                          </div>
                          <h4>Present your ideas to anyone, in any language</h4>
                          <p>1.35 Billion people speak English, 1.3 Billion people speak Chinese,
                            be it in any language, <span class="text-loudspeaker-one"><span class="text-loudspeaker-one">Loudspeaker One</span></span> avaialbe with multilingual design, allowing your ideas to reach anybody in the world.</p>
                      </div>

                      <div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                          <div className="section-head style-1 mb-4">
                              <h6 className="sub-title bgl-primary m-b20 text-primary">Feature</h6>
                              <h2 className="title">HTML Coding Supported</h2>
                          </div>
                          <h4>Hello, world!</h4>
                          <p>We provide HTML editor for individuals who are competent in programming and want to go the additional mile as well.</p>
                      </div>
                      <div id="html-coding-supported" className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                          <div className="dz-media">
                              <img src="images/homepage/html-coding-supported.png" alt=""/>
                          </div>
                      </div> */}

                      <div id="matomo-analytics" className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                          <div className="dz-media">
                              <img src="images/homepage/matomo-analytics.png" alt=""/>
                          </div>
                      </div>
                      <div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                          <div className="section-head style-1 mb-4">
                              {/* <h6 className="sub-title bgl-primary m-b20 text-primary">Feature</h6> */}
                              <h2 className="title">Analytics</h2>
                          </div>
                          <h4>All your website traffic data is now 100% owned by you</h4>
                          <p>Analyze your website traffic data for a best understanding your visitors. We strictly adhere to data privacy rules. Keeping all traffic data 100% yours.</p>
                          <Link href="/contact-us"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Start Trial</a></Link>
                      </div>

                      <div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                          <div className="section-head style-1 mb-4">
                              {/* <h6 className="sub-title bgl-primary m-b20 text-primary">Feature</h6> */}
                              <h2 className="title">SEO Optimization</h2>
                          </div>
                          <h4>68% of all online activities start with a search engine</h4>
                          <p>With this in mind, our SEO optimiziation is integrated in <span class="text-loudspeaker-one">Loudspeaker One</span>, is on the highest technical standard.</p>
                          <Link href="/contact-us"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Start Trial</a></Link>
                      </div>
                      <div id="seo-optimization" className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                          <div className="dz-media">
                              <img src="images/homepage/seo-optimization.png" alt=""/>
                          </div>
                      </div>

                      <div id="customizable-online-form" className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                          <div className="dz-media">
                              <img src="images/homepage/customizable-online-form.png" alt=""/>
                          </div>
                      </div>
                      <div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                          <div className="section-head style-1 mb-4">
                              {/* <h6 className="sub-title bgl-primary m-b20 text-primary">Feature</h6> */}
                              <h2 className="title">Customizable Online Form</h2>
                          </div>
                          <h4>Mean conversion rate for online forms sits at approximately 21.5%</h4>
                          <p>With the intutive online form designer in <span class="text-loudspeaker-one">Loudspeaker One</span> it is easy to personalise your forms for max efficiency. Happy conversion!</p>
                          <Link href="/contact-us"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Start Trial</a></Link>
                      </div>

                      <div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div className="section-head style-1 mb-4">
                            {/* <h6 className="sub-title bgl-primary m-b20 text-primary">Feature</h6> */}
                            <h2 className="title">Overlay For Every Page</h2>
                        </div>
                        <h4>Average overlay conversion rate is 11.09%</h4>
                        <p>Take advantage of every opportunity, <span class="text-loudspeaker-one">Loudspeaker One</span> allows you to set overlay on each page to convert your visitors into leads based on the page's objective!</p>
                        <Link href="/contact-us"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Start Trial</a></Link>
                      </div>
                      <div id="overlay-for-every-page" className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                        <div className="dz-media">
                            <img src="images/homepage/overlay-for-every-page.png" alt=""/>
                        </div>
                      </div>

                      <div id="data-protection-center" className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                          <div className="dz-media">
                              <img src="images/homepage/customizable-online-form.png" alt=""/>
                          </div>
                      </div>
                      <div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                          <div className="section-head style-1 mb-4">
                              {/* <h6 className="sub-title bgl-primary m-b20 text-primary">Feature</h6> */}
                              <h2 className="title">Data Protection Center</h2>
                          </div>
                          <h4>We are 100% GDPR Compliance!</h4>
                          <p>We prepared the system for all your regional legal needs. 
                            Also it is our philosophie to to prepare you for all future changes in law before they even taking action. What ever comes our system will be ready.</p>
                          
                          <Link href="/contact-us"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Start Trial</a></Link>
                      </div>
                  </div>
              </div>
          </section>
      </>
    )
  }
  
  export default FeaturesWebBuilder;