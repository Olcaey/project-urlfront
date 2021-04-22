import { Integrations } from "@sentry/tracing";
import * as Sentry from "@sentry/browser";
import type { AppProps } from "next/app";
import Head from "next/head";
import * as React from "react";
import TagManager from "react-gtm-module";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import { apiUrl, gtmId, sentryDsn, sentrySampleRate} from "../config";
import '../global.css'

if (process.env.GTM_ID) {
  TagManager.initialize({ gtmId: gtmId });
}

if (sentryDsn) {
  Sentry.init({
    dsn: sentryDsn,
    // @ts-ignore
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: sentrySampleRate,
  });
}

const App = ({
  Component,
  pageProps
}: AppProps) => (
  <ApolloProvider client={client}>
    <Head>
      <title>VisitMyPost Url</title>
      <link rel="preconnect" href={apiUrl} />
      <link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
      <link rel="apple-touch-icon" type="image/png" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" href="/favicon-36.png" />
      <link rel="icon" type="image/png" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="title" content="Meta Tags — Preview, Edit and Generate" />
      <meta name="description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://metatags.io/"/>
      <meta property="og:title" content="Meta Tags — Preview, Edit and Generate"/>
      <meta property="og:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"/>
      <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>
      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://metatags.io/"/>
      <meta property="twitter:title" content="Meta Tags — Preview, Edit and Generate"/>
      <meta property="twitter:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"/>
      <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>
    </Head>

    <Component {...pageProps} />
  </ApolloProvider>
);

export default App;
