const path = require('path');

module.exports = {
    entry: "./src/app.js",
    output : {
        path: path.join(__dirname, 'public'),
        filename : 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader"
                }
              }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 9000,
        historyApiFallback: true
    }
};