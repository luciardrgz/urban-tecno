import { defineField, defineType } from "sanity";

export default defineType({
  name: "category",
  title: "Categorias",
  type: "document",
  fields: [
    defineField({
      name: "category_name",
      title: "Nombre",
      type: "string",
    }),
    defineField({
      name: "category_description",
      title: "Descripción",
      type: "text",
    }),
  ],
});
