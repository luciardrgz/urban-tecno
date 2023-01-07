import { groq } from "next-sanity";
import { client } from "../../../../../lib/sanity.client";

type Props = {
  params: {
    brand: string;
  };
};

export const revalidate = 30; // revalidate this page every 30 seconds

export async function generateStaticParams() {
  const query = groq`
		*[_type == "product"]
		{
			brand->{name}
		}
		`;

  const brands: Product[] = await client.fetch(query);

  const brandRoutes = brands.map((brand) => brand.brand.name);

  return brandRoutes.map((brand) => ({
    brand,
  }));
}

async function Product({ params: { brand } }: Props) {
  const query = groq`
		*[_type == "product" && brand->name == $brand]{
      ...,
      name,
      category->{name},
      brand->,
      origin->,
      colors[]->
    }
	`;

  const products: Product[] = await client.fetch(query, { brand });

  return <h2>{products?.map((product) => product.name)}</h2>;
}

export default Product;
