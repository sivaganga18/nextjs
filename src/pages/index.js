import { NextSeo } from "next-seo";

const Index = ({ data, image }) => {
  const title = `${data?.name} | Page details`;
  console.log(image, "tes image");
  return (
    <div>
      <NextSeo
        title={title}
        description={title}
        openGraph={{
          title: `${data?.name}`,
          description: `${title}`,
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
      <span>test adshj</span>
    </div>
  );
};
export default Index;

export const getServerSideProps = async ({ query }) => {
  // USING THIS GET URL PARAMETERS
  console.log(query, "query");
  const { name, image } = query;

  return {
    props: {
      data: {
        name: name,
      },
      image: image,
    },
  };
};
