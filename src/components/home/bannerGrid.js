import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';

const bannerGrid = () => {
    return (
        <Container fluid className='my-5'>
            <Row>
                <Col md={8}>
                    <Image
                        src="/images/banner5.webp"
                        width={250}
                        height={250}
                        objectFit='contain'
                        layout='responsive'
                        alt='category'
                    />
                </Col>
                <Col>
                    <Col className='mb-2'>
                        <Image
                            src="/images/banner6.webp"
                            width={250}
                            height={250}
                            objectFit='contain'
                            layout='responsive'
                            alt='category'
                        />
                    </Col>
                    <Col>
                        <Image
                            src="/images/banner7.webp"
                            width={250}
                            height={250}
                            objectFit='contain'
                            layout='responsive'
                            alt='category'
                        />
                    </Col>
                </Col>
            </Row>
        </Container>
    )
}

export default bannerGrid