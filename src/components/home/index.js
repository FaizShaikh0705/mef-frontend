import React from "react";
import HomeBanner from "./banner";
import HommeIntro from './intro';
import HomeCategory from './category';
import HommeArrivals from './Arrivals';
import HommeBannerGrid from './bannerGrid';

const Home = () => {
    return (
        <>
            <HomeBanner />
            <HommeIntro />
            <HomeCategory/>
            <HommeArrivals/>
            <HommeBannerGrid/>
        </>
    );
};

export default Home;