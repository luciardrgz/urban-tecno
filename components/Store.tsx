import Image from "next/image";
import urlFor from "../lib/urlFor";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
  products: Product[];
};

function Store({ products }: Props) {
  return (
    <section className="text-gray-400 body-font">
      <div className="container px-5 mx-auto">
        <h2 className="text-center text-xl font-bold sm:text-3xl mb-10 text-white">
          Todos nuestros productos
        </h2>

        <div className="flex flex-wrap -m-4">
          {products &&
            products.map((product) => (
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a
                  className="block relative h-48 rounded overflow-hidden text-gray-300 hover:no-underline hover:text-[#b4a07c]"
                  href={`/product/slug/${product.slug.current}`}
                >
                  {product.image && product.image ? (
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block bg-white"
                      src={urlFor(product.image).url()}
                    />
                  ) : (
                    <p className="mt-20 ml-20">Toca para ver más</p>
                  )}
                </a>

                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {product.brand.name}
                  </h3>
                  <h2 className="text-white title-font text-lg font-medium">
                    {product.name}
                  </h2>
                  <p className="mt-1">${product.price}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Store;
