import { groq } from "next-sanity";
import PCComponent from "../../../../components/PCComponent";
import { client } from "../../../../lib/sanity.client";

type Props = {
  params: {
    category: string;
  };
};

export const revalidate = 30; // revalidate this page every 30 seconds

async function Mother() {
  const query = groq`
		*[_type == "product" && category->name == "Motherboard"]{
      ...,
      name,
      category->,
      brand->,
      origin->,
      colors[]->
    } | order(brand.name asc)
	`;

  const products: Product[] = await client.fetch(query);

  return (
    <div className="container px-5 mx-auto">
      <PCComponent products={products} step={0} />
    </div>
  );
}

export default Mother;
