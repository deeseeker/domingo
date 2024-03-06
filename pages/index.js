import Benefits from "@/components/Benefits";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/NavBar";
import Review from "@/components/Review";
import { baseUrl, fetchApi } from "@/utils/fetchApi";

export default function Home({ properties }) {
  console.log(properties);
  return (
    <div className="bg-zinc-50">
      <Navbar />
      <Hero />
      <Feature properties={properties} />
      <Benefits />
      <Review />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const properties = await fetchApi(`${baseUrl}/v1/admin/properties`);
  // const property = await fetchApi(
  //   `http://api-staging.domingoteamrealty.com/v1/admin/properties/:propertyId`,
  // );

  return {
    props: {
      properties: properties.data,
    },
  };
}
