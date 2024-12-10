import React from 'react'
import styles from './privacy-policy.module.scss'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image';

const index = () => {
  return (
    <>
      <section className={styles.dlftbnnr}>
        <div className={styles.dlftCtnt}>
          <h1 style={{ fontWeight: '300' }}>PRIVACY POLICY</h1>
          <p>Home &gt; Privacy Policy</p>
        </div>
      </section>
      <section className='my-5'>
        <Container>
          <p>This section pertains to the Privacy Policy of HouseofEm5.com. We would like to inform that our privacy policy is subject to change without intimation and you shall be required to review the same regularly.</p>
          <p>The protection and security of your personal information is one of House of Em5 top priorities. This Privacy Policy discloses House of Em5 practice with respect to the information collected from the users of this website. By using this website you agree to accept the terms of this Privacy Policy as well as the website's Terms of Use. By accessing or using this website you expressly consent to our use and disclosure of your personal information in any manner described in this Privacy Policy. This Privacy Policy extends to both, users who visit the website but do not transact business on the website, as well as users who are registered on the website. 'Personal Information' refers to any information that identifies or can be used to identify, contact or locate the person, to whom such information pertains including, but not limited to, name, address, phone number, fax number, email address, financial profiles, identification number, credit card information etc.</p>
          <p>PLEASE READ THE FOLLOWING TERMS OF OUR PRIVACY POLICY</p>
          <p>PERSONAL INFORMATION COLLECTED</p>
          <p>By accepting this privacy policy, you authorize HouseofEm5.com to collect, store and use any information that you provide on our website. The information collected by us are:</p>
          <p>• All information entered by you on our website such as your name, address, contact number, email ID, chat history, and such other information sent by you via emails to our email ID.</p>
          <p>• Information collected by means of cookies that are installed on your hard drive. • Information such as the IP Address of your computer, the server from which you are accessing our website, details of web browser and operating system used to access our website, date, time and place of accessing of our website etc.</p>
        </Container>
      </section>
    </>
  )
}

export default index