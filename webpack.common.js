const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        app:'./src/main.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({title:'UML Test',template: './src/index.html'}),
    ],
    output: {
        filename: "app.js",
        path: path.resolve(__dirname,'dist')
    }
};