import React from 'react'
import { Container, Row, div } from 'react-bootstrap';
import styles from './home.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });


const category = () => {
    return (
        <>
            <Container fluid>
                <Row className='my-5'>
                    <OwlCarousel className="owl-theme" loop margin={10} nav responsive={{
                        0: { items: 1 },
                        600: { items: 2 },
                        1000: { items: 4 }
                    }}>
                        <div  className={styles.ctgrybox}>
                            <div style={{ border: '1px solid #000', zIndex: '1' }}>
                                <div style={{ position: 'absolute', bottom: '1rem', left: '3rem' }}>
                                    <h2 style={{ fontFamily: 'Quentin, sans-serif' }}>Fresh</h2>
                                    <p>For Summer</p>
                                </div>
                                <Image
                                    style={{ position: 'relative', left: '0.5rem', top: '0.5rem', zIndex: '-1' }}
                                    src="/images/flvr1.png"
                                    width={250}
                                    height={250}
                                    objectFit='contain'
                                    layout='responsive'
                                    alt='category'
                                    unoptimized
                                />
                            </div>
                        </div>
                        <div  className={styles.ctgrybox}>
                            <div style={{ border: '1px solid #000', zIndex: '1' }}>
                                <div style={{ position: 'absolute', bottom: '1rem', left: '3rem' }}>
                                    <h2 style={{ fontFamily: 'Quentin, sans-serif' }}>Woody</h2>
                                    <p>For Winter</p>
                                </div>
                                <Image
                                    style={{ position: 'relative', left: '0.5rem', top: '0.5rem', zIndex: '-1' }}
                                    src="/images/flvr2.png"
                                    width={250}
                                    height={250}
                                    objectFit='contain'
                                    layout='responsive'
                                    alt='category'
                                    unoptimized
                                />
                            </div>
                        </div>
                        <div  className={styles.ctgrybox}>
                            <div style={{ border: '1px solid #000', zIndex: '1' }}>
                                <div style={{ position: 'absolute', bottom: '1rem', left: '3rem' }}>
                                    <h2 style={{ fontFamily: 'Quentin, sans-serif' }}>Floral</h2>
                                    <p>For All Season</p>
                                </div>
                                <Image
                                    style={{ position: 'relative', left: '0.5rem', top: '0.5rem', zIndex: '-1' }}
                                    src="/images/flvr3.png"
                                    width={250}
                                    height={250}
                                    objectFit='contain'
                                    layout='responsive'
                                    alt='category'
                                    unoptimized
                                />
                            </div>
                        </div>
                        <div  className={styles.ctgrybox}>
                            <div style={{ border: '1px solid #000', zIndex: '1' }}>
                                <div style={{ position: 'absolute', bottom: '1rem', left: '3rem' }}>
                                    <h2 style={{ fontFamily: 'Quentin, sans-serif' }}>Floral</h2>
                                    <p>For All Season</p>
                                </div>
                                <Image
                                    style={{ position: 'relative', left: '0.5rem', top: '0.5rem', zIndex: '-1' }}
                                    src="/images/flvr3.png"
                                    width={250}
                                    height={250}
                                    objectFit='contain'
                                    layout='responsive'
                                    alt='category'
                                    unoptimized
                                />
                            </div>
                        </div>
                    </OwlCarousel>
                </Row>
            </Container>
        </>
    )
}

export default category
