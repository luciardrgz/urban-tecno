import { groq } from "next-sanity";
import { client } from "../../../../../lib/sanity.client";
import urlFor from "../../../../../lib/urlFor";

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

  return (
    <section className="text-gray-400 body-font text-center">
      <div className="container px-5 mx-auto">
        <h2 className="text-center text-xl font-bold sm:text-3xl mb-10 text-[#b4a07c]">
          {category}
        </h2>

        <div className="flex flex-wrap -m-4">
          {products &&
            products.map((product) => (
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a
                  className="block h-48 rounded overflow-hidden text-gray-300 hover:no-underline hover:text-[#b4a07c]"
                  href={`/product/slug${product.slug.current}`}
                >
                  {product.image && product.image ? (
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block bg-white"
                      src={urlFor(product.image).url()}
                    />
                  ) : (
                    <p className="py-20 w-full h-full block border-2 border-[#463f31] text-[#463f31] font-semibold hover:text-[#b4a07c] transition-colors duration-300 transform">
                      Toca para ver más
                    </p>
                  )}
                </a>

                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {product.brand.name}
                  </h3>
                  <h2 className="text-white title-font text-lg font-medium">
                    {product.name}
                  </h2>
                  <p className="mt-1">${product.price}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Product;
