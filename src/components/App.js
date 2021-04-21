import { useState, useEffect } from "react";
import CookieModal from "./CookieModal";
import NotFound from "./NotFound";
import Redirect from "./RedirectedSuccess";
import RejectedMessage from "./RejectedMessage";
import cookie from "js-cookie";
import { useQuery, gql } from "@apollo/client";


const QUERY = gql`
query QUERY($shortcode:String) {
  PublicUrl(shortcode:$shortcode) {
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

const App = () => {

	const { data } =  useQuery(QUERY, {
		variables: {
			$shortcode:"q4ro9u3t1z3j",
		}
	});

  const isUrlValid = true;
  const isGDPR = true;
  const [isAcceptedCookies, setIsAcceptedCookies] = useState(false);
  const [isRejected, setIsRejected] = useState(false);
  console.log(data)
  if (!isUrlValid) return <NotFound />;

  useEffect(() => {
    if (!isGDPR) {
      setIsAcceptedCookies(true);
    } else {
      setIsAcceptedCookies(cookie.get("ACCEPT_TOKEN"));
    }
  }, []);

  function setCookie() {
    cookie.set("ACCEPT_TOKEN", "true", { expires: 180 });
    setIsAcceptedCookies(true);
  }

  function rejectCookie() {
    setIsRejected(true);
  }

  return isAcceptedCookies ? (
    <Redirect />
  ) : isRejected ? (
    <RejectedMessage />
  ) : (
    <CookieModal setCookies={setCookie} rejectCookie={rejectCookie} />
  );
};

export default App;
