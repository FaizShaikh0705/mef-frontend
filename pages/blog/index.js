// import { NextSeo } from 'next-seo';
import MasterLayout from '../../src/components/layouts/master';
// import SeoSchema from "../../src/components/seo/schema";
import BlogContainer from "../../src/components/blog";
// import axios from 'axios';
import { publicRequest } from "../../src/requestMethods";

const Blog = ({ blogData }) => {

    return (
        <>
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