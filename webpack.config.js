import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import OptimizeCssAssetsPlugin from "optimize-css-assets-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import webpack from "webpack";

const __dirname = new URL(".", import.meta.url).pathname;

export default function webpackConfig(webpackEnv, argv) {
  const isEnvDevelopment = webpackEnv === "development";
  const isEnvProduction = webpackEnv === "production";

  return {
    mode: webpackEnv,

    resolve: {
      extensions: [".js", ".jsx"], // add '.jsx' if using JSX
      modules: [
        path.resolve(__dirname, "src"), // Resolve modules from src directory
        "node_modules", // Also resolve modules from node_modules
      ],
    },

    entry: "./src/main.jsx",

    output: {
      filename: isEnvProduction ? "bundle.[contenthash].js" : "bundle.js",
      path: path.resolve(__dirname, "dist"),
      publicPath: "/",
    },

    devServer: {
      port: 3030,
      historyApiFallback: true,
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        },
        // Rule for processing CSS files
        {
          test: /\.css$/,
          use: [
            isEnvProduction ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
          ],
        },
        // Rule for processing SCSS files
        {
          test: /\.scss$/,
          use: [
            isEnvProduction ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
            "sass-loader",
          ],
        },
        // Rule for processing images and fonts
        {
          test: /\.(png|jpe?g|gif|woff|woff2|eot|ttf|svg)$/,
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "assets/",
          },
        },

        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 8192, // Convert images < 8kb to base64 strings
                name: "images/[name].[hash].[ext]", // Output images to images/ folder
              },
            },
          ],
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html",
        filename: "index.html",
      }),

      // Conditionally add plugins based on environment
      ...(isEnvProduction
        ? [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
              filename: "assets/styles.[contenthash].css",
            }),
          ]
        : []),

      // Define global constants
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(argv.mode),
        "process.env.API_URL": JSON.stringify(
          isEnvProduction
            ? "https://api.prod.example.com"
            : "https://api.dev.example.com"
        ),
        // Add other environment variables as needed
      }),
    ],

    optimization: {
      minimize: isEnvProduction,
      minimizer: [
        new OptimizeCssAssetsPlugin(),
        new TerserPlugin({
          terserOptions: {
            format: {
              comments: false,
            },
          },
          extractComments: false,
        }),
      ],
    },
  };
}

// export default function webpackConfig(webpackEnv, argv) {
//   const isEnvDevelopment = webpackEnv === "development";
//   const isEnvProduction = webpackEnv === "production";

//   return {
//     mode: webpackEnv,

//     output: {
//       filename: isEnvProduction ? "bundle.[contenthash].js" : "bundle.js",
//       path: path.resolve(__dirname, "dist"),
//       publicPath: "/",
//     },

//     entry: "./src/App.jsx",

//     devServer: {
//       port: 3030,
//       historyApiFallback: true,
//     },
//     module: {
//       rules: [
//         {
//           test: /\.(js|jsx)$/,
//           exclude: /node_modules/,
//           use: {
//             loader: "babel-loader",
//             options: {
//               presets: ["@babel/preset-env", "@babel/preset-react"],
//             },
//           },
//         },
//         // Rule for processing CSS files
//         {
//           test: /\.css$/,
//           use: [
//             isEnvProduction ? MiniCssExtractPlugin.loader : "style-loader",
//             "css-loader",
//           ],
//         },
//         // Rule for processing SCSS files
//         {
//           test: /\.scss$/,
//           use: [
//             isEnvProduction ? MiniCssExtractPlugin.loader : "style-loader",
//             "css-loader",
//             "sass-loader",
//           ],
//         },
//         // Rule for processing images and fonts
//         {
//           test: /\.(png|jpe?g|gif|woff|woff2|eot|ttf|svg)$/,
//           loader: "file-loader",
//           options: {
//             name: "[name].[ext]",
//             outputPath: "assets/",
//           },
//         },
//         {
//           test: /\.svg$/,
//           use: {
//             loader: "file-loader",
//             options: {
//               name: "[name].[hash:8].[ext]", // you can customize the filename if needed
//               outputPath: "images/", // output path for the bundled SVGs
//             },
//           },
//         },
//       ],
//     },

//     plugins: [
//       new HtmlWebpackPlugin({
//         template: "./index.html",
//         filename: "index.html",
//       }),
//       isEnvProduction && new CleanWebpackPlugin(),
//       isEnvProduction &&
//         new MiniCssExtractPlugin({
//           filename: "assets/styles.[contenthash].css",
//         }),
//       // Define global constants
//       new webpack.DefinePlugin({
//         "process.env.NODE_ENV": JSON.stringify(argv.mode),
//         "process.env.API_URL": JSON.stringify(
//           isEnvProduction
//             ? "https://api.prod.example.com"
//             : "https://api.dev.example.com"
//         ),
//         // Add other environment variables as needed
//       }),
//     ].filter(Boolean),
//     optimization: {
//       minimize: isEnvProduction,
//       minimizer: [
//         new OptimizeCssAssetsPlugin(),
//         new TerserPlugin({
//           terserOptions: {
//             format: {
//               comments: false,
//             },
//           },
//           extractComments: false,
//         }),
//       ],
//     },
//   };
// }
