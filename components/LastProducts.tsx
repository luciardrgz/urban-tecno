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
              price,
              image
            } | order(string(_createdAt) desc)`;

    const lastProducts: Product[] = await client.fetch(query);
    setLastProducts(lastProducts);
  }

  useEffect(() => {
    retrieveLastProducts();
  }, []);
  return (
    <div className="bg-[#1a1a1a] rounded-lg px-4 py-16 mb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg font-sans text-3xl font-bold tracking-tight text-[#b4a07c] sm:text-4xl sm:leading-none">
              Nuestras novedades
            </h2>
            <p className="text-base text-white mt-2 md:text-lg">
              Estos son los últimos productos que entraron!
            </p>
          </div>

          <div className="text-base md:text-md">
            <ClientSideRoute route={`http://localhost:3000/store`}>
              <p className="hover:text-[#b4a07c]">Ver todos <FontAwesomeIcon
                icon={faChevronRight}
                color="text-gray-700"
                className="ml-2"
              ></FontAwesomeIcon></p>
            </ClientSideRoute>
          </div>
        </div>

        {lastProducts && (
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <img
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src={urlFor(lastProducts[1].image).url()}
                alt={lastProducts[1].name}
              />
              <img
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src={urlFor(lastProducts[2].image).url()}
                alt={lastProducts[2].name}
              />
            </div>
            <div className="px-3">
              <img
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src={urlFor(lastProducts[3].image).url()}
                alt={lastProducts[3].name}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LastProducts;
