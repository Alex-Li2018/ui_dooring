import Vue from 'vue';
import * as Sentry from '@sentry/vue';
import { Integrations } from '@sentry/tracing';
import router from '@/router/index';
import conf from '@/config';

Sentry.init({
    Vue,
    dsn: 'https://64a809e29e444b4e9f2b70bc04b665fa@o1008382.ingest.sentry.io/5972285',
    // 上报时的在控制台的一些必要日志
    debug: false,
    // 版本号
    release: conf.VERSION,
    integrations: [
        new Integrations.BrowserTracing({
            routingInstrumentation: Sentry.vueRouterInstrumentation(router),
            tracingOrigins: ['localhost', 'http://www.uidooring.cn/', /^\//],
        }),
    ],
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
});
