import "../styles/globals.css";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title="Wrapped Rose"
        description="Wrapped ROSE on Oasis Sapphire enables DeFi swapping and sending ROSE while preserving privacy."
        canonical="https://www.wrose.io/"
        openGraph={{
          url: "https://www.wrose.io/",
          title: "Wrapped Rose",
          description: "Wrapped ROSE on Oasis Sapphire enables DeFi swapping and sending ROSE while preserving privacy.",
          images: [
            {
              url: "https://user-images.githubusercontent.com/19412160/229571180-be04ee34-a5b2-4691-8120-b3d185921d37.png",
              width: 2000,
              height: 2000,
              alt: "WROSE",
              type: "image/jpeg",
            },
          ],
          siteName: "wrose.io",
        }}
        twitter={{
          handle: "@OasisProtocol",
          cardType: "summary_large_image",
        }}
      />
      ;
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
