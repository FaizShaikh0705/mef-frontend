import React from 'react'
import styles from './blog.module.scss'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar } from "react-icons/fa";

const index = () => {
    return (
        <>
            <section className={styles.dlftbnnr}>
                <div className={styles.dlftCtnt}>
                    <h1 style={{ fontWeight: '300' }}>BLOG</h1>
                    <p>Home &gt; Blog</p>
                </div>
            </section>

            <Container className='my-5'>
                <Row>
                    <Col md={4}>
                        <Card style={{ width: '382.2px' }} className='shadow mb-5'>
                            <Card.Img
                                className='p-3'
                                variant="top"
                                src="/images/product1.webp"
                                objectFit='contain'
                                layout='responsive'
                                alt='product'
                            />
                            <Card.Body>
                                <Card.Title>Neroli Perfume</Card.Title>
                                <Card.Text>
                                    Natural & Organic Beauty & Organic Beauty Bloggers Advice..
                                </Card.Text>
                                <Button variant="dark">Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ width: '382.2px' }} className='shadow mb-5'>
                            <Card.Img
                                className='p-3'
                                variant="top"
                                src="/images/product1.webp"
                                objectFit='contain'
                                layout='responsive'
                                alt='product'
                            />
                            <Card.Body>
                                <Card.Title>Neroli Perfume</Card.Title>
                                <Card.Text>
                                    Natural & Organic Beauty & Organic Beauty Bloggers Advice..
                                </Card.Text>
                                <Button variant="dark">Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ width: '382.2px' }} className='shadow mb-5'>
                            <Card.Img
                                className='p-3'
                                variant="top"
                                src="/images/product1.webp"
                                objectFit='contain'
                                layout='responsive'
                                alt='product'
                            />
                            <Card.Body>
                                <Card.Title>Neroli Perfume</Card.Title>
                                <Card.Text>
                                    Natural & Organic Beauty & Organic Beauty Bloggers Advice..
                                </Card.Text>
                                <Button variant="dark">Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ width: '382.2px' }} className='shadow mb-5'>
                            <Card.Img
                                className='p-3'
                                variant="top"
                                src="/images/product1.webp"
                                objectFit='contain'
                                layout='responsive'
                                alt='product'
                            />
                            <Card.Body>
                                <Card.Title>Neroli Perfume</Card.Title>
                                <Card.Text>
                                    Natural & Organic Beauty & Organic Beauty Bloggers Advice..
                                </Card.Text>
                                <Button variant="dark">Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ width: '382.2px' }} className='shadow mb-5'>
                            <Card.Img
                                className='p-3'
                                variant="top"
                                src="/images/product1.webp"
                                objectFit='contain'
                                layout='responsive'
                                alt='product'
                            />
                            <Card.Body>
                                <Card.Title>Neroli Perfume</Card.Title>
                                <Card.Text>
                                    Natural & Organic Beauty & Organic Beauty Bloggers Advice..
                                </Card.Text>
                                <Button variant="dark">Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ width: '382.2px' }} className='shadow mb-5'>
                            <Card.Img
                                className='p-3'
                                variant="top"
                                src="/images/product1.webp"
                                objectFit='contain'
                                layout='responsive'
                                alt='product'
                            />
                            <Card.Body>
                                <Card.Title>Neroli Perfume</Card.Title>
                                <Card.Text>
                                    Natural & Organic Beauty & Organic Beauty Bloggers Advice..
                                </Card.Text>
                                <Button variant="dark">Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default index