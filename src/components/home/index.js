import React from "react";
import HomeBanner from "./banner";
import HommeIntro from './intro';
import HomeCategory from './category';
import Product from '../product'
import HommeBannerGrid from './bannerGrid';
import HommeShpNotes from './shpnotes';

const Home = ({ productData }) => {
    return (
        <>
            <HomeBanner />
            <HommeIntro />
            <HomeCategory />
            <Product productData={productData} />
            <HommeShpNotes />
            <HommeBannerGrid />
        </>
    );
};

export default Home;