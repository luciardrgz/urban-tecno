import { groq } from "next-sanity";
import SearchFilters from "../../../../../components/SearchFilters";
import Store from "../../../../../components/Store";
import { client } from "../../../../../lib/sanity.client";

type Props = {
  params: {
    filter: string;
  };
};

export const revalidate = 30; // revalidate this page every 30 seconds

async function Product({ params: { filter } }: Props) {
  let criteria: string = checkFilterOption(filter);

  const query = groq`
*[_type == 'product' ]{
  ...,
  name,
  price,
  category->{name}
} | order(${criteria})
`;

  const products: Product[] = await client.fetch(query, { criteria });

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

export default Product;

function checkFilterOption(filter: string) {
  let criteria: string;

  if (filter == "priceAsc") {
    criteria = "price asc";
  } else if (filter == "priceDesc") {
    criteria = "price desc";
  } else if (filter == "latest") {
    criteria = "_createdAt desc";
  } else if (filter == "oldest") {
    criteria = "_createdAt asc";
  } else {
    criteria = "name asc";
  }

  return criteria;
}
