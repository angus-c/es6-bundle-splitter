var bundles = ['server', 'client'];

module.exports = bundles.map(function (name) {
  var config = {};
  config.entry = './src/' + name;
  config.output = {
    path: 'dist',
    filename: name + '.js'
  };
  config.module = {
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
  };
  config.node = {
    console: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  };
  config.target = name === 'server' ? 'node' : 'web';
  config.devtool = 'source-map';
  return config;
});
