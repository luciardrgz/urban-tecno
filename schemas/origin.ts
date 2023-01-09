import { defineField, defineType } from "sanity";

export default defineType({
  name: "origin",
  title: "País de origen",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Pais",
      type: "string",
    }),
  ],
});
