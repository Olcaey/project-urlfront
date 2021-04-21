import { useState, useEffect } from "react";
import CookieModal from "./CookieModal";
import NotFound from "./NotFound";
import Redirect from "./RedirectedSuccess";
import RejectedMessage from "./RejectedMessage";
import cookie from "js-cookie";

const App = () => {
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
