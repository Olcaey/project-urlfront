import React from "react";
import { NextPage } from "next";
import axios from "axios";

import App from "../components/App";
import NotFound from "../components/NotFound";
import Layout from "../components/Layout";
import Loading from "../components/PreLoader";
import { isServer } from "../core/utils";
import { apiUrl } from "../config"

const url = `
  query Url($shortcode: String) {
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

interface ShortcodeProps {
  error?: string;
}

// @ts-ignore
const Shortcode: NextPage<ShortcodeProps> = ({ error }) => {
  if (error) return <Layout> <NotFound /></Layout>;
  return (
    <Layout>
      <Loading />
    </Layout>
  );
};

// @ts-ignore
Shortcode.getInitialProps = async ({ res, query }) => {
  const { shortcode } = query;
  let error;
  try {
    const response = await axios({
      url: apiUrl,
      method: "post",
      // headers: { "User-Agent": "YOUR-SERVICE-NAME" },
      data: {
        query: url,
        variables: {
          shortcode: shortcode
        }
      }
    })
    const { data } = response?.data;

    if (isServer()) {
      // A 301 redirect means that the page has permanently moved to a new location.
      // A 302 redirect means that the move is only temporary. Search engines need
      // to figure out whether to keep the old page, or replace it with the one
      // found at the new location.
      res?.writeHead(301, {
        Location: data?.publicUrl?.fullUrl,
      });
      res?.end();
    } else {
      return <Layout>{data && <App data={data} />}</Layout>;
    }
  } catch (err) {
    const { response } = err;
    if (response) {
      const { data } = response;
      error = `${data.statusCode}: ${data.message}`;
    } else {
      error = "An unknown error occured";
    }
    return { error };
  }
  return {};
};

export default Shortcode;