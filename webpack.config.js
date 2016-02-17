module.exports = [{
  entry: {
    client: './src/client'
  },
  output: {
    path: 'dist',
    filename: 'client.js'
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
  target: 'web',
  devtool: 'source-map'
},
{
  entry: {
    server: './src/server'
  },
  output: {
    path: 'dist',
    filename: 'server.js'
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
  target: 'node',
  devtool: 'source-map'
}];
