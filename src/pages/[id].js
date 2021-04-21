import { useRouter } from "next/dist/client/router";
import Home from "./index";
import { useQuery, gql } from "@apollo/client";
import NotFound from "../components/NotFound";

const QUERY = gql`
query publicUrl($shortcode:String) {
  publicUrl(shortcode:$shortcode) {
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

  const { query, router } = useRouter();
  if(!query) router.push('https://visitmypost.com')

  const { data, error, loading } =  useQuery(QUERY, {
		variables: {
			shortcode:query.id,
		}
	});
  
  if(loading) return <h1>Loading...</h1>;
  if(error) return <NotFound />;


  return <Home data={data}/>;
};

export default DynamicPage;
