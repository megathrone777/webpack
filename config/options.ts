import { Configuration, ProgressPlugin } from "webpack";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import NodePolyfillWebpackPlugin from "node-polyfill-webpack-plugin";
import TsconfigPathsWebpackPlugin from "tsconfig-paths-webpack-plugin";
import { cwd } from "process";
import { resolve } from "path";

const rootDir: string = cwd();
const options: Configuration = {
  context: rootDir,
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        exclude: "/node_modules/",
        include: resolve(rootDir, "src"),
        loader: "ts-loader",
        test: /\.(ts|tsx)$/,
        options: {
          transpileOnly: true,
        },
      },
      {
        loader: "file-loader",
        test: /\.(eot|svg|ttf|woff|woff2|otf|png|jpg|jpeg|gif)$/,
        type: "asset/resource",
        options: {
          name: "[name].[contenthash].[ext]",
        },
      },
    ],
  },
  optimization: {
    removeAvailableModules: true,
    splitChunks: {
      chunks: "async",
      cacheGroups: {
        commons: {
          chunks: "async",
          name: "vendors",
          reuseExistingChunk: true,
          test: /[\\/]node_modules[\\/]/,
        },
        default: {
          chunks: "async",
          filename: "js/chunk.[chunkhash].js",
          reuseExistingChunk: true,
        },
      },
    },
  },
  output: {
    asyncChunks: true,
    chunkFilename: "js/chunk.[chunkhash].js",
    clean: true,
    filename: "js/bundle.js",
    path: resolve(rootDir, "build"),
    pathinfo: false,
  },
  performance: {
    hints: false,
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: true,
      typescript: {
        mode: "readonly",
      },
    }),
    new NodePolyfillWebpackPlugin(),
    new ProgressPlugin({
      activeModules: true,
    }),
  ],
  resolve: {
    cache: true,
    extensions: [".tsx", ".ts", ".js"],
    modules: ["node_modules"],
    plugins: [new TsconfigPathsWebpackPlugin()],
    symlinks: false,
  },
};

export { options };
