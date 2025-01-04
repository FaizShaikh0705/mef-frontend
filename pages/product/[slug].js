// // pages/home/[slug].js
// // import { NextSeo } from 'next-seo';
// import MasterLayout from '../../src/components/layouts/master';
// // import SeoSchema from '../../src/components/seo/schema';
// import ProductDetailsContainer from '../../src/components/product/productDetails';
// // import { publicRequest } from "../../src/requestMethods";
// // import axios from 'axios';

// const RelatedProduct = ({ productDetailsData }) => {
//     return (
//         <>
//             <ProductDetailsContainer productDetailsData={productDetailsData} />
//         </>
//     );
// };

// // export async function getStaticPaths() {
// //     const res = await publicRequest.get('/products');
// //     const productDetailsData = await res.data;
// //     // console.log("productDetailsData", productDetailsData)

// //     const slugs = Object.keys(productDetailsData).map((key) =>
// //         productDetailsData[key].sluginput.toLowerCase().split(' ').join('-')
// //     );

// //     const paths = slugs.map((slug) => ({
// //         params: { slug },
// //     }));

// //     return {
// //         paths,
// //         fallback: false,
// //     };
// // }

// // export async function getStaticProps({ params }) {
// //     const { slug } = params;
// //     const res = await publicRequest.get('/products');
// //     const productDetailsData = await res.data;
// //     // console.log("productDetailsData", productDetailsData)

// //     const key = Object.keys(productDetailsData).find(
// //         (key) => productDetailsData[key].sluginput.toLowerCase().split(' ').join('-') === slug
// //     );

// //     return {
// //         props: {
// //             productDetailsData: productDetailsData[key],
// //         },
// //     };
// // }

// export default RelatedProduct;
