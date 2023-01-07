import { groq } from "next-sanity";
import { client } from "../../../../../lib/sanity.client";

type Props = {
  params: {
    category: string;
  };
};

export const revalidate = 30; // revalidate this page every 30 seconds

export async function generateStaticParams() {
  const query = groq`
		*[_type == "product"]
		{
			category->{name}
		}
		`;

  const categories: Product[] = await client.fetch(query);

  const categoryRoutes = categories.map((category) => category.category.name);

  return categoryRoutes.map((category) => ({
    category,
  }));
}

async function Product({ params: { category } }: Props) {
  const query = groq`
		*[_type == "product" && category->name == $category]{
      ...,
      name,
      category->{name},
      brand->,
      origin->,
      colors[]->
    }
	`;

  const products: Product[] = await client.fetch(query, { category });

  return <h2>{products?.map((product) => product.name)}</h2>;
}

export default Product;
