"use client";
import urlFor from "../lib/urlFor";
import Image from "next/image";
import noImg from "../img/no-img.png";
import Pagination from "./Pagination";
import { useState } from "react";

type Props = {
  allProducts: Product[];
};

function Store({ allProducts }: Props) {
  const productsWithPrice = allProducts.filter((product) => product.price);
  const productsWithoutPrice = allProducts.filter((product) => !product.price);

  const products = productsWithPrice.concat(productsWithoutPrice);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <>
      <section className="text-gray-400 body-font p-2 text-center min-h-screen">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap -m-4 mt-5">
            {currentProducts &&
              currentProducts.map((product) => (
                <div
                  className="-mt-2 md:mt-6 lg:mt-6 lg:w-1/4 md:w-1/2 p-4 w-full hover:scale-110 transition duration-200"
                  key={product.slug.current}
                >
                  <a
                    className="block h-48 rounded overflow-hidden text-gray-300 hover:no-underline hover:text-[#b4a07c]"
                    href={`/product/slug/${product.slug.current}`}
                  >
                    {product.images && product.images.length > 0 ? (
                      <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={urlFor(product.images[0]).url()}
                      />
                    ) : (
                      <Image
                        src={noImg}
                        loading="eager"
                        priority={true}
                        alt={product.name}
                        className="w-full h-full object-cover object-center"
                      ></Image>
                    )}
                  </a>

                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {product.brand?.name}
                    </h3>
                    <h2 className="text-white title-font text-lg font-medium">
                      {product.name}
                    </h2>
                    <p className="mt-1 text-[#b4a07c]">
                      {product.price ? (
                        "$" + product.price
                      ) : (
                        <>
                          <a
                            href="https://wa.me/5492236020937"
                            target="_blank"
                            className=" hover:no-underline hover:text-[#f1ddb7] transition-colors duration-300 transform  "
                          >
                            Consultar
                          </a>
                        </>
                      )}
                    </p>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex justify-center my-10">
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalProducts={products.length}
              productsPerPage={productsPerPage}
            ></Pagination>
          </div>
        </div>
      </section>
    </>
  );
}

export default Store;
