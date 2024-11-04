// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://fd7def4069a9d615745cb29915e3f40a@o4508177391222784.ingest.de.sentry.io/4508177394171984",
  // Feedback integration
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "dark",
    }),
  ],
  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
