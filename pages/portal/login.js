import Link from 'next/link';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import Footer from "../../layout/footer";
import Header from "../../layout/header";

const Login  = () => {
  return (
    <>
      <Header />
      <div className="page-content bg-white" id="top">
        {/* <!-- Banner  --> */}
        <div className="dlab-bnr-inr overlay-primary-dark" style={{"backgroundImage":"url(images/banner/bnr1.jpg)"}}>
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Login into portal</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Login into portal</li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}
        <section className="content-inner">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button variant="primary" type="submit" className="mr-3">
                  Submit
                </Button>
                <Button variant="link">
                  Forgot password?
                </Button>
              </Form>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Login