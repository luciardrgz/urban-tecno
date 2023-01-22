import { groq } from "next-sanity";
import Image from "next/image";
import { client } from "../../../../../lib/sanity.client";
import urlFor from "../../../../../lib/urlFor";
import { Fragment, ReactElement } from "react";
import color from "../../../../../schemas/color";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 30; // revalidate this page every 30 seconds

export async function generateStaticParams() {
  const query = groq`
		*[_type == "product"]
		{
			slug
		}
		`;

  const slugs: Product[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

async function Product({ params: { slug } }: Props) {
  const query = groq`
		*[_type == "product" && slug.current == $slug][0] {
      ...,
      name,
      category->{name},
      brand->,
      origin->,
      colors[]->
    }
	`;

  const product: Product = await client.fetch(query, { slug });

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 mx-auto">
        {product && (
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {product.image && product.image ? (
              <img
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src={urlFor(product.image).url()}
                alt={product.name}
              />
            ) : (
              <p className="text-lg lg:w-1/2 w-full lg:h-auto h-64 text-center rounded">
                Imagen no disponible
              </p>
            )}
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {product.brand.name}
              </h2>
              <h1 className="text-[#b4a07c] text-3xl title-font font-medium mb-1">
                {product.name}
              </h1>

              <div className="flex mt-6 items-center pb-5 border-b-2 border-[#b4a07c] mb-5">
                <div className="flex">
                  {product.colors && product.colors.length > 0 ? (
                    <>
                      <span className="mr-3 text-gray-300">
                        Colores disponibles
                      </span>
                      {product.colors.map((color) => (
                        <input
                          type="image"
                          className="border-2 pointer-events-none border-white ml-1 rounded-full w-6 h-6 focus:outline-none"
                          src={urlFor(color.image).url()}
                          alt={color.name}
                        />
                      ))}
                    </>
                  ) : (
                    <span className="mr-3 text-gray-300">
                      Colores no especificados
                    </span>
                  )}
                </div>
              </div>

              <div className="flex mt-6 items-center pb-5 border-b-2 border-[#b4a07c] mb-5">
                <div className="flex">
                  <span className="mr-3 text-white">{product.details}</span>
                </div>
              </div>

              <div className="flex">
                <span className="title-font font-medium text-2xl text-white">
                  $58.00
                </span>
                <button className="flex ml-auto py-2 px-6 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                  Consultar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Product;
