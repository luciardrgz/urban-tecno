import Image from "next/image";
import urlFor from "../lib/urlFor";
import ClientSideRoute from "./ClientSideRoute";

// Principal

type Props = {
  products: Product[];
};

function CommerceList({ products }: Props) {
  return (
    <div>
      <hr className="border-[#b4a07c] mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {products.map((product) => (
          <ClientSideRoute
            route={`/product/slug/${product.slug.current}`}
            key={product._id}
          >
            <div className="flex flex-col group cursor-pointer">
              <div className="z-2 relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                {product.image && (
                  <Image
                    className="object-cover object-left lg:object-center"
                    src={urlFor(product.image).url()}
                    alt={product.name}
                    fill
                    loading="eager"
                    priority={true}
                  />
                )}
                <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                  <div>
                    <p className="font-bold text-2xl">{product.name}</p>
                    <p className="text-lg">${product.price}</p>
                  </div>

                  <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                    <div className="bg-[#b4a07c] text-center text-blue px-3 py-1 rounded-full text-sm font-semibold]">
                      <p>{product.category?.name}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex-1">
                <p className="line-clamp-2 text-gray-500">{product.details}</p>
              </div>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
}

export default CommerceList;
