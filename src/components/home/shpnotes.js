import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Image from "next/image";
import styles from './home.module.scss'


const shpnotes = () => {
    return (
        <>
            <Container className='my-4'>
                <Row>
                    <Col xs={6} md={2} className='text-center'>
                        <Image
                            width={121}
                            height={121}
                            variant="top"
                            src="/images/Floral.avif"
                            objectFit='contain'
                            layout='responsive'
                            alt='product'
                            className={styles.notesimg}
                        />
                        <h3>Floral</h3>
                        <p className={styles.notescnt}>Enchanting Floral collection - perfect fragrances for every romantic soul.</p>
                    </Col>
                    <Col xs={6} md={2} className='text-center'>
                        <Image
                            width={121}
                            height={121}
                            variant="top"
                            src="/images/Woody.avif"
                            objectFit='contain'
                            layout='responsive'
                            alt='product'
                            className={styles.notesimg}
                        />
                        <h3>Woody</h3>
                        <p className={styles.notescnt}>Dive into our lit Woody fragrances—bringing those earthy vibes straight to you!
                        </p>
                    </Col>
                    <Col xs={6} md={2} className='text-center'>
                        <Image
                            width={121}
                            height={121}
                            variant="top"
                            src="/images/Fresh.avif"
                            objectFit='contain'
                            layout='responsive'
                            alt='product'
                            className={styles.notesimg}
                        />
                        <h3>Fresh</h3>
                        <p className={styles.notescnt}>Get the ultimate freshness with our Fresh scents—perfect for every mood!</p>
                    </Col>
                    <Col xs={6} md={2} className='text-center'>
                        <Image
                            width={121}
                            height={121}
                            variant="top"
                            src="/images/Citrus.png"
                            objectFit='contain'
                            layout='responsive'
                            alt='product'
                            className={styles.notesimg}
                        />
                        <h3>Musky</h3>
                        <p className={styles.notescnt}>Level up your scent game with our Musky vibes—bold, confident, and absolutely unforgettable!</p>
                    </Col>
                    <Col xs={6} md={2} className='text-center'>
                        <Image
                            width={121}
                            height={121}
                            variant="top"
                            src="/images/Gourmand.png"
                            objectFit='contain'
                            layout='responsive'
                            alt='product'
                            className={styles.notesimg}
                        />
                        <h3>Gourmand</h3>
                        <p className={styles.notescnt}>Satisfy your scent cravings—so mouthwatering, you'll want to lick yourself!</p>
                    </Col>
                    <Col xs={6} md={2} className='text-center'>
                        <Image
                            width={121}
                            height={121}
                            variant="top"
                            src="/images/Oriental.png"
                            objectFit='contain'
                            layout='responsive'
                            alt='product'
                            className={styles.notesimg}
                        />
                        <h3>Oriental</h3>
                        <p className={styles.notescnt}>Discover diverse Oriental scents, from sensual East to nature-inspired blends. strong, attractive, and utterly irresistible.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default shpnotes