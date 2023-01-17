import { groq } from "next-sanity";
import { client } from "../../../../lib/sanity.client";
import Store from "../../../../components/Store";

const query = groq`
*[_type == 'product']{
  ...,
  name,
  category->{name}
} | order(price desc)
`;

export const revalidate = 30; // revalidate this page every 60 seconds

export default async function StoreList() {
  const products = await client.fetch(query);
  return <Store products={products} />;
}
