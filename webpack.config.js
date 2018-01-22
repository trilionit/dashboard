const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',

    output: {
    	path: path.resolve(__dirname, './public/dist'),
    	filename: 'bundle.js',
    	publicPath: 'public/dist'
    },

    devServer: {
        historyApiFallback: true,
        contentBase: './',
        hot: true
    },
    
    module:{
    	rules:[
    		{
    			test: /\.jsx?$/,
    			exclude: /(node_modules)/,
    			use:[
    				{
    					loader: 'babel-loader',
                        options: {
                            presets: ['env', 'react']
                        },
    				}
    			]
    		},
    		{
    			test: /\.scss$/,
    			use: ExtractTextPlugin.extract({
          			fallback: 'style-loader',
          			use: ['css-loader', 'sass-loader']
        		})
    		}
    		// },
    		// {
    		// 	test: /\.scss$/,
    		// 	loader: extractPlugin.extract(['css-loader', 'sass-loader'])
    		// }
    	]
    },
     plugins: [
     	new ExtractTextPlugin('main.css'),
     	new UglifyJsPlugin({
	    	test: /\.js($|\?)/i
	  		}),
    ]
}
