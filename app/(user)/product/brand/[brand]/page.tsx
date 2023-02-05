import { groq } from "next-sanity";
import Store from "../../../../../components/Store";
import { client } from "../../../../../lib/sanity.client";
type Props = {
  params: {
    brand: string;
  };
};

export const revalidate = 30; // revalidate this page every 30 seconds

export async function generateStaticParams() {
  const query = groq`
		*[_type == "product" && brand != null]
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

  return (
    <section className="text-gray-400 body-font text-center min-h-screen">
      <div className="container px-5 mx-auto">
        <h2 className="text-center text-xl font-bold text-white sm:text-3xl mt-10">
          Productos marca
          <span className="text-xl font-bold text-[#b4a07c] sm:text-3xl">
            &nbsp;{brand}
          </span>
        </h2>

        <Store allProducts={products} />
      </div>
    </section>
  );
}

export default Product;
