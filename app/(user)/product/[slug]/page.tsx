import { groq } from "next-sanity";
import Image from "next/image";
import { client } from "../../../../lib/sanity.client";
import urlFor from "../../../../lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../../../components/RichTextComponent";
import color from "../../../../schemas/color";

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
    <section>
      <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
        <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
          {product.image && (
            <Image
              className="object-cover object-left lg:object-center"
              src={urlFor(product.image).url()}
              alt={product.name}
              width={300}
              height={300}
              loading="eager"
              priority={true}
            />
          )}
        </div>

        <div className="md:hidden">
          <div className="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
            {product.image && (
              <Image
                className="object-cover object-left lg:object-center"
                src={urlFor(product.image).url()}
                alt={product.name}
                width={300}
                height={300}
                loading="eager"
                priority={true}
              />
            )}
          </div>
        </div>

        <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
          <div className="border-b border-gray-200 pb-6">
            <p className="text-sm leading-none text-gray-600 dark:text-gray-300 ">
              {product.name}!
            </p>
            <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">
              {product.name}
            </h1>
          </div>

          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800 dark:text-gray-300">
              Colores
            </p>

            <div className="flex items-center justify-center">
              <p className="text-sm leading-none text-gray-600 dark:text-gray-300">
                {product.colors?.map((color) => (
                  <p className=" text-white px-3 py-1 rounded-full text-sm font-semibold mt-4">
                    {color.name}
                  </p>
                ))}
              </p>

              <div className="w-6 h-6">
                {/**
                {product.colors?.map((color) => (
                  <p className=" text-white px-3 py-1 rounded-full text-sm font-semibold mt-4">
                    {color.image}
                  </p>
                ))}**/}
              </div>
            </div>
          </div>

          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800 dark:text-gray-300">
              Marca
            </p>

            <div className="flex items-center justify-center">
              <p className=" text-white px-3 py-1 rounded-full text-sm font-semibold mt-4">
                {product.brand.name}
              </p>
            </div>
          </div>

          <button className="dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700 focus:outline-none">
            Check availability in store
          </button>
          <div className="py-4">
            <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7">
              La descripción
            </p>
            <p className="text-base leading-4 mt-7 text-gray-600 dark:text-gray-300">
              Origen: China
            </p>
          </div>
        </div>
      </div>
    </section>
  );

  /*return (
    <article className="px-10 pb-28">
      <section className="space-y-2 border border-[#b4a07c] text-white">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
            {product.image && (
              <Image
                className="object-cover object-center mx-auto"
                src={urlFor(product.image).url()}
                alt={product.name}
                fill
              />
            )}
          </div>

          <section className="p-5 bg-[#b4a07c] w-full">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <div>
                <h1 className="text-4xl font-extrabold">{product.name}</h1>
                <h2>{product.category.name}</h2>
              </div>

              <div className="flex items-center space-x-2">
                {product.brand.image && (
                  <Image
                    className="rounded-full"
                    src={urlFor(product.brand.image).url()}
                    alt={product.brand.name}
                    height={40}
                    width={40}
                  />
                )}

                <div className="w-64">
                  <h3 className="text-lg font-bold">{"Marca "}</h3>
                  <p>{product.brand.name}</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="italic pt-10">{product.details}</h2>
              <div className="flex items-center justify-end mt-auto space-x-2">
                {product.colors?.map((color) => (
                  <p className=" text-white px-3 py-1 rounded-full text-sm font-semibold mt-4">
                    {color.name}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <PortableText value={product.info} components={RichTextComponents} />
    </article>
  );*/
}

export default Product;
