type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Slug {
  _type: "slug";
  current: string;
}

interface Reference {
  _ref: string;
  _type: "reference";
}

interface Image {
  _type: "image";
  asset: Reference;
}

interface Product extends Base {
  name: string;
  brand: Brand[];
  categories: Category[];
  details: string;
  image: Image;
  price: number;
  slug: Slug;
}

interface Category extends Base {
  name: string;
  description: string;
}

interface Brand extends Base {
  name: string;
  origin: string;
  image: Image;
  slug: Slug;
}

interface Country extends Base {
  name: string;
  slug: Slug;
}
