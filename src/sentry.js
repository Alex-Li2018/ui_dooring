import Vue from 'vue';
import * as Sentry from '@sentry/vue';
import { Integrations } from '@sentry/tracing';
import { constantRoutes } from '@/router/index';

Sentry.init({
    Vue,
    dsn: 'https://64a809e29e444b4e9f2b70bc04b665fa@o1008382.ingest.sentry.io/5972285',
    integrations: [
        new Integrations.BrowserTracing({
            routingInstrumentation: Sentry.vueRouterInstrumentation(constantRoutes),
            tracingOrigins: ['localhost', 'my-site-url.com', /^\//],
        }),
    ],
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
});
