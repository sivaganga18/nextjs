import { NextSeo } from "next-seo";

const Index = ({ data, image }) => {
  const title = `${data?.name} | Page details`;
  return (
    <div>
      <NextSeo
        title={title}
        description={title}
        openGraph={{
          title: `${data?.name}`,
          description: `${title}`,
          images: [
            {
              url: image,
              width: 1920,
              height: 1080,
              alt: "xx.s/jpg",
              type: "image/jpeg",
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
  const { id, image } = query;

  return {
    props: {
      data: {
        name: "siva",
      },
      image: image,
    },
  };
};
