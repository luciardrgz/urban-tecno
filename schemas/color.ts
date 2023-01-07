import { defineField, defineType } from "sanity";

export default defineType({
  name: "color",
  title: "Colores",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Color",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Imagen",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
