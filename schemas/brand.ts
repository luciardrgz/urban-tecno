import { defineField, defineType } from "sanity";

export default defineType({
  name: "brand",
  title: "Marcas",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nombre",
      type: "string",
    }),
    defineField({
      name: "country_of_origin",
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
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
