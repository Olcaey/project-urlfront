import { useState, useEffect } from "react";
import CookieModal from "./CookieModal";
import Redirect from "./RedirectedSuccess";
import RejectedMessage from "./RejectedMessage";
import cookie from "js-cookie";
import { EU_COUNTRIES } from "../core/utils";

const App = ({ data }) => {
  const userCountry = data.publicUrl.country.code;

  const isUserFromEU = EU_COUNTRIES.includes(userCountry);
  const [isAcceptedCookies, setIsAcceptedCookies] = useState(false);
  const [isRejected, setIsRejected] = useState(false);

  function getMeta(metaName) {
    const metas = document.getElementsByTagName('meta');
  
    for (let i = 0; i < metas.length; i++) {
      if (metas[i].getAttribute('name') === metaName) {
        return metas[i].getAttribute('content');
      }
    }
  
    return 'nope';
  }
  
  console.log('hey', getMeta('title'));

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
    <Redirect URL={data.publicUrl.fullUrl} />
  ) : isRejected ? (
    <RejectedMessage />
  ) : (
    <CookieModal
      URL={data.publicUrl.fullUrl}
      setCookies={setCookie}
      rejectCookie={rejectCookie}
    />
  );
};

export default App;
