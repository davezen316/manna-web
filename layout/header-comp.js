
import Link from 'next/link';
import { useState } from 'react';

function HeaderComp() {
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
                           <Link href="/"><a><img src="images/pp-logo.jpeg" alt=""/></a></Link>
                        </div>
                        {/* <!-- Nav Toggle Button --> */}
                        <button className={`navbar-toggler collapsed navicon justify-content-end ${show ? "open" : ""}`} onClick={() => setShow(!show)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        {/* <!-- Extra Nav --> */}
                        {/* <div className="extra-nav">
                            <div className="extra-cell">
                                <Link href="/contact-us"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Get A Demo</a></Link>
                            </div>
                        </div> */}
                        <div className={`header-nav navbar-collapse collapse justify-content-end ${show ? "show" : ""}`} id="navbarNavDropdown">
                            <div className="logo-header">
                                <Link href="/"><a><img src="images/pp-logo.jpeg" alt=""/></a></Link>
                            </div>
                            <ul className="nav navbar-nav navbar">	
                                <li><Link href="/company"><a>Home</a></Link></li>
                                {/* <li><Link href="/"><a>Data Protection</a></Link></li> */}
                            </ul>
                            <ul className="nav navbar-nav navbar">	
                                <li><Link href="/company#about-us"><a>About Us</a></Link></li>
                                {/* <li><Link href="/"><a>Data Protection</a></Link></li> */}
                            </ul>
                            <ul className="nav navbar-nav navbar">	
                                <li><Link href="/company#services"><a>Services</a></Link></li>
                                {/* <li><Link href="/"><a>Data Protection</a></Link></li> */}
                            </ul>
                            <ul className="nav navbar-nav navbar">	
                                <li><Link href="/company#team"><a>Team</a></Link></li>
                                {/* <li><Link href="/"><a>Data Protection</a></Link></li> */}
                            </ul>
                            <ul className="nav navbar-nav navbar">	
                                <li><Link href="/company#testimonial"><a>Our Client Says</a></Link></li>
                                {/* <li><Link href="/"><a>Data Protection</a></Link></li> */}
                            </ul>
                            <ul className="nav navbar-nav navbar">	
                                <li><Link href="/company#contact-us"><a>Contact Us</a></Link></li>
                                {/* <li><Link href="/"><a>Data Protection</a></Link></li> */}
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
  
  export default HeaderComp;

  