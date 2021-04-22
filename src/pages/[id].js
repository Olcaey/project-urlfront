import { useRouter } from "next/dist/client/router";
import Home from ".";
import { useQuery, gql } from "@apollo/client";
import NotFound from "../components/NotFound";
import Layout from "../components/layout";
import Loading from "../components/PreLoader";

const QUERY = gql`
  query publicUrl($shortcode: String) {
    publicUrl(shortcode: $shortcode) {
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
`;

const DynamicPage = () => {

  const { query } = useRouter();
  const { data, error, loading } = useQuery(QUERY, {
    variables: {
      shortcode: query.id,
    },
  });

  if (loading) return <Loading/>;
  if (error)
    return (
      <Layout>
        <NotFound />
      </Layout>
    );

  return <Home data={data} />;
};

export default DynamicPage;
