"use client";
import React, { Fragment, useState, useEffect } from "react";
import urlFor from "../../lib/urlFor";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";

export const revalidate = 30; // revalidate this page every 60 seconds

function HomePage() {
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

  const anchorBtn = (
    <a
      href=""
      className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white hover:no-underline hover:text-[#b4a07c]"
    >
      Quiero ver
    </a>
  );

  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold text-white sm:text-3xl">
            Bienvenido a
            <span className="text-xl font-bold text-[#b4a07c] sm:text-3xl">
              &nbsp;Full Tecno
            </span>
            !
          </h2>

          <h2 className="text-xl font-bold text-white sm:text-3xl">
            Nuestras últimas novedades
          </h2>
        </header>

        {lastProducts && (
          <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
            <li>
              <div className="relative block group">
                <img
                  src={urlFor(lastProducts[1].image).url()}
                  alt=""
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">
                    {lastProducts[1].name}
                  </h3>
                  {anchorBtn}
                </div>
              </div>
            </li>

            <li>
              <div className="relative block group">
                <img
                  src={urlFor(lastProducts[2].image).url()}
                  alt=""
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">
                    {lastProducts[2].name}
                  </h3>
                  {anchorBtn}
                </div>
              </div>
            </li>

            <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <div className="relative block group">
                <img
                  src={urlFor(lastProducts[3].image).url()}
                  alt=""
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">
                    {lastProducts[3].name}
                  </h3>
                  {anchorBtn}
                </div>
              </div>
            </li>
          </ul>
        )}
      </div>
    </section>
  );
}

export default HomePage;
