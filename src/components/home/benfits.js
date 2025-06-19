import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from 'next/link';
import styles from './home.module.scss';
const Benfits = () => {
  return (
    <>
      <Container className='my-4'>
        <Row>
          <h1 className='text-center my-5' styles={{ color: "#706C61" }}>Shop by Notes</h1>
          <Col xs={6} md={2} className='text-center'>
            <Link href="/commingSoon" className={styles.rbtn1}>
              <Image
                width={121}
                height={121}
                variant="top"
                src="/images/Floral.avif"
                objectFit='contain'
                layout='responsive'
                alt='product'
                className={styles.notesimg}
                unoptimized
              />
              <h3>Floral</h3>
              <p className={styles.notescnt}>Enchanting Floral collection - perfect fragrances for every romantic soul.</p>
            </Link>
          </Col>
          <Col xs={6} md={2} className='text-center'>
            <Link href="/commingSoon" className={styles.rbtn1}>
              <Image
                width={121}
                height={121}
                variant="top"
                src="/images/Woody.avif"
                objectFit='contain'
                layout='responsive'
                alt='product'
                className={styles.notesimg}
                unoptimized
              />
              <h3>Woody</h3>
              <p className={styles.notescnt}>Dive into our lit Woody fragrances—bringing those earthy vibes straight to you!
              </p>
            </Link>
          </Col>
          <Col xs={6} md={2} className='text-center'>
            <Link href="/commingSoon" className={styles.rbtn1}>
              <Image
                width={121}
                height={121}
                variant="top"
                src="/images/Fresh.avif"
                objectFit='contain'
                layout='responsive'
                alt='product'
                className={styles.notesimg}
                unoptimized
              />
              <h3>Fresh</h3>
              <p className={styles.notescnt}>Get the ultimate freshness with our Fresh scents—perfect for every mood!</p>
            </Link>
          </Col>
          <Col xs={6} md={2} className='text-center'>
            <Link href="/commingSoon" className={styles.rbtn1}>
              <Image
                width={121}
                height={121}
                variant="top"
                src="/images/Citrus.png"
                objectFit='contain'
                layout='responsive'
                alt='product'
                className={styles.notesimg}
                unoptimized
              />
              <h3>Musky</h3>
              <p className={styles.notescnt}>Level up your scent game with our Musky vibes—bold, confident, and absolutely unforgettable!</p>
            </Link>
          </Col>
          <Col xs={6} md={2} className='text-center'>
            <Link href="/commingSoon" className={styles.rbtn1}>
              <Image
                width={121}
                height={121}
                variant="top"
                src="/images/Gourmand.png"
                objectFit='contain'
                layout='responsive'
                alt='product'
                className={styles.notesimg}
                unoptimized
              />
              <h3>Gourmand</h3>
              <p className={styles.notescnt}>Satisfy your scent cravings—so mouthwatering, you'll want to lick yourself!</p>
            </Link>
          </Col>
          <Col xs={6} md={2} className='text-center'>
            <Link href="/commingSoon" className={styles.rbtn1}>
              <Image
                width={121}
                height={121}
                variant="top"
                src="/images/Oriental.png"
                objectFit='contain'
                layout='responsive'
                alt='product'
                className={styles.notesimg}
                unoptimized
              />
              <h3>Oriental</h3>
              <p className={styles.notescnt}>Discover diverse Oriental scents, from sensual East to nature-inspired blends. strong, attractive, and utterly irresistible.</p>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Benfits
