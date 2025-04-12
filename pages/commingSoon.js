import { NextSeo } from 'next-seo';
import MasterLayout from '../src/components/layouts/master';
import SeoSchema from "../src/components/seo/schema";
import CommingSoonContainer from "../src/components/commingSoon/CommingSoon";
import axios from 'axios';

const commingSoon = () => {
    return (
        <>
            <NextSeo title="MKM PARFUM" description="MKM PARFUM" canonical="/blog" />
            {/* <SeoSchema data={schemaData} /> */}
            <CommingSoonContainer />
        </>
    )
}

export default commingSoon
