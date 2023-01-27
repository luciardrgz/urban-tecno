import urlFor from "../lib/urlFor";
import Image from "next/image";
import noImg from "../img/no-img.png";

type Props = {
  products: Product[];
};

function Store({ products }: Props) {
  return (
    <section className="text-gray-400 body-font p-2 text-center">
      <div className="container px-5 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products &&
            products.map((product) => (
              <div className="pt-20 lg:w-1/4 md:w-1/2 p-4 w-full hover:scale-110 transition duration-200">
                <a
                  className="block h-48 rounded overflow-hidden text-gray-300 hover:no-underline hover:text-[#b4a07c] "
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
                      <a
                        href="https://wa.me/5492236020937"
                        target="_blank"
                        className=" hover:no-underline hover:text-[#f1ddb7] transition-colors duration-300 transform  "
                      >
                        Consultar
                      </a>
                    )}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Store;
