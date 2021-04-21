import App from "../components/App";
import Layout from "../components/layout";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { apiUrl } from "../config";

export default function Home({ launches }) {
  console.log(launches);
  return (
    <Layout>
      <App />
    </Layout>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: apiUrl || 'https://hq.visitmypost.com/graphql/',
    cache: new InMemoryCache(),
  });
  const data = await client.query({
    query: gql`
      query {
        publicUrl(shortcode: "q4ro9u3t1z3j") {
          id
          fullUrl
          facebookPixel
          googleAnalytics
          country {
            code
            country
          }
        }
      }
    `,
  });
  return {
    props: {
      data: data,
    },
  };
}

