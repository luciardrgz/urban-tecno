import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import Store from "../../../components/Store";
import SearchFilters from "../../../components/SearchFilters";

const query = groq`
*[_type == 'product']{
  ...,
  name,
  images[],
  category->{name}
} | order(price asc)
`;

export const revalidate = 30; // revalidate this page every 60 seconds

export default async function StoreList() {
  const products = await client.fetch(query);
  return (
    <>
      <section className="text-gray-400 body-font p-2 text-center min-h-screen">
        <div className="container px-5 mx-auto mb-8">
          <SearchFilters></SearchFilters>
        </div>
        <Store allProducts={products} />
      </section>
    </>
  );
}