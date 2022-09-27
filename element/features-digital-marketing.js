import Link from 'next/link';

function FeaturesDigitalMarketing() {
    return (
      <>  
          <section className="content-inner">
              <div className="container">
                  <div className="row align-items-center">
                      <div id="scheduling-tools" className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                          <div className="dz-media">
                              <img src="images/digital-marketing/scheduling-tools.png" alt=""/>
                          </div>
                      </div>
                      <div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                          <div className="section-head style-1 mb-4">
                              <h2 className="title">Scheduling Tools</h2>
                          </div>
                          <h4>Always keep your digital marketing on time</h4>
                          <p className="m-b30">Schedule your digital marketing activities, such as email campaigns and social media posts, using the built-in scheduler in each of our tools. Allow activities to be done on time.</p>
                          <Link href="/contact-us"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Start Trial</a></Link>
                      </div>

                      <div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                          <div className="section-head style-1 mb-4">
                              <h2 className="title">News</h2>
                          </div>
                          <h4>Publish your news to multiple channels with a single click</h4>
                          <p className="m-b30">Publish your announcements or stories to all of the platforms you use to build your digital presence with a single click. 
                            Switch between different channel to publish your marketing content is now a past. Life could be a lot easier.</p>
                          <Link href="/contact-us"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Start Trial</a></Link>
                      </div>
                      <div id="news" className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                          <div className="dz-media">
                              <img src="images/digital-marketing/news.png" alt=""/>
                          </div>
                      </div>


                      <div id="newsletter" className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                          <div className="dz-media">
                              <img src="images/digital-marketing/newsletter.png" alt=""/>
                          </div>
                      </div>
                      <div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                          <div className="section-head style-1 mb-4">
                              <h2 className="title">Newsletter</h2>
                          </div>
                          <h4>73% of millennials prefer email communications from businesses</h4>
                          <p>Deliver on-time content, add value to the customer, create an easy communication channel, and build rapport with your clients with personalized content.</p>
                          <Link href="/contact-us"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Start Trial</a></Link>
                      </div>

                      <div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                          <div className="section-head style-1 mb-4">
                              <h2 className="title">Funnel Marketing</h2>
                          </div>
                          <h4>Convert every lead into your paying customer</h4>
                          <p>Funnel visitors into your sales process and eventually make the sale by nurturing them through the buying process. We created the intuition feature to help you automate the complex marketing funnel.</p>
                          <Link href="/contact-us"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Start Trial</a></Link>
                      </div>
                      <div id="funnel-marketing" className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                          <div className="dz-media">
                              <img src="images/digital-marketing/funnel-marketing.png" alt=""/>
                          </div>
                      </div>

                      <div id="online-shop" className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                          <div className="dz-media">
                              <img src="images/digital-marketing/online-shop.png" alt=""/>
                          </div>
                      </div>
                      <div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                          <div className="section-head style-1 mb-4">
                              <h2 className="title">Online Shop</h2>
                          </div>
                          <h4>Display your products and services in the shortest amount of time possible</h4>
                          <p>We have set up a store for you to list all of your services and products with as little effort as possible so that you can start earning money as soon as possible.
                                And we will grow with you on your business journey at no cost in the beginning.!</p>
                          <Link href="/contact-us"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Start Trial</a></Link>
                      </div>

                      <div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                          <div className="section-head style-1 mb-4">
                              <h2 className="title">Member Area</h2>
                          </div>
                          <h4>Probability of selling to an existing customer is between 60% and 70%</h4>
                          <p>A loyal customer is your most ardent supporter, and keeping them provides far more benefits than we can imagine. 
                                So we developed this for you to provide exclusive services, content, 
                                and more value to your customers as a way of expressing your gratitude for their support.</p>
                          <Link href="/contact-us"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Start Trial</a></Link>
                      </div>
                      <div id="member-area" className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                          <div className="dz-media">
                              <img src="images/digital-marketing/member-area.png" alt=""/>
                          </div>
                      </div>

                  </div>
              </div>
          </section>
      </>
    )
  }
  
  export default FeaturesDigitalMarketing;