const HtmlWebPackPlugin = require("html-webpack-plugin");
const DotenvWebPackPlugin = require('dotenv-webpack')
const path = require("path");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html"
});

const dotenvWebpackPlugin = new DotenvWebPackPlugin({
  path: './dotenvs/local.env', // load this now instead of the ones in '.env'
  safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
  systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
  silent: true // hide any errors
});

module.exports = {
  entry: "./src/index.js", // custom entry point
  output: { // custom output
    path: path.resolve('./dist'), // where to place de build
    filename: 'bundled.js' // name of the build generated, if not exist
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [ // import as simple array of elements: ["style-loader", "css-loader"] or objects
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: { // options for css loaders
              modules: true, // allows use css-module
              importLoaders: 1, // configures how many loaders before css-loader should be applied
              localIdentName: "[name]_[local]_[hash:base64]", // configure the generated identification
              sourceMap: true,
              minimize: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    htmlWebpackPlugin,
    dotenvWebpackPlugin,
  ]
};