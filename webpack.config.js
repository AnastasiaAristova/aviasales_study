
const htmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
mode: 'development',
  entry: {
    main: path.resolve(__dirname, "./src/main.js"),
  },
  output: {
    publicPath: "/" /* required for nested routes in vue-router */,

    //filename: "[name].[contenthash:8].js",
    //path: path.resolve(__dirname, "dist"),
    //chunkFilename: "[name].[contenthash:8].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.(eot|ttf|woff|woff2)(\?\S*)?$/,
        loader: "file-loader",
      },
      {
        test: /\.(png|jpe?g|gif|webm|mp4|svg)$/,
        loader: "file-loader",
      },
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    // new CleanWebpackPlugin(),
    // new MiniCssExtractPlugin({
    //   filename: "[name].[contenthash:8].css",
    //   chunkFilename: "[name].[contenthash:8].css",
    // }),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname,"./public/index.html"),
      //favicon: "./public/favicon.ico",
    }),
   /* new webpack.DefinePlugin({
      "process.env.IS_DEVELOPMENT": true,
    }),*/
   /* new webpack.ProvidePlugin({
      process: "process/browser",
    }),*/
  ],
  resolve: {
    alias: {
      /* aliases should be duplicated to the jest.config.js in order to use them in tests */
      "@": path.resolve(__dirname, "./src"),
      "@pages": path.resolve(__dirname, "./src/views/pages"),

      // /* SCSS aliases */
     // "~modules": path.resolve(__dirname, "./src/static/styles/modules"),
      //"~base": path.resolve(__dirname, "./src/static/styles/base"),
    },
    // extensions: ["*", ".js", ".vue", ".json"],
  },
  optimization: {
    // moduleIds: "hashed",
    // runtimeChunk: "single",
    // splitChunks: {
    //   cacheGroups: {
    //     vendor: {
    //       test: /[\\/]node_modules[\\/]/,
    //       name: "vendors",
    //       priority: -10,
    //       chunks: "all",
    //     },
    //   },
    // },
  },
//   devServer: {
//     historyApiFallback: true,
//   },
};