import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense";
import ProductList from "../../components/CommerceList";
import PreviewCommerceList from "../../components/PreviewCommerceList";

const query = groq`
*[_type=='product']{
  ...,
  product_name->,
  details[]->
} | order(_createdAt desc)
`;

export default async function HomePage() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#F7AB0A]">
              Loading Preview Data...
            </p>
          </div>
        }
      >
        <PreviewCommerceList query={query} />
      </PreviewSuspense>
    );
  }

  const products = await client.fetch(query);
  //console.log(products);

  return <ProductList products={products} />;
}
