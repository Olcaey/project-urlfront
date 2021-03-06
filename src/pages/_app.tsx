import { Integrations } from "@sentry/tracing";
import * as Sentry from "@sentry/browser";
import type { AppProps } from "next/app";
import Head from "next/head";
import * as React from "react";
import TagManager from "react-gtm-module";

import { apiUrl, gtmId, sentryDsn, sentrySampleRate} from "../config";
import { META_DEFAULTS }from '../core/config'
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

const { description, title, type } = META_DEFAULTS;

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
      <meta name="title" content={title} />
      <meta name="description" content={description}/>
      <meta property="og:type" content={type}/>
      <meta property="og:url" content={META_DEFAULTS.url}/>
      <meta property="og:title" content={title} />
      <meta property="og:description"  content={description}/>
      <meta property="og:image" content="/logo.png"/>
      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://metatags.io/"/>
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description}/>
      <meta property="twitter:image" content="/favicon-36.png"/>
    </Head>

    <Component {...pageProps} />
  </>
);

export default App;
