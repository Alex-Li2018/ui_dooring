const path = require('path');
const SentryPlugin = require('@sentry/webpack-plugin');

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
        plugins: [
            // ...省略一堆
            new SentryPlugin({
                include: './dist',
                release: process.env.RELEASE_VERSION,
                configFile: 'sentry.properties',
                urlPrefix: '~/'
            })
        ]
        // module: {
        //     rules: [
        //         {
        //             test: /\.js|\.vue$/,
        //             loader: 'eslint-loader',
        //             enforce: 'pre',
        //             exclude: /node_modules/,
        //             include: [path.resolve(__dirname, 'src')],
        //             options: {
        //                 // 这里的配置项参数将会被传递到 eslint 的 CLIEngine
        //                 // formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
        //                 emitWarning: true,
        //                 emitError: false
        //             }
        //         }
        //     ]
        // }
    }
};
