
import Link from 'next/link';
import { useState } from 'react';

function Header() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState("home");
  return (
    <>
      {/* <!-- Header --> */}
      <header className="site-header header-transparent text-black mo-left" id="fix-header">
        {/* <!-- Main Header --> */}
        <div className="sticky-header main-bar-wraper navbar-expand-lg">
          <div className="main-bar clearfix ">
            <div className="container clearfix extended-header">
              {/* <!-- Website Logo --> */}
              <div className="logo-header mostion logo-dark">
                <Link href="/"><a><img src="images/logo/logo-loudspeaker.png" alt="" /></a></Link>
              </div>
              {/* <!-- Nav Toggle Button --> */}
              <button className={`navbar-toggler collapsed navicon justify-content-end ${show ? "open" : ""}`} onClick={() => setShow(!show)}>
                <span></span>
                <span></span>
                <span></span>
              </button>
              {/* <!-- Extra Nav --> */}
              <div className="extra-nav">
                <div className="extra-cell">
                  <Link href="/contact-us"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Start Trial</a></Link>
                </div>
              </div>
              <div className={`header-nav navbar-collapse collapse justify-content-end ${show ? "show" : ""}`} id="navbarNavDropdown">
                <div className="logo-header">
                  <Link href="/"><a><img src="images/logo/logo-loudspeaker.png" alt="" /></a></Link>
                </div>
                <ul className="nav navbar-nav navbar">
                  {/* <li><Link href="/"><a>Home</a></Link></li> */}
                  {/* <li><Link href="/"><a>Data Protection</a></Link></li> */}

                  <li><Link href="/web-builder"><a>Web Builder<i className="fa fa-chevron-down"></i></a></Link>
                    <ul className="sub-menu">
                      {/* <li><Link href="/web-builder#page-builder"><a>Page Builder</a></Link></li> */}
                      <li><Link href="/web-builder#landing-page-builder"><a>Landing Page Builder</a></Link></li>
                      <li><Link href="/web-builder#section-templates"><a>Section Templates</a></Link></li>
                      <li><Link href="/web-builder#responsive-design-supported"><a>Responsive Design Supported</a></Link></li>
                      {/* <li><Link href="/web-builder#multilingual-supported"><a>Multilingual Supported</a></Link></li> */}
                      {/* <li><Link href="/web-builder#html-coding-supported"><a>HTML Coding Supported</a></Link></li> */}
                      <li><Link href="/web-builder#matomo-analytics"><a>Analytics</a></Link></li>
                      <li><Link href="/web-builder#seo-optimization"><a>SEO Optimization</a></Link></li>
                      <li><Link href="/web-builder#customizable-online-form"><a>Customizable Online Form</a></Link></li>
                      <li><Link href="/web-builder#overlay-for-every-page"><a>Overlay for Every Page</a></Link></li>
                      <li><Link href="/web-builder#data-protection-center"><a>Data Protection Center</a></Link></li>
                    </ul>
                  </li>
                  <li><Link href="/digital-marketing-features"><a>Digital Marketing<i className="fa fa-chevron-down"></i></a></Link>
                    <ul className="sub-menu">
                      <li><Link href="/digital-marketing-features#scheduling-tools"><a>Scheduling Tools</a></Link></li>
                      <li><Link href="/digital-marketing-features#news"><a>News</a></Link></li>
                      <li><Link href="/digital-marketing-features#newsletter"><a>Newsletter</a></Link></li>
                      <li><Link href="/digital-marketing-features#funnel-marketing"><a>Funnel Marketing</a></Link></li>
                      <li><Link href="/digital-marketing-features#online-shop"><a>Online Shop</a></Link></li>
                      <li><Link href="/digital-marketing-features#member-area"><a>Member Area</a></Link></li>
                    </ul>
                  </li>

                  <li><Link href="/general-features"><a>Features<i className="fa fa-chevron-down"></i></a></Link>
                    <ul className="sub-menu">
                      <li><Link href="/general-features#local-listing"><a>Local Listing</a></Link></li>
                      <li><Link href="/general-features#gdpr-center"><a>GDPR Center</a></Link></li>
                      <li><Link href="/general-features#google-jobs-integration"><a>Google Jobs Integration</a></Link></li>
                      <li><Link href="/general-features#customizable-email"><a>Customizable Email</a></Link></li>
                    </ul>
                  </li>
                  <li><Link href="/entreprise-solutions"><a>Enterprise<i className="fa fa-chevron-down"></i></a></Link>
                    <ul className="sub-menu">
                      <li><Link href="/entreprise-solutions#client-management"><a>Client Management</a></Link></li>
                      <li><Link href="/entreprise-solutions#client-content-delivery"><a>Client Content Delivery</a></Link></li>
                      <li><Link href="/entreprise-solutions#client-lead-generation"><a>Client Lead Generation</a></Link></li>
                      <li><Link href="/entreprise-solutions#custom-layout"><a>Custom Layout</a></Link></li>
                      <li><Link href="/entreprise-solutions#custom-feature"><a>Custom Feature</a></Link></li>
                    </ul>
                  </li>
                  <li><Link href="/"><a>Pricing</a></Link></li>
                  {/* <li className={`${open === "about" ? "open" : ""}`}><a  onClick={() => setOpen("about")}><span>Pages</span><i className="fa fa-chevron-down"></i></a>
                                    <ul className="sub-menu">
                                        <li><Link href="/about-us-1"><a>About Us</a></Link></li>
										<li><Link href="/faq-1"><a>Faq</a></Link></li>
                                        <li><Link href="/pricing-table-1"><a>Pricing Table</a></Link></li>
										<li><Link href="/team-1"><a>Team</a></Link></li>
                                        <li><Link href="/coming-soon"><a>Coming Soon</a></Link></li>
                                        <li><Link href="/error-404"><a>Error 404</a></Link></li>
                                        <li><Link href="/sitedown"><a>Site Down</a></Link></li>
                                    </ul>
                                </li>
                                <li className={`${open === "services" ? "open" : ""}`}><a onClick={() => setOpen("services")}><span>Services</span><i className="fa fa-chevron-down"></i></a>
                                    <ul className="sub-menu">
                									
										<li><Link href="/services-1"><a>Services</a></Link></li>
										<li><Link href="/services-details-1"><a>Services Details</a></Link></li>
                                    </ul>
                                </li>
                                <li className={`${open === "blog" ? "open" : ""}`}><a onClick={() => setOpen("blog")}><span>Blog</span><i className="fa fa-chevron-down"></i></a>
                                    <ul className="sub-menu">
                                        <li><Link href="/blog-large-right-sidebar"><a>Large Right Sidebar</a></Link></li>
										<li><Link href="/blog-details-1"><a>Blog Details</a></Link></li>
                                    </ul>
                                </li> */}
                  <li><Link href="/contact-us"><a>Contact</a></Link></li>
                </ul>
                <div className="dlab-social-icon">
                  <ul>
                    <Link href="https://en-gb.facebook.com/"><a className="fa fa-facebook"></a></Link>
                    <Link href="https://twitter.com/login?lang=en"><a className="fa fa-twitter"></a></Link>
                    <Link href="https://www.linkedin.com/login"><a className="fa fa-linkedin"></a></Link>
                    <Link href="https://www.instagram.com/"><a className="fa fa-instagram"></a></Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Main Header End --> */}
      </header>
      {/* <!-- Header End --> */}

    </>
  )
}

export default Header;

