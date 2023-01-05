const { StylableWebpackPlugin } = require('@stylable/webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

/** @type {import('webpack').Configuration} */
module.exports = {
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                type: 'asset',
            },
            {
                test: /\.css$/i,                                                                                                                                                             
                use: ["style-loader", "css-loader"],                                                                                        
                include: path.resolve(__dirname, 'node_modules', '@szhsin', 'react-menu')                                                                                                              
              }, 
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    plugins: [new StylableWebpackPlugin(), new HtmlWebpackPlugin({ title: 'Stylable App' })],
    cache: { type: 'filesystem' },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
};
