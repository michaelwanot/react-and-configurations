const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html"
});

module.exports = {
  module: {
    // entry: "./src/app.js", // custom entry point
    // output: { // custom output
    //   path: path.resolve('dist'),
    //   filename: 'bundled.js'
    // },
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
  plugins: [htmlWebpackPlugin]
};