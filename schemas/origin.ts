import { defineField, defineType } from "sanity";

export default defineType({
  name: "origin",
  title: "Paises de origen",
  type: "document",
  fields: [
    defineField({
      name: "c_name",
      title: "Pais",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "c_name",
        maxLength: 96,
      },
    }),
  ],
});
