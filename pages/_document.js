import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta charset="utf-8" />
                    <link rel="icon" href="/images/favicon.png" />

                    <meta property="og:title" content="MKM Parfum" />
                    <meta property="og:description" content="MKM Parfum" />
                    {/* <meta property="og:image" content="/images/displayimagenew.png" /> */}
                    {/* <meta property="og:image:width" content="800" /> */}
                    {/* <meta property="og:image:height" content="600" /> */}
                    {/* <meta property="og:image:alt" content="MEF" /> */}

                    <link rel="shortcut icon" href="/favicon.ico" />

                    <link rel="shortcut icon" href="/favicon.ico" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Secular+One&display=swap"
                        rel="stylesheet"
                    />
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&display=swap" rel="stylesheet"></link>

                    <link
                        href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Lora:ital,wght@0,400..700;1,400..700&display=swap"
                        rel="stylesheet"
                    ></link>
                    <link
                        rel="stylesheet"
                        href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
                        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
                        crossorigin="anonymous"
                    />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        charset="UTF-8"
                        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                    />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                    />

                    {/* Second Microsoft Clarity script */}


                    {/* //  <!-- Google tag (gtag.js) --> */}

                </Head>
                <body>
                    {/* Add Google Tag Manager (noscript) */}

                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;