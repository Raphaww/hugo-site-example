const merge = require("webpack-merge");
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackShellPlugin = require('webpack-shell-plugin');

const common = require("./webpack.common.js");

module.exports = merge(common, {
   mode: "production",

   output: {
      filename: "build.js"
   },

   optimization: {
      minimizer: [
         new TerserPlugin(),

         new MiniCssExtractPlugin({
            filename: "build.css"
         }),

         new OptimizeCSSAssetsPlugin({})
      ]
   },

   plugins: [
      new WebpackShellPlugin({
         onBuildEnd: ['cp ./dist/build.css ./site/layouts/partials/build.css']
      })
   ]
});
