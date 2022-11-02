const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    // 'rules' define webpack on what is should do based on certain file types that it encounters
    rules: [
      {
        // 'test' string defines what type of file extensions we want to match against
        // look up files that end in .js or .jsx
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        // 'use' tells webpack which loader to run
        // loader is what converts the code into the correct version
        use: {
          // babel loader looks inside of directory for .babelrc file
          loader: "babel-loader",
        },
      },
      // load css
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      // load html
      {
        test: /\.(html)$/,
        use: ["html-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "/index.html",
    }),
  ],
};
