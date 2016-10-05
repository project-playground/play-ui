var webpack = require('webpack');

module.exports = {
	entry: __dirname + '/src/index.js',

	output: {
		path: __dirname + '/public/',
		filename: 'bundle.js'
	},

	devServer: {
		inline: true,
		colors: true,
		contentBase: __dirname + '/public/',
		host: '0.0.0.0',
		historyApiFallback: true
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
		}, {
			test: /\.css$/,
			exclude: /\.useable\.css$/,
			loader: 'style-loader!css-loader'
		}, {
			test: /\.(png|jpg|svg|eot|woff|woff2|ttf)$/,
			loader: 'url-loader?limit=8192'
		}]
	},
	
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery"
		})
	]
};
