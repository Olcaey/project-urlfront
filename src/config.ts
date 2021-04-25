export const apiUrl = process.env.API_URI || 'https://hq.visitmypost.com/graphql/';
export const gtmId = process.env.GTM_ID || "GTM-W8PSKHJ";
export const sentryDsn = process.env.SENTRY_DSN;
const sampleRate = parseFloat(process.env.SENTRY_APM || "");
export const sentrySampleRate = isNaN(sampleRate) ? 0 : sampleRate;
