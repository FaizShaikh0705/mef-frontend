import { NextSeo } from 'next-seo';
import MasterLayout from '../src/components/layouts/master';
import SeoSchema from "../src/components/seo/schema";
import HomeContainer from "../src/components/home";
import axios from 'axios';
import { publicRequest } from "../src/requestMethods";


const Home = ({ programData, testimonialData, blogData, productData }) => {

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
            <NextSeo title="MKM PARFUM" description="MKM PARFUM" canonical="/" />
            {/* <SeoSchema data={schemaData} /> */}
            <HomeContainer productData={productData} blogData={blogData} />
        </>
    )
}
export default Home;


// const formatDate = (timestamp) => {
//   const dateObject = new Date(timestamp);
//   return dateObject.toLocaleDateString('en-US', {
//     day: '2-digit',
//     month: 'short',
//     year: 'numeric',
//   });
// };

// export async function getStaticProps() {
//   const res = await axios.get("https://safari-kids-dashboard-default-rtdb.firebaseio.com/program.json");
//   const programData = await res.data;
//   Object.values(programData).forEach(program => {
//     program.formattedPostTimestamp = formatDate(program.postTimestamp);
//   });

//   const testimonialRes = await axios.get("https://safari-kids-dashboard-default-rtdb.firebaseio.com/test.json");
//   // console.log("Testimonials Data:", testimonialRes.data);
//   const testimonialData = await testimonialRes.data;
//   Object.values(testimonialData).forEach(test => {
//     test.formattedPostTimestamp = formatDate(test.postTimestamp);
//   });

//   return {
//     props: {
//       programData,
//       testimonialData,
//     },
//   };
// }


export async function getStaticProps() {
    const bres = await publicRequest.get("/blog");
    const blogData = await bres.data;

    const res = await publicRequest.get("/products");
    const productData = res.data;


    return {
        props: {
            blogData,
            productData,
        },
    };
};
