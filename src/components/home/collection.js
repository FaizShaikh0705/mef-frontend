import React from 'react'
import { Container, Row, div, Col } from 'react-bootstrap';
import styles from './home.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import style from "./home.module.scss"


const collection = () => {
    return (
        <>
            <section className='my-5'>
                <Container fluid>
                    <Row className='my-5 text-center'>
                        <h1 className='mb-5' style={{ color: "#706C61" }}>Collections</h1>
                        <Col md={4} sm={12}>
                            <Link href="/commingSoon" className={style.rbtn}>
                                <Image
                                    className={style.menc}
                                    // style={{ position: 'relative', left: '0.5rem', top: '0.5rem', zIndex: '-1' }}
                                    src="/images/collection/men.jpg"
                                    width={250}
                                    height={250}
                                    objectFit='contain'
                                    layout='responsive'
                                    alt='category'
                                    unoptimized
                                />
                                <h4 className='text-start mt-2'>Mens Perfume..</h4>
                            </Link>
                        </Col>
                        <Col md={4} sm={12}>
                            <Link href="/commingSoon" className={style.rbtn}>
                                <Image
                                    src="/images/collection/women.jpg"
                                    width={250}
                                    height={250}
                                    objectFit='contain'
                                    layout='responsive'
                                    alt='category'
                                    unoptimized
                                />
                                <h4 className='text-start mt-2'>Women Perfume..</h4>
                            </Link>
                        </Col>
                        <Col md={4} sm={12}>
                            <Link href="/commingSoon" className={style.rbtn}>
                                <Image
                                    // style={{ position: 'relative', left: '0.5rem', top: '0.5rem', zIndex: '-1' }}
                                    src="/images/collection/unisex.jpg"
                                    width={250}
                                    height={250}
                                    objectFit='contain'
                                    layout='responsive'
                                    alt='category'
                                    unoptimized
                                />
                                <h4 className='text-start mt-2'>Unisex Perfume..</h4>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default collection
