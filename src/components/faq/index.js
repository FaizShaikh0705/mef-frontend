import React from 'react'
import Accordion from "react-bootstrap/Accordion";
import { Container, Row, Col, Form, Tabs, Tab, Modal } from "react-bootstrap";


const index = () => {
    return (
        <>
            <Container style={{marginTop:"90px",marginBottom:"30px"}}>
                <Row>
                    <Col lg={12}>
                        <div className="text-center">
                            <h2>FAQ</h2>
                        </div>
                        <div className="mt-4">
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>What types of perfumes do you offer?</Accordion.Header>
                                    <Accordion.Body>
                                        We offer a wide range of perfumes, including niche, designer, and luxury fragrances for men and women.                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>How do I choose the right perfume for me?</Accordion.Header>
                                    <Accordion.Body>
                                        Consider your personal preferences, skin type, and the occasion. You can also read reviews, check fragrance notes, and explore our perfume finder tool.                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header> Are your perfumes authentic?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes, all our perfumes are 100% authentic and sourced directly from authorized distributors or manufacturers.                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>How do I store my perfume?</Accordion.Header>
                                    <Accordion.Body>
                                        Store perfumes in a cool, dry place away from direct sunlight and heat sources.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>Can I return or exchange a perfume?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes, we offer returns and exchanges within a specified timeframe. Please see our return policy for details.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>How long does shipping take?</Accordion.Header>
                                    <Accordion.Body>
                                        Shipping times vary depending on location, but we typically ship within xxxxxx and provide tracking information.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="7">
                                    <Accordion.Header>Do you offer gift wrapping?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes, we offer gift wrapping options for select perfumes.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="8">
                                    <Accordion.Header>How can I track my order?</Accordion.Header>
                                    <Accordion.Body>
                                        You can track your order using the tracking information provided in your confirmation email.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default index
