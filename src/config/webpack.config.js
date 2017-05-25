/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies*/
const env = require('react-ts/scripts/env.js')('');
const paths = require('./paths');
const chalk = require('chalk');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');

const isProd = process.env.NODE_ENV === 'production';
const host = process.env.host || 'localhost';
const port = process.env.PORT || 8080;

const extractSass = new ExtractTextPlugin({
  filename: '[name].min.css',
  disable: !isProd,
});

const htmlPluginOptions = isProd ? {
  inject: true,
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    removeRedundantAttributes: true,
    useShortDoctype: true,
    removeEmptyAttributes: true,
    removeStyleLinkTypeAttributes: true,
    keepClosingSlash: true,
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true,
  },
} : {
  inject: true,
  cache: true,
};

module.exports = {
  bail: isProd,
  cache: !isProd,
  devtool: isProd ? 'source-map' : 'cheap-module-source-map',
  entry: [
    paths.appModule,
  ].concat(isProd ? [] : [
    require.resolve('react-dev-utils/webpackHotDevClient'),
    require.resolve('react-error-overlay'),
  ]),
  output: {
    path: paths.dist,
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
  },
  module: {
    loaders: [{
      test: /.tsx?$/,
      loader: 'tslint-loader',
      enforce: 'pre',
    }, {
      exclude: [
        /\.html$/,
        /\.(js|jsx)(\?.*)?$/,
        /\.(ts|tsx)(\?.*)?$/,
        /\.css$/,
        /\.scss$/,
        /\.json$/,
        /\.svg$/,
      ],
      loader: 'url-loader',
      query: {
        limit: 10000,
        name: 'static/media/[name].[hash:8].[ext]',
      },
    }, {
      test: /.tsx?$/,
      loader: 'awesome-typescript-loader',
    }, {
      test: /\.(css|scss)$/,
      loader: isProd ? extractSass.extract({
        use: [{
          loader: 'css-loader',
        }, {
          loader: 'sass-loader',
        }],
        fallback: 'style-loader',
      }) : [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
      }, {
        loader: 'sass-loader',
      }],
    }, {
      test: /\.json$/,
      loader: 'json-loader',
    }, {
      test: /\.svg$/,
      loader: 'file-loader',
      query: {
        name: 'static/media/[name].[hash:8].[ext]',
      },
    }],
  },
  devServer: {
    contentBase: './src',
    compress: true,
    port: 9000,
  },
  target: 'web',
  plugins: [

    /** common plugins */
    new ProgressBarPlugin({
      format: `  :bar ${chalk.green.bold(':percent')} (:etas remaining) ${chalk.gray(':msg...')}`,
      incomplete: chalk.gray('░'),
      complete: chalk.yellow('█'),
      head: '»',
    }),
    new InterpolateHtmlPlugin(env.raw),
    new HtmlWebpackPlugin(Object.assign({
      filename: 'index.html',
      template: paths.template,
    }, htmlPluginOptions)),
    new webpack.DefinePlugin(Object.assign({}, env.stringified, {
      __dirname: '__dirname',
    })),

  ].concat(isProd ? [

    /** production only plugins */
    extractSass,
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false,
      },
      mangle: {
        screw_ie8: true,
      },
      output: {
        comments: false,
        screw_ie8: true,
      },
    }),
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.min\.css$/,
      cssProcessorOptions: {
        discardComments: {
          removeAll: true,
        },
      },
      canPrint: false,
    }),

  ] : [

    /** development only plugins */
    new CaseSensitivePathsPlugin(),
    new WatchMissingNodeModulesPlugin(paths.nodeModules),
    new webpack.HotModuleReplacementPlugin(),

  ]),
};
