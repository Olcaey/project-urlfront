import { ServerResponse } from "http";

export type Maybe<T> = T | undefined | null;

export const maybe = <T>(exp: () => T, d?: T) => {
  try {
    const result = exp();
    return result === undefined ? d : result;
  } catch {
    return d;
  }
};

export const isServer = () => {
  return typeof window === 'undefined';
};

interface RedirectOptions {
  replace: boolean;
}

export const pageRedirect = (
  res: Maybe<ServerResponse>,
  location: string,
  { replace }: RedirectOptions,
) => {
  if (isServer()) {
    // A 301 redirect means that the page has permanently moved to a new location.
    // A 302 redirect means that the move is only temporary. Search engines need
    // to figure out whether to keep the old page, or replace it with the one
    // found at the new location.
    res?.writeHead(301, {
      Location: location,
    });
    res?.end();
  } else {
    // https://nextjs.org/docs/api-reference/next/router
    // You don't need to use Router for external URLs,
    // window.location is better suited for those cases.
    if (replace) {
      window.location.replace(location);
    } else {
      window.location.href = location;
    }
  }
};