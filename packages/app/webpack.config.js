/* eslint-disable @typescript-eslint/no-var-requires */
const BundleAnalyzerPlugin =
    require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const path = require('path');

const clientPort = 8080;

const smp = new SpeedMeasurePlugin();

const webpackConfig = smp.wrap((env, argv) => {
    const isDevelopment = argv.mode !== 'production';
    const entry = isDevelopment ? 'client' : 'server';

    return {
        target: 'web',
        entry: path.resolve(__dirname, `./src/${entry}.tsx`),
        output: {
            filename: isDevelopment ? '[name].js' : '[name].[chunkhash:8].js',
            publicPath: isDevelopment ? '/' : '/dist',
            path: path.join(__dirname, './dist'),
        },
        devServer: {
            port: clientPort,
            historyApiFallback: true, // prevent react-router from falling trying to get the route on refresh
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    enforce: 'pre',
                    loader: 'source-map-loader',
                    exclude: /node_modules/, // prevent error: failed to parse source map
                },
                {
                    test: /\.(ts)x?$/,
                    use: [
                        isDevelopment && {
                            loader: 'babel-loader',
                            options: {
                                plugins: ['react-refresh/babel'],
                            },
                        },
                        {
                            loader: 'ts-loader',
                            options: {
                                projectReferences: true, // webpack creating typescript project references
                                configFile: require.resolve('./tsconfig.json'),
                            },
                        },
                    ].filter(Boolean),
                    exclude: /node_modules/,
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/,
                    loader: 'file-loader',
                },
                {
                    test: /\.css$/i,
                    use: [MiniCssExtractPlugin.loader, 'css-loader'],
                },
            ],
        },
        resolve: {
            modules: ['node_modules'],
            extensions: ['.ts', '.tsx', '.js'],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: require.resolve('./src/public/index.html'),
            }),
            new MiniCssExtractPlugin(),
            isDevelopment && new ReactRefreshPlugin(),
            isDevelopment && new BundleAnalyzerPlugin(),
        ].filter(Boolean),
        optimization: {
            splitChunks: {
                chunks: 'all',
            },
        },
    };
});

module.exports = webpackConfig;
