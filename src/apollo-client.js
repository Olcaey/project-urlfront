import { ApolloClient, InMemoryCache } from "@apollo/client";
import { apiUrl } from './config.ts'

const client = new ApolloClient({
    uri: apiUrl || 'https://hq.visitmypost.com/graphql/',
    cache: new InMemoryCache(),
});

export default client;