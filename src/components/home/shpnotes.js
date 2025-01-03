import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Image from "next/image";
import styles from './home.module.scss'


const shpnotes = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col className='text-center'>
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
                    </Col>
                   <Col className='text-center'>
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
                    </Col>
                   <Col className='text-center'>
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
                    </Col>
                   <Col className='text-center'>
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
                    </Col>
                   <Col className='text-center'>
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
                    </Col>
                   <Col className='text-center'>
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
                    </Col>

                </Row>
            </Container>
        </>
    )
}

export default shpnotes