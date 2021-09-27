const path = require('path');
const SentryPlugin = require('@sentry/webpack-plugin');

function getPlugins () {
    const plugins = [];
    if (process.env.NODE_ENV === 'production') {
        plugins.push(
            new SentryPlugin({
                include: './dist',
                release: process.env.RELEASE_VERSION,
                configFile: 'sentry.properties',
                urlPrefix: '~/'
            })
        );
    }
}

module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: process.env.NODE_ENV === 'development',
    devServer: {
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {
            '/api': {
                target: 'https://www.task-api.top/v1',
                changeOrigin: true,
                secure: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    configureWebpack: {
        resolveLoader: {
            modules: [
                'node_modules'
            ]
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src')
            }
        },
        plugins: getPlugins()
    }
};
