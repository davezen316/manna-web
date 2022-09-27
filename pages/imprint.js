import Footer from '../layout/footer';
import Header from '../layout/header';
import { useState } from 'react';
import Link from 'next/link';


function Imprint() {
	const [isOpen, setOpen] = useState(false)
  return (
    <>
    <Header/>
    <div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		{/* <div className="dlab-bnr-inr overlay-primary-dark" style={{"backgroundImage":"url(images/homepage/web-builder.jpg)"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>Imprint</h1>
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">Imprint</li>
						</ul>
					</nav>
				</div>
			</div>
		</div> */}
		{/* <!-- Banner End --> */}
		
		{/* <!-- Services Details --> */}
		<section className="content-inner-2" style={{"backgroundImage":"url(images/background/bg1.png)"}}>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="dlab-content">
							<div className="m-b40">
								<h1>Impressum</h1>
								<h2>Angaben gem&auml;&szlig; &sect; 5 TMG:</h2>
								<p><strong>Proof Point development GmbH</strong> <br />Heilig-Geist-Gasse 398 <br />D-84028 Landshut <br />Telefon: +49 (871)&nbsp;93 52 50 <br />E-Mail: <a href="mailto:development@proof-point.com%20">development@proof-point.com </a></p>
								<p>Vertretungsberechtigte Gesch&auml;ftsf&uuml;hrer: <br />Stephan Winkler</p>
								<p>Registereintrag<br />Eintragung im Handelsregister B <br />Registergericht: Amtsgericht Landshut <br />Registernummer: HRB-Nr.: HRB 11427</p>
								<p>Umsatzsteuer-Identifikationsnummer: DE321026340</p>
								<p><strong>PROOF POINT SDN.BHD.</strong><br />16.06 Level 16, 1 Powerhouse,<br />No 1 Persiaran Bandar Utama,<br />Bandar Utama,<br />MY-47800 Petaling Jaya, Selangor, Malaysia</p>
								<p>Company ID: 1264094-U</p>
								<p>Managing Directors<br />Stephan Winkler, Tobias Bergmann</p>
								<p><strong>PROOF POINT Werbestudio<br /></strong>Stephan Winkler (Einzelunternehmen)<br />Heilig-Geist-Gasse 398<br />84028 Landshut<br />Telefon: +49 (871) 93 52 50<br />E-Mail: info@proof-point.com</p>
								<p>Vertretungsberechtigter: Stephan Winkler<br />Umsatzsteuer-Identifikationsnummer:&nbsp;DE204228028</p>
								<h2>Verantwortlich f&uuml;r den Inhalt nach &sect; 55 Abs. 2 RStV:</h2>
								<p>Stephan Winkler</p>
								<h2>Streitschlichtung</h2>
								<p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
								<h3>Haftung f&uuml;r Inhalte</h3>
								<p>Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs.1 TMG f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte oder gespeicherte fremde Informationen zu &uuml;berwachen oder nach Umst&auml;nden zu forschen, die auf eine rechtswidrige T&auml;tigkeit hinweisen.</p>
								<p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung m&ouml;glich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
								<h3>Haftung f&uuml;r Links</h3>
								<p>Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr &uuml;bernehmen. F&uuml;r die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf m&ouml;gliche Rechtsverst&ouml;&szlig;e &uuml;berpr&uuml;ft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
								<p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
								<h3>Urheberrecht</h3>
								<p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f&uuml;r den privaten, nicht kommerziellen Gebrauch gestattet.</p>
								<p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
								<h1>Site Notice</h1>
								<h2>Information provided according to Sec. 5 German Telemedia Act (TMG):</h2>
								<p>&nbsp;</p>

								<p><strong>Proof Point development GmbH</strong> <br />Heilig-Geist-Gasse 398 <br />D-84028 Landshut <br />Telefon: +49 (871)&nbsp;93 52 50 <br />E-Mail: <a href="mailto:development@proof-point.com%20">development@proof-point.com </a></p>
								<p>Vertretungsberechtigte Gesch&auml;ftsf&uuml;hrer: <br />Stephan Winkler</p>
								<p>Registereintrag<br />Eintragung im Handelsregister B <br />Registergericht: Amtsgericht Landshut <br />Registernummer: HRB-Nr.: HRB 11427</p>
								<p>Umsatzsteuer-Identifikationsnummer: DE321026340</p>
								<p><strong>PROOF POINT Werbestudio<br /></strong>Stephan Winkler (Einzelunternehmen)<br />Heilig-Geist-Gasse 398<br />84028 Landshut - Germany<br />Telephone: +49 (871) 93 52 50<br />E-Mail: info@proof-point.com</p>
								<p>Represented by: Stephan Winkler<br />VAT Id number according to Sec. 27 a German Value Added Tax Act: DE204228028</p>
								<p><strong>PROOF POINT SDN.BHD.</strong><br />Lot 1.03-A, Level 1, No. 8 First Avenue<br />Persiaran Bandar Utama<br />MY-47800 Petaling Jaya,Selangor, Malaysia</p>
								<p>Company ID: 1264094-U</p>
								<p>Represented by Managing Directors: Stephan Winkler, Tobias Bergmann</p>
								<p>&nbsp;</p>
								<p>&nbsp;</p>
								<h2>Responsible for contents acc. to Sec. 55, para. 2 German Federal Broadcasting Agreement (RstV):</h2>
								<p>Stephan Winkler</p>
								<h2>Dispute resolution</h2>
								<p>We do not take part in online dispute resolutions at consumer arbitration boards.</p>
								<h3>Liability for Contents</h3>
								<p>As service providers, we are liable for own contents of these websites according to Sec. 7, paragraph 1 German Telemedia Act (TMG). However, according to Sec. 8 to 10 German Telemedia Act (TMG), service providers are not obligated to permanently monitor submitted or stored information or to search for evidences that indicate illegal activities.</p>
								<p>Legal obligations to removing information or to blocking the use of information remain unchallenged. In this case, liability is only possible at the time of knowledge about a specific violation of law. Illegal contents will be removed immediately at the time we get knowledge of them.</p>
								<h3>Liability for Links</h3>
								<p>Our offer includes links to external third party websites. We have no influence on the contents of those websites, therefore we cannot guarantee for those contents. Providers or administrators of linked websites are always responsible for their own contents.</p>
								<p>The linked websites had been checked for possible violations of law at the time of the establishment of the link. Illegal contents were not detected at the time of the linking. A permanent monitoring of the contents of linked websites cannot be imposed without reasonable indications that there has been a violation of law. Illegal links will be removed immediately at the time we get knowledge of them.</p>
								<h3>Copyright</h3>
								<p>Contents and compilations published on these websites by the providers are subject to German copyright laws. Reproduction, editing, distribution as well as the use of any kind outside the scope of the copyright law require a written permission of the author or originator. Downloads and copies of these websites are permitted for private use only.<br /> The commercial use of our contents without permission of the originator is prohibited.</p>
								<p>Copyright laws of third parties are respected as long as the contents on these websites do not originate from the provider. Contributions of third parties on this site are indicated as such. However, if you notice any violations of copyright law, please inform us. Such contents will be removed immediately.</p>
								<br/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		
	</div>
     <Footer/>
    </>
  )
}

export default Imprint;