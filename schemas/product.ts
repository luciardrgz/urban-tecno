import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Productos",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nombre del producto",
      type: "string",
    }),
    defineField({
      name: "brand",
      title: "Marca",
      type: "array",
      of: [{ type: "reference", to: { type: "brand" } }],
    }),
    defineField({
      name: "category",
      title: "Categoria",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "details",
      description: "Breve fragmento para la tienda...",
      title: "Detalles",
      type: "string",
    }),
    defineField({
      name: "origin",
      title: "Pais de origen",
      type: "reference",
      to: [{ type: "origin" }],
    }),
    defineField({
      name: "image",
      title: "Foto",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "price",
      title: "Precio",
      type: "number",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    }),
  ],
});
