import React from 'react'
import styles from './returns-and-exchanges-policy.module.scss'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image';


const index = () => {
    return (
        <>
            <section className={styles.dlftbnnr}>
                <div className={styles.dlftCtnt}>
                    <h1 style={{ fontWeight: '300' }}>RETURNS AND EXCHANGES POLICY</h1>
                    <p>Home &gt; Returns And Exchanges Policy</p>
                </div>
            </section>
            <section className='my-5'>
                <Container>
                    <p>HOW DO I KNOW IF AN ITEM IS ELIGIBLE FOR RETURN?</p>
                    <p>Our products are not eligible for Return/Exchange</p>
                    <p>WHAT IF I RECEIVE A DAMAGED / DEFECTIVE /WRONG PRODUCT?</p>
                    <p>We Quality Control all our shipping and packaging processes, but in rare circumstances, if you do receive a damaged, defective/wrong product or an incomplete order, simply get in touch with us within 24 hours of receiving your order with pictures at houseofem5.work[at]gmail.com and we will take care of the rest.</p>
                </Container>
            </section>
        </>
    )
}

export default index