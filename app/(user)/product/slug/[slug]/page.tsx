import { groq } from "next-sanity";
import Image from "next/image";
import { client } from "../../../../../lib/sanity.client";
import urlFor from "../../../../../lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../../../../components/RichTextComponent";
import { Fragment, ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faWeightHanging,
  faRulerCombined,
} from "@fortawesome/free-solid-svg-icons";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 30; // revalidate this page every 30 seconds

export async function generateStaticParams() {
  const query = groq`
		*[_type == "product"]
		{
			slug
		}
		`;

  const slugs: Product[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

async function Product({ params: { slug } }: Props) {
  const query = groq`
		*[_type == "product" && slug.current == $slug][0] {
      ...,
      name,
      category->{name},
      brand->,
      origin->,
      colors[]->
    }
	`;

  const product: Product = await client.fetch(query, { slug });

  return (
    <Fragment>
      <div className="py-16 pr-[2em] pl-[2em] bg-black lg:text-left">
        <div className="container">
          <div className="row lg:flex lg:justify-center">
            <div className="col static w-full mb-7 md:w-6/12 lg:w-[35em] lg:h-[35em] lg:mr-[1em]">
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  width={560}
                  height={560}
                  loading="eager"
                  priority={true}
                />
              )}
            </div>

            <div className="col static md:w-6/12 lg:w-[38em] lg:text-left">
              <p className="text-white">${product.price}</p>
              <h1 className="text-white text-4xl">{product.name}</h1>
              <hr className="h-px my-8 bg-[#b4a07c] border-0" />
              <p className="text-left text-primary-50 text-[#b4a07c]">
                Detalles
              </p>
              <p className="text-white text-left text-primary-50">
                Toda la descripcion
              </p>
              <hr className="h-px my-8 bg-[#b4a07c] border-0" />
              <p className="-mb-1 text-left text-primary text-[#b4a07c]">
                Marca
              </p>
              <p className="text-white text-left text-primary-50 ">
                {product.brand.name}
              </p>
              <hr className="h-px my-8 bg-[#b4a07c] border-0" />
              {product.colors && (
                <p className="mb-2 text-left text-primary text-[#b4a07c]">
                  Colores
                </p>
              )}

              {product.colors && (
                <div className="inline-flex flex-row justify-start items-start gap-x-[1em] gap-y-3 mx-auto -mb-9 ml-[auto] md:flex-row">
                  {product.colors?.map((color) => (
                    <Image
                      src={urlFor(color.image).url()}
                      alt={color.name}
                      width={32}
                      height={32}
                      loading="eager"
                      priority={true}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="static py-28 text-center bg-black lg:static">
        <div className="container">
          <div className="row justify-center md:text-center lg:flex lg:items-center">
            <div className="col md:w-3/12">
              <FontAwesomeIcon
                icon={faGlobe}
                color="#b4a07c"
                width={"2em"}
              ></FontAwesomeIcon>
              <h3 className="mb-3 text-2xl text-[#b4a07c]">Origen</h3>
              <p className="text-white">pais de origen</p>
            </div>

            <div className="col md:w-3/12">
              <FontAwesomeIcon
                icon={faWeightHanging}
                color="#b4a07c"
                width={"2em"}
              ></FontAwesomeIcon>
              <h3 className="mb-3 text-2xl text-[#b4a07c]">Peso</h3>
              <p className="text-white">el peso del prod</p>
            </div>

            <div className="col md:w-3/12">
              <FontAwesomeIcon
                icon={faRulerCombined}
                color="#b4a07c"
                width={"2em"}
              ></FontAwesomeIcon>
              <h3 className="mb-3 text-2xl text-[#b4a07c]">Dimensiones</h3>
              <p className="text-white">dimensiones del prod</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Product;
