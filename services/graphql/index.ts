import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com",
  cache: new InMemoryCache(),
});

export const GET_COUNTRIES = gql`
  query Countries {
    countries {
      code
      name
    }
  }
`;

export default client;
