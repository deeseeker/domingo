import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import PropertyList from "@/components/PropertyList";
import { baseUrl, fetchApi } from "@/utils/fetchApi";

export default function Properties({ properties }) {
  return (
    <div className="bg-white">
      <Navbar />
      <PropertyLists properties={properties} />
      <Footer />
    </div>
  );
}

function PropertyLists({ properties }) {
  return (
    <div className="px-20">
      <h1 className="font-inter text-3xl font-semibold text-[#1A201F] my-10">
        Listed Properties
      </h1>
      <div className="grid grid-cols-3 gap-10 mt-10">
        {properties.map((property) => (
          <PropertyList key={property.id} property={property} />
        ))}
      </div>
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
