module.exports = {
  module: {
    // 'rules' define webpack on what is should do based on certain file types that it encounters
    rules: [
      {
        // 'test' string defines what type of file extensions we want to match against
        // look up files that end in .js or .jsx
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
      },
    ],
  },
};
