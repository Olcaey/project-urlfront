import { Integrations } from "@sentry/tracing";
import * as Sentry from "@sentry/browser";
import type { AppProps } from "next/app";
import Head from "next/head";
import * as React from "react";
import TagManager from "react-gtm-module";

import { apiUrl, gtmId, sentryDsn, sentrySampleRate} from "../config";

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
  <>
    <Head>
      <title>VisitMyPost Url</title>
      <link rel="preconnect" href={apiUrl} />
      <link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
      <link rel="apple-touch-icon" type="image/png" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" href="/favicon-36.png" />
      <link rel="icon" type="image/png" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <link rel="manifest" href="/manifest.json" />
    </Head>

    <Component {...pageProps} />
  </>
);

export default App;
