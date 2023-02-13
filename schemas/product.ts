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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "stock",
      title: "En stock",
      type: "boolean",
    }),
    defineField({
      name: "price",
      title: "Precio",
      type: "number",
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
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "compatibility",
      title: "Compatible con",
      type: "array",
      of: [
        {
          name: "compatibleMothers",
          title: "Mothers",
          type: "reference",
          to: { type: "product" },
          options: {
            filter: 'category->name == "Motherboard"',
          },
        },
      ],
    }),
    defineField({
      name: "weight",
      title: "Peso",
      type: "string",
    }),
    defineField({
      name: "dimensions",
      title: "Dimensiones",
      type: "string",
    }),
    defineField({
      name: "info",
      title: "Especificaciones",
      type: "blockContent",
    }),
    defineField({
      name: "colors",
      title: "Colores",
      type: "array",
      of: [{ type: "reference", to: { type: "color" } }],
    }),
    defineField({
      name: "images",
      title: "Imágenes",
      type: "array",
      of: [
        {
          name: "image",
          title: "Imagen",
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: "slug",
      title: "ID",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
