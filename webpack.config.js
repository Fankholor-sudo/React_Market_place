module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: './dist',
      publicPath: '/dist'  // <- was missing
    },
    devtool: 'source-map',
    debug: true,
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },
    externals: {
        'react': 'React'
    },
  }