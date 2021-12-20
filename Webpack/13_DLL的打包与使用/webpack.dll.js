const path = require("path");
const { DllPlugin } = require("webpack")
const TerserWebpackPlugin = require("terser-webpack-plugin")

/**
 * @type {import("webpack").Configuration}
 */
const config = {
  mode: "production",
  entry: { react: ["react", "react-dom"] },
  output: {
    path: path.resolve(__dirname, "dll"),
    filename: "dll_[name].js",
    library: "dll_[name]"
  },
  plugins: [
    new DllPlugin({
      context: __dirname,
      name: "dll_[name]",
      path: path.resolve(__dirname, "./dll/manifest.json")
    })
  ],
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({
        extractComments: false
      })
    ]
  }
};

module.exports = config;
