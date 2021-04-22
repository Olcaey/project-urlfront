import Router, { useRouter } from "next/router";
import { useEffect } from "react";
import App from "../components/App";
import Layout from "../components/layout";
import { paths } from "../paths";

export default function Home({ data }) {
  const { pathname } = useRouter();
  const { base, site } = paths;

  useEffect(() => {
    if (pathname === base) {
      Router.push(site);
    }
  }, []);

  return <Layout>{data && <App data={data} />}</Layout>;
}
