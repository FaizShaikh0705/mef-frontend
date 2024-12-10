import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const intro = () => {
    return (
        <Container className='my-5'>
            <Row className='text-center my-5'>
                <Col>
                    <h1>MKM Parfum - A Symphony of Fragrance</h1>
                    <p style={{ fontFamily: "monospace" , marginTop:'2rem'}}>
                        Indulge in the enchanting world of perfumes with House of EM5, the best perfume brand in India. Whether you seek a captivating perfume for men or a mesmerizing fragrance for women, our curated collection has something for everyone. Experience the allure of our perfume sprays, solid perfumes, body mists, scented candles, roll-ons, reed diffusers, perfumed crème, and beard balms. Buy perfume online and immerse yourself in a sensory journey that reflects your unique style and personality. Elevate every moment with the magic of House of EM5!
                    </p>
                 </Col>
            </Row>
        </Container>
    )
}

export default intro