import { useState, useEffect } from "react";
import CookieModal from "./CookieModal";
import NotFound from "./NotFound";
import Redirect from "./RedirectedSuccess";
import RejectedMessage from "./RejectedMessage";
import cookie from "js-cookie";
import { useQuery, gql } from "@apollo/client";


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

const App = () => {

	const { data, error } =  useQuery(QUERY, {
		variables: {
			shortcode:"q4ro9u3t1z3j",
		}
	});

  console.log(data)

  const isUrlValid = true;
  const isGDPR = true;
  const [isAcceptedCookies, setIsAcceptedCookies] = useState(false);
  const [isRejected, setIsRejected] = useState(false);
  
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
