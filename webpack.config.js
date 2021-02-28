/* eslint-disable @typescript-eslint/no-var-requires */
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';
console.log(
    '🚀 ~ file: webpack.config.js ~ line 7 ~ isDevelopment',
    isDevelopment
);

/** @type import('webpack').Configuration */
module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                loader: 'source-map-loader',
            },
            {
                test: /\.tsx?$/,
                use: [
                    isDevelopment && {
                        loader: 'babel-loader',
                        options: { plugins: ['react-refresh/babel'] },
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            projectReferences: true,
                            configFile: require.resolve('./tsconfig.json'),
                        },
                    },
                ].filter(Boolean),
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'file-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    plugins: [
        isDevelopment && new ReactRefreshPlugin(),
        new BundleAnalyzerPlugin(),
    ],
};
