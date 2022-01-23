import React from "react";
import ReactDOM from "react-dom";
import { RestLink } from "apollo-link-rest";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import "./scss/main.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const restLink = new RestLink({ uri: "http://localhost:5000/api/candidates/" });

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: restLink,
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
