const path = require("path");
const webpack = require("webpack");

module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: ["../src/**/*.stories.@(mdx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  typescript: {
    check: true,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  webpackFinal: (config) => {
    config.module.rules.push(
      {
        test: /\,css&/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [require("tailwindcss"), require("autoprefixer")],
            },
          },
        ],
      },
      {
        // turn tw strings into plain strings for final build
        // tw`` is for development tools only
        test: /\.tsx?$/,
        loader: "string-replace-loader",
        options: {
          search: /tw\s?`([^`]*`)/g,
          replace: (match) => match.replace("tw", ""),
        },
      }
    );
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        // TODO use tsconfig-paths-webpack-plugin when it supports webpack 5 instead
        "@utils": path.resolve(__dirname, "../src/utils"),
        "@src": path.resolve(__dirname, "../src"),
      },
    };
    config.plugins = [
      ...config.plugins,
      new webpack.ProvidePlugin({
        process: "process/browser",
      }),
    ];

    return config;
  },
};
