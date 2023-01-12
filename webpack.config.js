const path = require("path")
const nodeExternals = require("webpack-node-externals")
const ESLintPlugin = require("eslint-webpack-plugin")
const NodemonPlugin = require("nodemon-webpack-plugin")

const config = {
  entry: "./index.js",
  output: {
    clean: true,
    filename: "index.js",
    path: path.resolve("./build"),
  },
  resolve: {
    alias: {
      "@services": path.resolve("./services"),
    },
  },
  plugins: [
    new ESLintPlugin({
      fix: true,
    }),
    new NodemonPlugin({
      script: "./build/index.js",
      nodeArgs: ["--inspect"],
      watch: [path.resolve("./build")],
      ext: "js,jsx",
      delay: 1000,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  externalsPresets: { node: true },
  externals: [nodeExternals()],
}

module.exports = (env, argv) => {
  if (argv.mode === "development") {
    config.watch = true
    config.devtool = "eval-source-map"
  }

  if (argv.mode === "production") {
    config.devtool = "source-map"
  }

  return config
}
