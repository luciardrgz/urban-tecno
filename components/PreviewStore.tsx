"use client";

import { usePreview } from "../lib/sanity.preview";
import Store from "./Store";

type Props = {
  query: string;
};

export default function PreviewStore({ query }: Props) {
  const products = usePreview(null, query);
  return <Store allProducts={products} />;
}
