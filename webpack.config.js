'use strict';
// global process
const webpack = require('webpack'),
	path = require('path'),	
	LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const ROOT = path.resolve(__dirname, './');

module.exports = {
	entry:{
		fine: ['./lib'],
		broken: ['./lib.broken']
	},
	output: {
		filename: '[name].[chunkhash:6].js',
		path: path.resolve(ROOT, './compiled'),
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			}
		]
	},
	plugins: [
		new LodashModuleReplacementPlugin({
			collections: true,
			shorthands: true,
			caching: true/*,
			cloning: true,
			exotics: true,
			unicode: true,
			currying: true,
			guards: true,
			flattening: true,
			coercions: true,
			deburring: true,
			memoizing: true,
			placeholders: true,
			metadata: true,
			paths: true*/
		}),
		new webpack.ProvidePlugin({
			_: 'lodash'
		})
	]
};
