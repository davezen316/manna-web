import Link from 'next/link';

function AboutUsComp() {
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
                              <h2 className="title">How <span class="text-loudspeaker-one">Proof Point</span> Can Help You Achieve Your Business Goal</h2>
                          </div>
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
  
  export default AboutUsComp;