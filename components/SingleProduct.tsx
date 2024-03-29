import ImageSlider from "./ImageSlider";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import noImg from "../img/no-img.png";
import urlFor from "../lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../components/RichTextComponents";

type Props = {
  product: Product;
};

function SingleProduct({ product }: Props) {
  const images: string[] = product.images?.map((image) => urlFor(image).url());

  return (
    <div className="py-6 sm:py-8 lg:py-12 min-h-screen">
      <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
        <div className="md:grid lg:grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {images && images.length > 0 ? (
            <ImageSlider imageUrls={images}></ImageSlider>
          ) : (
            <Image
              src={noImg}
              loading="eager"
              priority={true}
              alt={product.name}
            ></Image>
          )}

          <div className="mt-5 md:mt-0 lg:mt-0 md:py-8 lg:py-8 ">
            <div className="mb-2 md:mb-3">
              <span className="inline-block text-[#5e5e5e] mb-0.5">
                {product.category.name}
              </span>
              <h2 className="text-[#b4a07c] text-2xl lg:text-3xl font-bold">
                {product.name}
              </h2>
            </div>

            {product.brand && (
              <div className="flex items-center gap-3 mb-1 md:mb-1">
                <div className="h-7 flex items-center bg-[#0f0f0f] text-[#b4a07c] rounded-full gap-1 px-2">
                  <span className="text-sm">{product.brand.name}</span>
                </div>

                <span className="text-[#5e5e5e] text-sm transition duration-100">
                  {product.brand.origin}
                </span>
              </div>
            )}

            <div className="flex items-center pb-5 border-b-2 border-[#b4a07c]"></div>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-[#b4a07c] mb-5">
              <div className="flex">
                <span className="mr-3 text-white text-justify">
                  {product.info && product.info.length > 0 ? (
                    <PortableText
                      value={product.info}
                      components={RichTextComponents}
                    />
                  ) : (
                    "Sin especificaciones"
                  )}
                </span>
              </div>
            </div>

            <div className="mb-4 md:mb-6">
              {product.colors && product.colors.length > 0 ? (
                <>
                  <span className="inline-block mr-3 text-white text-sm md:text-sm mb-3">
                    Colores disponibles
                  </span>

                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <div key={color.name}>
                        <input
                          type="image"
                          className="border-2 pointer-events-none border-white ml-1 rounded-full w-8 h-8 focus:outline-none"
                          src={urlFor(color.image).url()}
                          alt={color.name}
                        />
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <span className="inline-block text-gray-500 text-sm md:text-base font-semibold mb-3">
                  Colores no especificados
                </span>
              )}
            </div>

            <div className="flex items-center text-[#5e5e5e] gap-2 mb-6">
              <FontAwesomeIcon
                icon={faTruck}
                width={"1.5em"}
                height={"1.5em"}
              ></FontAwesomeIcon>

              <span className="text-sm">Envío gratis según zona</span>
            </div>

            <div className="flex justify-end items-end gap-2 mb-4">
              <span className="text-white text-xl md:text-2xl font-bold mb-2 mr-3">
                {product.price ? "$" + product.price : "Precio no disponible"}
              </span>

              <div className="flex gap-2.5 ">
                <a
                  href="https://wa.me/5492236020937"
                  target="_blank"
                  className="inline-block flex-1 sm:flex-none bg-[#b4a07c] hover:bg-[#928265] text-black hover:text-white hover:no-underline text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-300 px-8 py-3"
                >
                  Consultar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
