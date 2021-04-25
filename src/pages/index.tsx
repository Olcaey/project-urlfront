import Router, { useRouter } from "next/router";
import React, { useEffect } from "react";

import Layout from "../components/Layout";
import InfoMessage from "../components/InfoMessage";
import { paths } from "../paths";

const HomeView: React.FC = () => {
  const { pathname } = useRouter();
  const { base, site } = paths;

  useEffect(() => {
    if (pathname === base) {
      Router.push(site);
    }
  }, []);

  return (
    <Layout>
      <InfoMessage />
    </Layout>
  )
};

export default HomeView;
