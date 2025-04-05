import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import styles from './home.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import Button from 'react-bootstrap/Button';

const ingredient = () => {
    return (
        <Container fluid>
            <Row className='my-5'>
                <Col xs={12} md={4} className={styles.ctgrybox}>
                    <div style={{ border: '1px solid #000', zIndex: '1' }}>
                        <div style={{ position: 'absolute', bottom: '1rem', left: '3rem' }}>
                            <h2 style={{ fontFamily: 'Quentin, sans-serif' }}>Fresh</h2>
                            <p>For Summer</p>
                        </div>
                        <Image
                            style={{ position: 'relative', left: '0.5rem', top: '0.5rem', zIndex: '-1' }}
                            src="/images/category1.jpg"
                            width={250}
                            height={250}
                            objectFit='contain'
                            layout='responsive'
                            alt='category'
                            unoptimized
                        />
                    </div>
                </Col>
                <Col xs={12} md={4} className={styles.ctgrybox}>
                    <div style={{ border: '1px solid #000', zIndex: '1' }}>
                        <div style={{ position: 'absolute', bottom: '1rem', left: '3rem' }}>
                            <h2 style={{ fontFamily: 'Quentin, sans-serif' }}>Woody</h2>
                            <p>For Winter</p>
                        </div>
                        <Image
                            style={{ position: 'relative', left: '0.5rem', top: '0.5rem', zIndex: '-1' }}
                            src="/images/category2.jpg"
                            width={250}
                            height={250}
                            objectFit='contain'
                            layout='responsive'
                            alt='category'
                            unoptimized
                        />
                    </div>
                </Col>
                <Col xs={12} md={4} className={styles.ctgrybox}>
                    <div style={{ border: '1px solid #000', zIndex: '1' }}>
                        <div style={{ position: 'absolute', bottom: '1rem', left: '3rem' }}>
                            <h2 style={{ fontFamily: 'Quentin, sans-serif' }}>Floral</h2>
                            <p>For All Season</p>
                        </div>
                        <Image
                            style={{ position: 'relative', left: '0.5rem', top: '0.5rem', zIndex: '-1' }}
                            src="/images/category3.jpg"
                            width={250}
                            height={250}
                            objectFit='contain'
                            layout='responsive'
                            alt='category'
                            unoptimized
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ingredient