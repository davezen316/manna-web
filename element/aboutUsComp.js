import Link from "next/link";

function AboutUsSME() {
    return (
      <>
        {/* <!-- About us --> */}
		<section id="about-us" className="content-inner about-wraper-1" style={{"backgroundImage":"url(images/background/bg15.png)","backgroundSize":"contain","backgroundPosition":"center right","backgroundRepeat":"no-repeat"}}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dz-media left">
							<img src="images/about/pic1.jpg" alt=""/>
						</div>
					</div>
					<div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="section-head style-3">
							<h6 className="sub-title text-primary bgl-primary m-b15">ABOUT US</h6>
							<h2 className="title m-b20">We Are Here to Help You Facilitate Your Digital Marketing Operations</h2>
							<p>
								Über unsere Software Produkte hinaus, bietet Proof Point ein breites Spektrum an Service Dienstleistungen an. 
								Software alleine ist noch nicht der Garant für ein erfolgreiches Online-Marketing. 
								Viel mehr schätzen unsere Kunden die vielfältigen Leistungen die wir für Ihren Erfolg gerne erbringen. 
							</p>
							<p>
								Vor der Planung, vor dem Konzept und lange vor der Umsetzung von Internet-Projekten steht die Beratung. 
								Fragen über technische Möglichkeiten, Hosting, Kosten, Zeitplanung bis hin zur Einhaltung datenschutzrelevanter Vorgaben, müssen geklärt sein. 
								Das ist unser Beratungsansatz. Unsere Speziallisten im Proof Point Team helfen Ihnen bei einer ersten Einschätzung eines neuen Projektes genauso wie bei laufenden Fragen.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
      </>
    )
  }
  
  export default AboutUsSME;