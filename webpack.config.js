var webpack = require('webpack');
var path = require('path');
module.exports = {
	entry: path.resolve(__dirname,"src/index.js"),
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'main.js'
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
		    {
                test: /\.scss$/,
                loader: 'sass-loader',
                include: path.resolve(__dirname,"src")
            },
			{
				test: /\.js/,
				loader: ["babel"],
				query: {
					presets: ['es2015', 'react']
				}
			},
			
		]
	}
}