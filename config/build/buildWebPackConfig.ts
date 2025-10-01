import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolver } from "./buildResolver";
import path from "path";
import { buildDevServer } from "./buildDevServer";

export const buildWebPackConfig = (
  options: BuildOptions
): webpack.Configuration => {
  const { mode, paths } = options;
  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolver(),
    devtool: options.isDev ? "inline-source-map" : false,
    devServer: options.isDev ? buildDevServer(options) : undefined,
  };
};
