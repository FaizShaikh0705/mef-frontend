import React from 'react'
import { NextSeo } from 'next-seo';
import MasterLayout from '../src/components/layouts/master';
import SeoSchema from "../src/components/seo/schema";
import axios from 'axios';
import Contact from '../src/components/contact/contact.js';
const contact = () => {
  let schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "qirah",
    "url": "https://www.mkmparfum.com",
    "logo": "https://admin.thewholetruthfoods.com/wp/wp-content/uploads/2021/01/logo-top.svg",
    "founder": "jitu karsan",
    "foundingDate": "2009",
    "foundingLocation": "Mumbai",
    "sameAs": [
      "https://www.facebook.com/",
      "https://twitter.com/",
      "https://www.instagram.com/",
      "https://www.youtube.com/channel/"
    ]
  }
  return (
    <>
      <NextSeo title="MKM PARFUM" description="MKM PARFUM" canonical="/blog" />
      {/* <SeoSchema data={schemaData} /> */}
      <Contact />
    </>
  )
}

export default contact

