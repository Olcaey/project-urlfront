import { useState, useEffect } from "react";
import CookieModal from "./CookieModal";
import Redirect from "./RedirectedSuccess";
import RejectedMessage from "./RejectedMessage";
import cookie from "js-cookie";
import { EU_COUNTRIES, BYPASS_WEBSITES } from "../core/utils";

const App = ({ data }) => {

  const URL = data.publicUrl.fullUrl;
  const userCountry = data.publicUrl.country.code;
  const isUserFromEU = EU_COUNTRIES.includes(userCountry);
  const checkByPassSites = BYPASS_WEBSITES.includes(URL)
  const [isAcceptedCookies, setIsAcceptedCookies] = useState(false);
  const [isRejected, setIsRejected] = useState(false);

  useEffect(() => {
    if (!isUserFromEU || checkByPassSites) {
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
    <Redirect URL={URL} />
  ) : isRejected ? (
    <RejectedMessage />
  ) : (
    <CookieModal
      URL={URL}
      setCookies={setCookie}
      rejectCookie={rejectCookie}
    />
  );
};

export default App;