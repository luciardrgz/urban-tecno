import { groq } from "next-sanity";
import SingleProduct from "../../../../../components/SingleProduct";
import { client } from "../../../../../lib/sanity.client";
import urlFor from "../../../../../lib/urlFor";

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
      info,
      images[],
      brand->,
      origin->,
      colors[]->
    }
	`;

  const product: Product = await client.fetch(query, { slug });

  const images: string[] = product.images?.map((image) => urlFor(image).url());

  return (
    <>
      {product && (
        <SingleProduct product={product} images={images}></SingleProduct>
      )}
    </>
  );
}

export default Product;
