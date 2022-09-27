import Link from "next/link";
import Quote from "../element/quote";
import Team from "../element/team";
import Footer from "../layout/footer";
import Header from "../layout/header";


function ContactUs() {
  return (
    <>
	<Header/>
      <div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		{/* <div className="dlab-bnr-inr overlay-primary-dark" style={{"backgroundImage":"url(images/banner/bnr1.jpg)"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>Contact Us</h1>
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">Contact Us</li>
						</ul>
					</nav>
				</div>
			</div>
		</div> */}
		{/* <!-- Banner End --> */}
		<br />
		<Team />
		
		{/* <!-- Get A Quote --> */}
		<Quote/>
	</div>
	<Footer/>
    </>
  )
}

export default ContactUs;