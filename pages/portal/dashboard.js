import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { BsDownload } from 'react-icons/bs'

import Header from '../../portal/components/header'
import Footer from '../../layout/footer'

const TEMP_PURCHASE_PACKAGE = {
  package_name: {
    en: 'Freelancer',
    de: 'Freelancer'
  },
  modules: [
    {
      id: 1,
      name: {
        en: 'Newsletter',
        de: 'Newsletter'
      }
    },
    {
      id: 2,
      name: {
        en: 'Website',
        de: 'Website'
      }
    }
  ]
}

const TEMP_PAYMENTS = [
  {
    id: 'INV000000001',
    currency: 'EUR',
    total_amount: 299.00,
    created_at: '01 Sept 2022',
    pay_before: '30 Sept 2022',
    paid_at: '',
    invoice_file_url: '<download_link_for_pdf>'
  }
]

const Dashboard = ( props ) => {
  return (
    <>
      <Header />
      <div className="page-content bg-white pt-5">
        <Container style={{ minHeight: '500px' }}>
          <Row>
            <Col md={ 12 }>
              <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3">
                <Tab eventKey="purchasedPackage" title="Purchased package(s)">
                  <ListGroup as="ul">
                    <ListGroup.Item as="li" active>
                      { `${ TEMP_PURCHASE_PACKAGE.package_name[ 'en' ].toUpperCase() }` }
                    </ListGroup.Item>
                    {
                      TEMP_PURCHASE_PACKAGE.modules.map( item => {
                        return (
                          <ListGroup.Item key={ `PurchasedPackage-${ item.id }` } as="li">
                            { `Module: ${ item.name[ 'en' ] }` }
                          </ListGroup.Item>
                        )
                      })
                    }
                  </ListGroup>
                  <p className="mt-3">{ `Start subscribed at: 08 Sep 2022` }</p>
                </Tab>
                <Tab eventKey="payments" title="Payments and invoices">
                  <Button color="primary" className="mb-3">Update payment info</Button>
                  <ListGroup as="ul">
                    {
                      TEMP_PAYMENTS.map( item => {
                        return (
                          <ListGroup.Item key={ `Payments-${ item.id }` } as="li" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '25px' }}>
                            <div>
                              <h4>{ `${ item.currency }${ item.total_amount }` }</h4>
                              <p>{ `Created at: ${ item.created_at }` }</p>
                              <p>{ `Pay before: ${ item.pay_before }` }</p>
                              <p>{ `Paid at: ${ item.paid_at }` }</p>
                            </div>
                            <Button color="primary" style={{ marginLeft: 'auto' }}>
                              <BsDownload fontSize="25px" />
                            </Button>
                          </ListGroup.Item>
                        )
                      })
                    }
                  </ListGroup>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                  <div></div>
                </Tab>
                <Tab eventKey="tickets" title="Tickets">
                  <div></div>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  )
}

export default Dashboard