export const apiUrl = process.env.API_URI;
export const gtmId = process.env.GTM_ID;
export const sentryDsn = process.env.SENTRY_DSN;
const sampleRate = parseFloat(process.env.SENTRY_APM || "");
export const sentrySampleRate = isNaN(sampleRate) ? 0 : sampleRate;
