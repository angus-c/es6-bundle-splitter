module.exports = {
  entry: {
    client: './src/client',
    server: './src/server'
  },
  output: {
    path: 'dist',
    filename: '[name].js'
  },
  module: {
    preLoaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ],
    loaders: [
      {
        // es6 js and jsx
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      }
    ],
    watch: true
  },
  node: {
    console: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  target: ('[name]' === 'server') ? 'node' : 'web',
  devtool: 'source-map'
};
