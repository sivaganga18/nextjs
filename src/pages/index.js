import { NextSeo } from "next-seo";
import { useEffect, useState } from "react";

const Index = ({ data, image, userAgent }) => {
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    setFirstLoad(false);
    setTimeout(() => {
      redirect();
    }, 500);
  }, []);

  const title = `${data?.name}`;

  const isAndroid = /android/i.test(userAgent);
  const isIos = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;

  const redirect = () => {
    if (isAndroid) {
      window.location.href = `mintavibe://`;
    } else if (isIos) {
      window.location.href = `com.mbs.mintavibe://`;
    }
  };

  return (
    <div>
      <NextSeo
        title={title}
        description={title}
        openGraph={{
          title: `${data?.name}`,
          description: `${data?.desc}`,
          type: "website",
          defaultImageWidth: 800,
          defaultImageHeight: 420,
          images: [
            {
              url: image,
              width: 800,
              height: 420,
              alt: "xx.s/jpg",
            },
          ],
          site_name: "https://www.mintavibe.com/",
        }}
      />
      <span>{isIos ? "IS IOS" : isAndroid ? "Is Android 123" : "tes"}</span>
    </div>
  );
};
export default Index;

export const getServerSideProps = async ({ req, query }) => {
  // USING THIS GET URL PARAMETERS

  const { name, image, desc } = query;

  return {
    props: {
      userAgent: req.headers["user-agent"],
      data: {
        name: name,
        desc: desc,
      },
      image: image,
    },
  };
};
