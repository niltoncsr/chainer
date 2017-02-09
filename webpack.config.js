module.exports = {
	entry: './src/scripts/index.js',
	output: {
		path: './dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: { presets: ['es2015'] }
			}
		]
	},
	resolve: {
		alias: { 'vue': 'vue/dist/vue.js' }
	}
}
