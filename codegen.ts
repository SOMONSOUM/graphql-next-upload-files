import { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  schema:
    process.env.NEXT_PUBLIC_GRAPH_QL_URL ??
    "https://dtf-graphql.uat.moc.gov.kh/api/v1/graphql",
  documents: "src/**/*.{ts,tsx}",
  ignoreNoDocuments: true,
  generates: {
    "src/generated/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        persistedDocuments: true,
      },
    },
  },
};

export default config;
