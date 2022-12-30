export default {
  name: "product",
  title: "Productos",
  type: "document",
  fields: [
    {
      name: "product_name",
      title: "Nombre del Producto",
      type: "string",
    },
    {
      name: "image",
      title: "Foto",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "details",
      title: "Detalles",
      type: "string",
    },
    {
      name: "price",
      title: "Precio",
      type: "number",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
  ],
};
