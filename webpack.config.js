var path = require("path");
//var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: "babel-loader",
          // options: {
          //   presets: ["@babel/preset-env"],
          // },
        },
      },
      {
        test: /\.(c|sa|cs)ss$/,

        use: [
          // {
          //   loader: MiniCssExtractPlugin.loader,
          //   options: {
          //     sourceMap: true,
          //   },
          // },
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  // plugins: [new MiniCssExtractPlugin()],
  externals: {
    react: "commonjs react",
  },
};
