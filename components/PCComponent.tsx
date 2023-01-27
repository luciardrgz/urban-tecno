"use client";
import urlFor from "../lib/urlFor";
import Image from "next/image";
import noImg from "../img/no-img.png";
import { useState } from "react";

type Props = {
  products: Product[];
  step: number;
};

const routes: string[] = [
  "mother",
  "cpu",
  "memory",
  "cooler",
  "videocard",
  "storage",
  "source",
  "cabinet",
];

export const revalidate = 30; // revalidate this page every 30 seconds

function PCComponent({ products, step }: Props) {
  const [selectedProduct, setSelectedProduct] = useState("");

  return (
    <div className="py-6 sm:py-8 lg:py-12 max-w-screen-2xl px-4 md:px-8 mx-auto">
      <div className="flex justify-between items-end gap-4 mb-6">
        <h2 className="text-white text-2xl lg:text-3xl font-bold">
          <>
            {step + 1}.&nbsp;
            {products && products[0] && products[0].category ? (
              <>{products[0].category.name}</>
            ) : null}
          </>
          <br />
          <span className="text-[#9c9c9c] text-base lg:text-base font-semibold">
            {products[0].category.description &&
            products[0].category.description.length > 0 ? (
              products[0].category.description
            ) : (
              <a
                className="hover:text-[#b4a07c] hover:no-underline"
                href={`https://www.google.com/search?q=${products[0].category.name}`}
                target="_blank"
              >
                ¿Qué es?
              </a>
            )}
          </span>
        </h2>

        {step + 1 !== 9 ? (
          <a
            href={`${routes[step + 1]}`}
            className="inline-block bg-[#b4a07c] hover:bg-[#5c5240] text-black hover:text-white hover:no-underline  transition-colors duration-300 transform  text-sm md:text-base font-semibold text-center rounded-lg px-4 md:px-8 py-2 md:py-3"
          >
            Siguiente
          </a>
        ) : null}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8 relative">
        {products && products.length > 0
          ? products.map((product) => (
              <div className="flex flex-col" key={product.slug.current}>
                <div className="group h-80 block rounded-lg mb-2 lg:mb-3">
                  <input
                    type="checkbox"
                    id={product.slug.current}
                    name={product.slug.current}
                    checked={product.slug.current === selectedProduct}
                    onChange={(e) => {
                      setSelectedProduct(product.slug.current);
                    }}
                  />

                  <label htmlFor={product.slug.current}>
                    {product.images && product.images.length > 0 ? (
                      <img
                        src={urlFor(product.images[0]).url()}
                        loading="eager"
                        alt={product.name}
                        className="w-full h-full object-cover object-center rounded-lg group-hover:scale-110 transition duration-200"
                      />
                    ) : (
                      <Image
                        src={noImg}
                        loading="eager"
                        priority={true}
                        alt={product.name}
                        className="w-full h-full object-cover object-center rounded-lg group-hover:scale-110 transition duration-200"
                      ></Image>
                    )}
                  </label>
                </div>

                <div className="info mt-4">
                  <span className="text-[#b4a07c] lg:text-lg font-bold hover:gray-800 transition duration-100">
                    {product.name}&nbsp;
                  </span>

                  <br />
                  <span className="text-white lg:text-lg font-semibold">
                    ${product.price}
                  </span>

                  <br />
                  <a
                    className="hover:no-underline hover:text-[#b4a07c]"
                    href={`/product/slug/${product.slug.current}`}
                    target="_blank"
                  >
                    Ver especificaciones
                  </a>
                </div>
              </div>
            ))
          : "No hay componentes de este tipo"}
      </div>
    </div>
  );
}

export default PCComponent;
