const HtmlWebPackPlugin = require("html-webpack-plugin");
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const path = require("path");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html"
});

const interpolateHtmlPlugin = new InterpolateHtmlPlugin({ // object to resolve PUBLIC_URL
  'PUBLIC_URL': './public'
})

module.exports = {
  entry: "./src/index.js", // custom entry point
  output: { // custom output
    path: path.resolve('./dist'), // where to place de build
    filename: 'bundled.js' // name of the build generated, if not exist
  },
  module: {
    rules: [
      {
        test: [/\.svg$/],
        loader: 'file-loader' // svg loader
      },
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
          },
        ]
      }
    ]
  },
  plugins: [
    htmlWebpackPlugin,
    interpolateHtmlPlugin // to resolve decode param '/%PUBLIC_URL%/favicon.ico'
  ]
};