import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack, { css } from "webpack";
import { BuildOptions } from "./types/config";
import { BuildCssLoaders } from "./loaders/buildCssLoaders";

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };
  const cssLoader = BuildCssLoaders(options.isDev);

  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  return [svgLoader, fileLoader, typeScriptLoader, cssLoader];
};
