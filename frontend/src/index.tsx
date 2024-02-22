import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { BatchHttpLink } from "apollo-link-batch-http";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const link = new BatchHttpLink({
  // If the project will be available on other environments the uri will be taken from the process.env
  uri: "http://localhost:5000/",
  batchMax: 5,
  batchInterval: 200, // Wait no more than 200ms after first batched operation
});

const client = new ApolloClient({
  cache: new InMemoryCache({
    addTypename: false,
  }),
  link: link as unknown as ApolloLink,
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
