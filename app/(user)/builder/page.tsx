"use client";
import { groq } from "next-sanity";
import React, { useEffect, useState } from "react";
import { client } from "../../../lib/sanity.client";
import urlFor from "../../../lib/urlFor";
import Image from "next/image";
import noImg from "../../../img/no-img.png";
import BuilderEnd from "../../../components/BuilderEnd";
import BuilderInstructions from "../../../components/BuilderInstructions";
import BuilderStepsTitle from "../../../components/BuilderStepsTitle";

export const revalidate = 30; // revalidate this page every 30 seconds

const steps: string[] = [
  "Instrucciones",
  "Motherboard",
  "Procesador",
  "Memoria",
  "Almacenamiento",
  "Placa de video",
  /*"Cooler",
    "Fuente",
    "Gabinete",*/
];

function Builder() {
  const [currentSelectedComponent, setCurrentSelectedComponent] = useState<
    Product | undefined | null
  >(null);
  const [selectedComponents, setSelectedComponents] = useState<Product[]>([]);
  const [i, setI] = useState<number>(0);
  const [components, setComponents] = useState<Product[]>();

  async function retrieveComponents() {
    const query = groq`
	*[_type == "product" && category!=null && category->name == $category && price!=null]{
    slug,
    name,
    images[],
    category->,
    brand->,
    price
    }
	`;

    const components: Product[] = await client.fetch(query, {
      category: steps[i],
    });

    setComponents(components);
  }

  function handleNextClick() {
    if (currentSelectedComponent) {
      setSelectedComponents([...selectedComponents, currentSelectedComponent]);
      setCurrentSelectedComponent(null);
    }
    changeIteratorValue();
  }

  function changeIteratorValue() {
    setI(i + 1);
  }

  useEffect(() => {
    if (steps.length == i) return;
    retrieveComponents();
  }, [i, steps.length]);

  return (
    <>
      {i == 0 ? (
        <BuilderInstructions
          changeIteratorValue={changeIteratorValue}
        ></BuilderInstructions>
      ) : components && components.length > 0 ? (
        i < steps.length ? (
          <div className="py-6 sm:py-8 lg:py-12 max-w-screen-2xl px-4 md:px-8 mx-auto min-h-screen">
            <div className="flex justify-between items-end gap-4 mb-6">
              <BuilderStepsTitle components={components}></BuilderStepsTitle>
              <a
                className="p-3 hover:cursor-pointer bg-[#b4a07c] hover:bg-[#5c5240] text-black hover:text-white hover:no-underline text-base font-semibold rounded-lg transition-colors duration-300 transform"
                onClick={handleNextClick}
              >
                Siguiente
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8 relative">
              {components && components.length > 0
                ? components.map((product) => (
                    <div key={product.slug.current}>
                      {product.slug.current && (
                        <div className="flex flex-col">
                          <div className="group h-40 md:h-80 lg:h-80 block rounded-lg mb-2 lg:mb-3">
                            <input
                              type="checkbox"
                              id={product.slug.current}
                              name={product.slug.current}
                              checked={product === currentSelectedComponent}
                              onChange={(e) => {
                                setCurrentSelectedComponent(
                                  e.target.checked ? product : null
                                );
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
                              className="text-[#4e4e4e] hover:no-underline hover:text-[#b4a07c] transition"
                              href={`/product/slug/${product.slug.current}`}
                              target="_blank"
                            >
                              Ver especificaciones
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                : "No hay componentes de este tipo"}
            </div>
          </div>
        ) : (
          <BuilderEnd components={selectedComponents}></BuilderEnd>
        )
      ) : null}
    </>
  );
}

export default Builder;
