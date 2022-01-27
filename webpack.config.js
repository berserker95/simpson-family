const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
    return {
        mode: env.mode,
        entry: path.join(__dirname, "src", "index.tsx"),
        output: {
            path: path.resolve(__dirname, "public"),
            publicPath: "/",
            filename: 'bundle.js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(__dirname, "src", "index.html"),
            }),
        ],
        resolve: {
            extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: "babel-loader",
                    exclude: /node_modules/,
                },
            
                {
                    // Some change here
                    test: /\.(s)?[ac]ss$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        'style-loader',
                        // Translates CSS into CommonJS
                        'css-loader',
                        // Compiles Sass to CSS
                        'sass-loader',
                    ],
                }
            ],
        },
        devtool: 'inline-source-map',
        devServer: {
            https: false,
            historyApiFallback: true,
           static: {
            directory: path.join(__dirname, 'public'),
           },
            compress: true,
            port: 9000,
            hot: true,
            host: '0.0.0.0'
        },
    }
}