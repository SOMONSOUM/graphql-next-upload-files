import "server-only";

import { ApolloClient, from, HttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { cookies } from "next/headers";
import { sha256 } from "js-sha256";
import { createPersistedQueryLink } from "@apollo/client/link/persisted-queries";

import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { uploadLink } from "./links";

const __DEV__ = process.env.NEXT_PUBLIC_NODE_ENV ?? "development";

if (__DEV__) {
  loadDevMessages();
  loadErrorMessages();
}

const authLink = setContext(async (_, { headers }) => {
  const token = cookies().get("accessToken")?.value;

  return {
    headers: {
      authorization: token ? `Bearer ${token}` : "",
      ...headers,
    },
  };
});

const persistedQueryLink = createPersistedQueryLink({
  sha256,
  useGETForHashedQueries: true,
});

const httpLink = new HttpLink({ uri: process.env.NEXT_PUBLIC_GRAPH_QL_URL });

// Combine links appropriately
const link = from([authLink, persistedQueryLink, uploadLink, httpLink]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
