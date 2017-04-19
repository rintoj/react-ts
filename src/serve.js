process.env.NODE_ENV = 'development';

var webpack = require("webpack");
var webpackConfig = require('../config/webpack.config')
var WebpackDevServer = require("webpack-dev-server");

var compiler = webpack(webpackConfig)
var server = new WebpackDevServer(compiler, {
  hot: true,
  stats: {
    colors: true
  }
});

server.listen(8080, 'localhost', function() {
  console.log('started server at http://localhost:8080')
})