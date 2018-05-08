const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: {app:'./app.js'},
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/"
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': resolve('src'),
            "~": resolve("src/components")
        }
    },
    devtool: 'inline-source-map',
    // devServer: {
    //     contentBase: './dist',
    //     host:true
    // },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({title:'UML Test',template: './index.html'}),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};


