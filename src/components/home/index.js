import React from "react";
import HomeBanner from './banner'
import Intro from './intro'
import Product from './product'
import Offer from './offer'
import Ingredient from "./ingredient";
import Benfits from "./benfits";
import Testimony from "./testimony";
import Reel from './reel';
import Category from './category'
import Blog from "./blogs";
import Collection from "./collection";
import { Col } from "react-bootstrap";

const Home = ({ productData, blogData }) => {
  return (
    <>
      <HomeBanner />
      <Category />
      <Intro />
      <Product productData={productData} />
      <Collection />
      {/* <Offer /> */}
      <Ingredient />
      <Product productData={productData} />
      <Benfits />
      {/* <Testimony /> */}
      {/* <Reel /> */}
      <Blog blogData={blogData} />
    </>
  );
};

export default Home;
