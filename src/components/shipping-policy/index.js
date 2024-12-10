import React from 'react'
import styles from './shipping-policy.module.scss'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image';


const index = () => {
  return (
    <>
      <section className={styles.dlftbnnr}>
        <div className={styles.dlftCtnt}>
          <h1 style={{ fontWeight: '300' }}>SHIPPING POLICY</h1>
          <p>Home &gt; Shipping Policy</p>
        </div>
      </section>
      <section className='my-5'>
        <Container>
          <p>IS THERE AN ADDITIONAL SHIPPING CHARGE?</p>
          <p>As an introductory offer, we aren’t taking any shipping charges.</p>
          <p>HOW LONG WILL IT TAKE FOR MY ORDER TO REACH ME?</p>
          <p>We dispatch the order within 1 working day, and it takes 3 to 5 working days for the order to reach you based on your location anywhere in India.

            You will receive the tracking details on your E-Mail as soon as you the product is dispatched.</p>
        </Container>
      </section>
    </>
  )
}

export default index