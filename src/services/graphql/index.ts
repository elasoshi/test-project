import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_BASE_URL || "https://countries.trevorblades.com",
  cache: new InMemoryCache(),
});

export const GET_COUNTRIES = gql`
  query GetCountries($code: String) {
    countries(filter: { code: { regex: $code } }) {
      code
      name
    }
  }
`;

export default client;
