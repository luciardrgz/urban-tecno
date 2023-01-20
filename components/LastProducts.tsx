"use client";
import { groq } from "next-sanity";
import { useState, useEffect } from "react";
import { client } from "../lib/sanity.client";
import urlFor from "../lib/urlFor";

function LastProducts() {
  const [lastProducts, setLastProducts] = useState<Product[]>();

  async function retrieveLastProducts() {
    const query = groq`
            *[_type == "product"][0..3] {
              name,
              price,
              category->,
              image,
              slug
            } | order(string(_createdAt) desc)`;

    const lastProducts: Product[] = await client.fetch(query);
    setLastProducts(lastProducts);
  }

  useEffect(() => {
    retrieveLastProducts();
  }, []);

  return (
    <div>
      {lastProducts && lastProducts.length > 0 ? (
        <div className="py-6 sm:py-8 lg:py-12">
          <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <div className="mb-10 md:mb-16">
              <h2 className="text-[#b4a07c] text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
                Nuestras novedades
              </h2>

              <p className="max-w-screen-md text-base text-white font-semibold md:text-lg text-center mx-auto">
                Estos son los últimos productos que ingresaron, hacé clic en
                cualquiera para más detalles
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {lastProducts && lastProducts
                ? lastProducts.map((product) => (
                    <div key={product.slug.current}>
                      <a
                        href={`product/slug/${product.slug.current}`}
                        className="group h-96 block bg-[#1a1a1a] hover:no-underline hover:text-[#b4a07c] rounded-t-lg overflow-hidden relative"
                      >
                        {product.image && product.image ? (
                          <img
                            src={urlFor(product.image).url()}
                            loading="eager"
                            alt={product.name}
                            className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
                          />
                        ) : null}
                      </a>

                      <div className="flex justify-between items-start bg-[#0d0d0d] rounded-b-lg gap-2 p-4">
                        <div className="flex flex-col">
                          <a
                            href={`product/slug/${product.slug.current}`}
                            className="text-[#434242] hover:text-[#b4a07c] hover:no-underline lg:text-lg font-bold transition duration-100"
                          >
                            {product.name}
                          </a>
                          <a
                            href={`product/category/${product.category.name}`}
                            className="text-[#434242] hover:text-[#b4a07c] hover:no-underline text-sm lg:text-base"
                          >
                            {product.category.name}
                          </a>
                        </div>

                        <div className="flex flex-col items-end">
                          <span className="text-[#434242] lg:text-lg font-bold">
                            ${product.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                : "No hay productos"}
            </div>
          </div>
        </div>
      ) : (
        "No hay productos"
      )}
    </div>
  );
}

export default LastProducts;

/*<div className="py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="text-[#b4a07c] text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            Nuestras novedades
          </h2>

          <p className="max-w-screen-md text-base text-white font-semibold md:text-lg text-center mx-auto">
            Estos son los últimos productos que ingresaron, hacé clic en
            cualquiera para más detalles
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {lastProducts && lastProducts
            ? lastProducts.map((product) => (
                <div key={product.slug.current}>
                  <a
                    href={`product/${product.slug.current}`}
                    className="group h-96 block bg-[#1a1a1a] hover:no-underline hover:text-[#b4a07c] rounded-t-lg overflow-hidden relative"
                  >
                    {product.image && product.image ? (
                      <img
                        src={urlFor(product.image).url()}
                        loading="eager"
                        alt={product.name}
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
                      />
                    ) : null}
                  </a>

                  <div className="flex justify-between items-start bg-[#0d0d0d] rounded-b-lg gap-2 p-4">
                    <div className="flex flex-col">
                      <a
                        href={`product/${product.slug.current}`}
                        className="text-[#434242] hover:text-[#b4a07c] hover:no-underline lg:text-lg font-bold transition duration-100"
                      >
                        {product.name}
                      </a>
                      <a
                        href={`category/${product.category.name}`}
                        className="text-[#434242] hover:text-[#b4a07c] hover:no-underline text-sm lg:text-base"
                      >
                        {product.category.name}
                      </a>
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="text-[#434242] lg:text-lg font-bold">
                        ${product.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            : "No hay productos"}
        </div>
      </div>
    </div>*/
