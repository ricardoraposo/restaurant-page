const HtmlWebpackPlugin = require('html-webpack-plugin')
const path  = require('path')

module.exports ={
	mode: 'development',
	entry: './src/index',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		clean:true,
	},
	devtool: 'inline-source-map',
	plugins: [
		new HtmlWebpackPlugin({
			title: "Restaurant Page - The Odin Project"
		})
	],
	module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}
