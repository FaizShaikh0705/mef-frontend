import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Image from 'next/image';
import styles from './checkout.module.scss'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { ImCross } from "react-icons/im";

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
          <h1 style={{ fontWeight: '300' }}>SHOP CHECKOUT</h1>
          <p>Home &gt; Shop Checkout</p>
        </div>
      </section>

      <Container className='my-5'>
        <Row>
          <Col md={8}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-4">
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
              <Row className="mb-4">
                <Form.Group as={Col} md="12" controlId="validationCustom03">
                  <Form.Control type="text" placeholder="Company Name" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-4">
                <Form.Group as={Col} md="12" controlId="validationCustom03">
                  <Form.Control type="text" placeholder="Country Name" required />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-4">
                <Form.Group as={Col} md="12" controlId="validationCustom03">
                  <Form.Control type="text" placeholder="Town/City" required />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-4">
                <Form.Group as={Col} md="12" controlId="validationCustom03">
                  <Form.Control type="text" placeholder="House number and street name" required />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-4">
                <Form.Group as={Col} md="12" controlId="validationCustom03">
                  <Form.Control type="text" placeholder="Apartment, suite, unit, etc. (optional)" />
                </Form.Group>
              </Row>
              <Row className="mb-4">
                <Form.Group as={Col} md="12" controlId="validationCustom03">
                  <Form.Control type="text" placeholder="State Name" required />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-4">
                <Form.Group as={Col} md="12" controlId="validationCustom03">
                  <Form.Control type="number" placeholder="PIN Code" required />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-4">
                <Form.Group as={Col} md="12" controlId="validationCustom03">
                  <Form.Control type="number" placeholder="Phone Number" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Phone Number.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-4">
                <Form.Group as={Col} md="12" controlId="validationCustom03">
                  <Form.Control type="email" placeholder="Email Address" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Email.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
            </Form>
          </Col>
          <Col md={4}>
            <table className="table">
              <tbody>
                <tr>
                  <th scope="row">
                    <div>
                      <Image
                        src="/images/category1.jpg"
                        width={100}
                        height={100}
                        alt='category'
                      />
                    </div>
                  </th>
                  <td className='align-middle'>
                    Body Oil & Lotion
                    <p className='mb-0' style={{ fontSize: '14px' }}>$15.00 x 1</p>
                  </td>
                  <td className='align-middle'>
                    <div className='d-flex'>
                      <div>
                        <p className='mb-0'>$60.00</p>
                      </div>
                      <div className='my-auto ms-4'>
                        <ImCross />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className='text-start'>
              <p style={{ fontSize: '24px' }}>Cart Totals</p>
            </div>
            <div className='d-flex justify-content-between mb-3'>
              <div>Subtotal</div>
              <div>$60.00</div>
            </div>
            <div className='d-flex justify-content-between mb-3'>
              <div>Total</div>
              <div>$60.00</div>
            </div>

            <Button href='/checkout' style={{ width: '100%' }}>PLACE ORDER</Button>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default index