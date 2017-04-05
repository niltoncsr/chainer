var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/app.js',
	output: {
		path: './dist',
		publicPath: '/dist',
		filename: 'bundle.js'
	},
	devtool: 'cheap-source-map',
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				loader: 'eslint-loader',
				exclude: /node_modules/
			},
		],
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: { presets: ['es2015'] }
			},
			{
				test: /\.styl$/,
				loader: ExtractTextPlugin.extract(['css-loader', 'stylus-loader']),
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('styles.css')
	],
	resolve: {
		alias: { 'vue': 'vue/dist/vue.js' }
	}
}
