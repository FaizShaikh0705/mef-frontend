import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Image from 'next/image';
import styles from './contant.module.scss'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


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
    <>
      <section className={styles.dlftbnnr}>
        <div className={styles.dlftCtnt}>
          <h1 style={{ fontWeight: '300' }}>CONTACT US</h1>
          <p>Home &gt; Contact Us</p>
        </div>
      </section>

      <section>
        <Container>
          <Row className='text-center'>
            <h2 style={{ fontWeight: '400' }}>GET IN TOUCH WITH US</h2>
            <p>For all enquiries, please email us using the form below.</p>

            <Col md={6} className='mx-auto my-5'>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
                  <Form.Group as={Col} md="12" controlId="validationCustom03">
                    <Form.Control type="number" placeholder="Phone Number" required />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid Phone Number.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="12">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Control as="textarea" rows={3}  placeholder="Message"/>
                    </Form.Group>
                  </Form.Group>
                </Row>
                <Button type="submit">Submit form</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default index