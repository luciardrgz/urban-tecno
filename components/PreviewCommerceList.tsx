"use client";

import { usePreview } from "../lib/sanity.preview";
import CommerceList from "./CommerceList";

type Props = {
  query: string;
};

export default function PreviewCommerceList({ query }: Props) {
  const products = usePreview(null, query);
  return <CommerceList products={products} />;
}
