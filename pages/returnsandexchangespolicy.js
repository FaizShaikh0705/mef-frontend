import { NextSeo } from 'next-seo';
import MasterLayout from '../src/components/layouts/master';
import SeoSchema from "../src/components/seo/schema";
import ReturnsAndExchangesPolicyContainer from "../src/components/returns-and-exchanges-policy";
import axios from 'axios';

const returnsandexchangespolicy = () => {

    // let schemaData = {
    //     "@context": "https://schema.org",
    //     "@type": "Organization",
    //     "name": "qirah",
    //     "url": "https://www.qirah-haircare.com",
    //     "logo": "https://admin.thewholetruthfoods.com/wp/wp-content/uploads/2021/01/logo-top.svg",
    //     "founder": "jitu karsan",
    //     "foundingDate": "2009",
    //     "foundingLocation": "Mumbai",
    //     "sameAs": [
    //         "https://www.facebook.com/",
    //         "https://twitter.com/",
    //         "https://www.instagram.com/",
    //         "https://www.youtube.com/channel/"
    //     ]
    // }
    return (
        <>
            <NextSeo title="MEF" description="MEF" canonical="/" />
            {/* <SeoSchema data={schemaData} /> */}
            <ReturnsAndExchangesPolicyContainer />
        </>
    )
}
export default returnsandexchangespolicy;


