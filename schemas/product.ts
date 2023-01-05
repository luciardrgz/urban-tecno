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
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      name: "brand",
      title: "Marca",
      type: "reference",
      to: [{ type: "brand" }],
    }),
    defineField({
      name: "category",
      title: "Categoria",
      type: "reference", //,
      to: [{ type: "category" }],
    }),
    defineField({
      name: "details",
      description: "Breve fragmento para la tienda...",
      title: "Detalles",
      type: "string",
    }),
    defineField({
      name: "info",
      title: "Información extra",
      type: "blockContent",
    }),
    defineField({
      name: "origin",
      title: "Pais de origen",
      type: "reference",
      to: [{ type: "origin" }],
    }),
    defineField({
      name: "colors",
      title: "Colores",
      type: "array",
      of: [{ type: "reference", to: { type: "color" } }],
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
  ],
});
