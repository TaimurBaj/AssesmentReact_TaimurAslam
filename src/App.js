import React from "react";
import FormComponent from "./Components/FormComponent.js";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
  } from "@apollo/client";


//apollo client 
const client = new ApolloClient({
    uri: "https://api.graphql.jobs/",
    cache: new InMemoryCache(),
  });

function App(){
    return(
    <ApolloProvider client={client}>
        <FormComponent></FormComponent>,
    </ApolloProvider>
    )
}

export default App;