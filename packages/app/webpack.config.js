/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rootWebpackConfig = require('../../webpack.config');
const path = require('path');

/** @type import('webpack').Configuration */
module.exports = {
    ...rootWebpackConfig,
    entry: {
        main: require.resolve('./src/client.tsx'),
    },
    plugins: [
        ...rootWebpackConfig.plugins,
        new HtmlWebpackPlugin({
            template: require.resolve('./src/public/index.html'),
        }),
    ],
};
