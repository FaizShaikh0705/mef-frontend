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

const Home = ({ productData }) => {
  return (
    <>
      <HomeBanner />
      <Category />
      <Intro />
      <Product productData={productData} />
      {/* <Offer /> */}
      <Ingredient />
      <Product productData={productData} />
      <Benfits />
      {/* <Testimony /> */}
      {/* <Reel /> */}
    </>
  );
};

export default Home;
