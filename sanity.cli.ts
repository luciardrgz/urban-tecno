import { defineCliConfig } from "sanity/cli";

var projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string;
var dataset = process.env.NEXT_PUBLIC_SANITY_DATASET as string;

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
});
