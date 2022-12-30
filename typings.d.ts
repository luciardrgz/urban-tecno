import { Image, Slug } from "sanity";

type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Product extends Base {
  product_name: string;
  image: Image;
  details: string;
  price: number;
  slug: Slug;
}
