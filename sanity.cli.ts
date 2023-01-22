import { defineCliConfig } from "sanity/cli";

let projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string;
let dataset = process.env.NEXT_PUBLIC_SANITY_DATASET as string;

console.log(projectId);

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
});
