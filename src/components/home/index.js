import React from "react";
import HomeBanner from "./banner";
import HommeIntro from './intro';
import HomeCategory from './category';
import HommeArrivals from './Arrivals';
import HommeBannerGrid from './bannerGrid';
import HommeShpNotes from './shpnotes';

const Home = () => {
    return (
        <>
            <HomeBanner />
            <HommeIntro />
            <HomeCategory />
            <HommeArrivals />
            <HommeShpNotes />
            <HommeBannerGrid />
        </>
    );
};

export default Home;