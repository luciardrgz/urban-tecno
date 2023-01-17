"use client";
import { groq } from "next-sanity";
import { useState, useEffect } from "react";
import { client } from "../lib/sanity.client";
import ClientSideRoute from "./ClientSideRoute";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import urlFor from "../lib/urlFor";

function LastProducts() {
  const [lastProducts, setLastProducts] = useState<Product[]>();

  async function retrieveLastProducts() {
    const query = groq`
            *[_type == "product"][0..3] {
              name,
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
    <div className="bg-[#1a1a1a] rounded-lg px-4 py-16 mb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg text-3xl sm:text-4xl font-bold tracking-tight text-[#b4a07c] sm:leading-none">
              Nuestras novedades
            </h2>
            <p className="text-base text-white mt-2 md:text-lg">
              Estos son los últimos productos que entraron!
            </p>
          </div>

          <div className="text-base md:text-md">
            <p className="hover:text-[#b4a07c] ">
              <ClientSideRoute route={`http://localhost:3000/store`}>
                Ver todos
              </ClientSideRoute>
              <FontAwesomeIcon
                icon={faChevronRight}
                color="text-gray-700"
                className="ml-2"
              ></FontAwesomeIcon>
            </p>
          </div>
        </div>

        {lastProducts && (
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <a
                href={`/product/slug/${lastProducts[1].slug.current}`}
                className="hover:no-underline text-[#5f5542] hover:text-black"
              >
                <img
                  className="object-cover mb-6 rounded shadow-lg h-48 sm:h-48 xl:h-48 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                  src={urlFor(lastProducts[1].image).url()}
                  alt={lastProducts[1].name}
                />
              </a>

              <a
                href={`/product/slug/${lastProducts[2].slug.current}`}
                className="hover:no-underline text-[#5f5542] hover:text-black"
              >
                <img
                  className="object-cover mb-6 rounded shadow-lg h-48 sm:h-48 xl:h-48 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                  src={urlFor(lastProducts[2].image).url()}
                  alt={lastProducts[2].name}
                />
              </a>
            </div>
            <div className="px-3">
              <a
                href={`/product/slug/${lastProducts[3].slug.current}`}
                className="hover:no-underline text-[#5f5542] hover:text-black"
              >
                <img
                  className="object-cover mb-6 rounded shadow-lg h-48 sm:h-48 xl:h-48 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                  src={urlFor(lastProducts[3].image).url()}
                  alt={lastProducts[3].name}
                />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LastProducts;
