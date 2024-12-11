import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Image from 'next/image';
import styles from './cart.module.scss'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { ImCross } from "react-icons/im";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const index = () => {
  return (
    <>
      <section className={styles.dlftbnnr}>
        <div className={styles.dlftCtnt}>
          <h1 style={{ fontWeight: '300' }}>SHOP CART</h1>
          <p>Home &gt; Shop Cart</p>
        </div>
      </section>
      <section>
        <Container className='my-5'>
          <Row>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope='col'>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <div className='d-flex'>
                      <div className='my-auto me-4'>
                        <ImCross />
                      </div>
                      <div>
                        <Image
                          src="/images/category1.jpg"
                          width={100}
                          height={100}
                          alt='category'
                        />
                      </div>
                    </div>
                  </th>
                  <td className='align-middle'>
                    Body Oil & Lotion
                  </td>
                  <td className='align-middle'>$15.00</td>
                  <td className='align-middle'>
                    <div className='d-flex'>
                      <Button ><FaMinus /></Button>
                      <Button >2</Button>
                      <Button ><FaPlus /></Button>
                    </div>
                  </td>
                  <td className='align-middle'>	$60.00</td>
                </tr>
              </tbody>
            </table>

            <Col md={6} className='my-5'>
              <Form className="d-flex">
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="couponCodeInp">
                    <Form.Control
                      type="text"
                      placeholder="Coupon Code"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Button
                    className="ms-3">
                    Apply Coupon
                  </Button>
                </Col>
              </Form>
            </Col>
            <Col className='offset-md-2 col-md-4 text-end my-5'>
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
              <Button href='/checkout' style={{ width: '100%' }}>PROCEED TO CHECKOUT</Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default index