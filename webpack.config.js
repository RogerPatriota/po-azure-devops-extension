  const path = require("path");
  const CopyWebpackPlugin = require("copy-webpack-plugin");

  module.exports = {
    target: "web",
    mode: "development",
    entry: "./src/index.tsx",
    output: {
      filename: "bundler.js",
      path: path.resolve(__dirname, "dist")
    },
    devtool: "inline-source-map",
    devServer: {
      server: {
        type: "https"
      },
      port: 3000,
      static: {
          directory: path.join(__dirname, "dist"),
      },
      open: true,
      liveReload: true
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
      alias: {
        "azure-devops-extension-sdk": path.resolve(
          "node_modules/azure-devops-extension-sdk"
        )
      }
    },
    stats: {
      warnings: false
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader"
        },
        {
          test: /\.scss$/,
          use: [
            "style-loader",
            "css-loader",
            "azure-devops-ui/buildScripts/css-variables-loader",
            "sass-loader",
            "postcss-loader"
          ],
          exclude: /\.module\.s?(c|a)ss$/,
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.woff$/,
          use: [
            {
              loader: "base64-inline-loader"
            }
          ]
        },
        {
          test: /\.html$/,
          use: "file-loader"
        }
      ]
    },
    plugins: [new CopyWebpackPlugin({
      patterns: [
          { from: "**/*.html", context: "src" }
      ]
    })]
  };  