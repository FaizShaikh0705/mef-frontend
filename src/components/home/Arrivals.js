import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar } from "react-icons/fa";
import dynamic from 'next/dynamic';



const Arrivals = () => {
    const Arrivals = dynamic(() => import('./Arrivals'), { ssr: false });
    return (
        <>
            <Container className='text-center my-5'>
                <h2>New Arrivals</h2>
                <Row className='g-4 justify-content-center'>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <Card style={{ width: '100%', border: 'none' }}>
                            <Card.Img
                                variant="top"
                                src="/images/product1.webp"
                                objectFit='contain'
                                layout='responsive'
                                alt='product'
                            />
                            <Card.Body>
                                <Card.Title>Neroli Perfume</Card.Title>
                                <div>
                                    <Row>
                                        <Col md={6}>
                                            <span style={{ color: "#f2b309" }}>
                                                <FaStar className="me-2" /><FaStar className="me-2" /><FaStar className="me-2" /><FaStar className="me-2" /> (11)
                                            </span>
                                        </Col>
                                        <Col md={6}>
                                            <div style={{ color: "#ff575b" }}>Verified Purchase</div>
                                        </Col>
                                        <Col md={7}>
                                            <div style={{ color: "#ff575b" }}>Rs. 599.00 - 1,999.00</div>
                                        </Col>
                                        <Col>
                                            <div style={{ textDecoration: 'line-through' }}>Rs. 799.00</div>
                                        </Col>
                                    </Row>
                                </div>
                                <Button variant="dark">Select Options</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <Card style={{ width: '100%', border: 'none' }}>
                            <Card.Img
                                variant="top"
                                src="/images/product1.webp"
                                objectFit='contain'
                                layout='responsive'
                                alt='product'
                            />
                            <Card.Body>
                                <Card.Title>Neroli Perfume</Card.Title>
                                <div>
                                    <Row>
                                        <Col md={6}>
                                            <span style={{ color: "#f2b309" }}>
                                                <FaStar className="me-2" /><FaStar className="me-2" /><FaStar className="me-2" /><FaStar className="me-2" /> (11)
                                            </span>
                                        </Col>
                                        <Col md={6}>
                                            <div style={{ color: "#ff575b" }}>Verified Purchase</div>
                                        </Col>
                                        <Col md={7}>
                                            <div style={{ color: "#ff575b" }}>Rs. 599.00 - 1,999.00</div>
                                        </Col>
                                        <Col>
                                            <div style={{ textDecoration: 'line-through' }}>Rs. 799.00</div>
                                        </Col>
                                    </Row>
                                </div>
                                <Button variant="dark">Select Options</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <Card style={{ width: '100%', border: 'none' }}>
                            <Card.Img
                                variant="top"
                                src="/images/product1.webp"
                                objectFit='contain'
                                layout='responsive'
                                alt='product'
                            />
                            <Card.Body>
                                <Card.Title>Neroli Perfume</Card.Title>
                                <div>
                                    <Row>
                                        <Col md={6}>
                                            <span style={{ color: "#f2b309" }}>
                                                <FaStar className="me-2" /><FaStar className="me-2" /><FaStar className="me-2" /><FaStar className="me-2" /> (11)
                                            </span>
                                        </Col>
                                        <Col md={6}>
                                            <div style={{ color: "#ff575b" }}>Verified Purchase</div>
                                        </Col>
                                        <Col md={7}>
                                            <div style={{ color: "#ff575b" }}>Rs. 599.00 - 1,999.00</div>
                                        </Col>
                                        <Col>
                                            <div style={{ textDecoration: 'line-through' }}>Rs. 799.00</div>
                                        </Col>
                                    </Row>
                                </div>
                                <Button variant="dark">Select Options</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <Card style={{ width: '100%', border: 'none' }}>
                            <Card.Img
                                variant="top"
                                src="/images/product1.webp"
                                objectFit='contain'
                                layout='responsive'
                                alt='product'
                            />
                            <Card.Body>
                                <Card.Title>Neroli Perfume</Card.Title>
                                <div>
                                    <Row>
                                        <Col md={6}>
                                            <span style={{ color: "#f2b309" }}>
                                                <FaStar className="me-2" /><FaStar className="me-2" /><FaStar className="me-2" /><FaStar className="me-2" /> (11)
                                            </span>
                                        </Col>
                                        <Col md={6}>
                                            <div style={{ color: "#ff575b" }}>Verified Purchase</div>
                                        </Col>
                                        <Col md={7}>
                                            <div style={{ color: "#ff575b" }}>Rs. 599.00 - 1,999.00</div>
                                        </Col>
                                        <Col>
                                            <div style={{ textDecoration: 'line-through' }}>Rs. 799.00</div>
                                        </Col>
                                    </Row>
                                </div>
                                <Button variant="dark">Select Options</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Arrivals