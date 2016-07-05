module.exports = {
	entry: __dirname + '/src/index.js',

	output: {
		path: __dirname + '/public/',
		filename: 'bundle.js'
	},

	devServer: {
		inline: true,
		port: 7771,
		contentBase: __dirname + '/public/'
	},

	module: {
		loaders: [{
			test: /\.js?$/,
			loader: 'babel',
			exclude: /node_modules/,
			query: {
				cacheDirectory: true,
				presets: ['es2015', 'react']
			}
		}]
	}
};
