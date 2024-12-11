import React, { useState } from 'react'
import { Container, Row, Tab, Tabs, Col, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import styles from './login.module.scss'

const index = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Container style={{ marginTop: '100px', marginBottom: '100px' }}>
      <Row>
        <Col md={6} className='mx-auto'>
          <Tabs
            defaultActiveKey="login"
            id="fill-tab-example"
            className="mb-3"
            fill
          >
            <Tab eventKey="login" title="Login" style={{ borderLeft: '1px solid #dee2e6', borderBottom: '1px solid #dee2e6', borderRight: '1px solid #dee2e6' }}>
              <Col md={11} className='mx-auto'>
                <Form noValidate validated={validated} onSubmit={handleSubmit} style={{ height: '250px' }} className='py-3 text-center'>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationCustom02">
                      <Form.Control
                        required
                        type="email"
                        placeholder="Email"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid Email.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationCustom03">
                      <Form.Control type="password" placeholder="Password" required />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid Password.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3" style={{ paddingLeft: '0.6rem', paddingRight: '0.6rem' }} >
                    <Button type="submit">SIGN IN</Button>
                  </Row>
                  <Button>Forgot Your Password?</Button>
                </Form>
              </Col>
            </Tab>
            <Tab eventKey="create" title="Create Account" style={{ borderLeft: '1px solid #dee2e6', borderBottom: '1px solid #dee2e6', borderRight: '1px solid #dee2e6' }}>
              <Col md={11} className='mx-auto'>
                <Form noValidate validated={validated} onSubmit={handleSubmit} style={{ height: '250px' }} className='py-3'>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                      <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                      <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationCustom02">
                      <Form.Control
                        required
                        type="email"
                        placeholder="Email"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid Email.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationCustom03">
                      <Form.Control type="password" placeholder="Password" required />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid Password.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3" style={{ paddingLeft: '0.6rem', paddingRight: '0.6rem' }} >
                    <Button type="submit">CREATE AN ACCOUNT</Button>
                  </Row>
                </Form>
              </Col>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  )
}

export default index