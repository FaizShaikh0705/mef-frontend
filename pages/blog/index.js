import { NextSeo } from 'next-seo';
import MasterLayout from '../../src/components/layouts/master';
import SeoSchema from "../../src/components/seo/schema";
import BlogContainer from "../../src/components/blog";
import axios from 'axios';
import { publicRequest } from "../../src/requestMethods";

const Blog = ({ blogData }) => {

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
            <BlogContainer blogData={blogData} />
        </>
    )
}

export default Blog;

export async function getStaticProps() {
    const res = await publicRequest.get("/blog");
    const blogData = await res.data;

    return {
        props: {
            blogData,
        },
    };
};