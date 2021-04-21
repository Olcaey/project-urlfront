import { useState, useEffect } from "react";
import CookieModal from "./CookieModal";
import Redirect from "./RedirectedSuccess";
import RejectedMessage from "./RejectedMessage";
import cookie from "js-cookie";
import { EU_COUNTRIES } from '../core/utils';

const App = ({ data }) => {

  const userCountry = data.publicUrl.country.code;
  
  const isUserFromEU = EU_COUNTRIES.includes(userCountry);
  const [isAcceptedCookies, setIsAcceptedCookies] = useState(false);
  const [isRejected, setIsRejected] = useState(false);

  useEffect(() => {
    if (!isUserFromEU) {
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
    <Redirect 
      URL= {data.publicUrl.fullUrl}
    />
  ) : isRejected ? (
    <RejectedMessage />
  ) : (
    <CookieModal setCookies={setCookie} rejectCookie={rejectCookie} />
  );
};

export default App;
