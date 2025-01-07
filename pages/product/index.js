import { NextSeo } from 'next-seo';
import ProductContainer from "../../src/components/product";
// import axios from 'axios';
import { publicRequest } from "../../src/requestMethods";

const Product = () => {
    return (
        <>
            <ProductContainer />
        </>
    )
}
export default Product;


// const formatDate = (timestamp) => {
//     const dateObject = new Date(timestamp);
//     return dateObject.toLocaleDateString('en-US', {
//         day: '2-digit',
//         month: 'short',
//         year: 'numeric',
//     });
// };

export async function getStaticProps() {
    const res = await publicRequest.get("/products");
    const productData = res.data;

    return {
        props: {
            productData,
        }
    }
}
