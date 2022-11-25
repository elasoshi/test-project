import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com",
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
