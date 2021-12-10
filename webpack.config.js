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
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                        },
                    ],
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
        devtool: false,
        devServer: {
            static: {
                directory: path.join(__dirname, 'public'),
            },
            compress: true,
            port: 9000
        },
    }
}