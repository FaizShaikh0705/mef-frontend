import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Image from "next/image";

const category = () => {
    return (
        <Container fluid>
            <Row className='my-5'>
                <Col style={{ position: 'relative', paddingRight: '1rem', paddingLeft: '1rem' }}>
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
                        />
                    </div>
                </Col>
                <Col style={{ position: 'relative', paddingRight: '1rem', paddingLeft: '1rem' }}>
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
                        />
                    </div>
                </Col>
                <Col style={{ position: 'relative', paddingRight: '1rem', paddingLeft: '1rem' }}>
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
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default category