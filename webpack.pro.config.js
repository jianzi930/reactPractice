const path = require('path'); //path是node.js内置的package，用来处理路径的。
const HtmlWebpackPlugin = require('html-webpack-plugin'); //生成HTML文件
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //抽离CSS
const CleanWebpackPlugin = require('clean-webpack-plugin'); //清除dist文件

module.exports = {
	mode: 'production', //开发模式
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/bundle.js' //将js输出到指定文件夹中
	},
	module: {
		rules: [
			{
				test: /\.(jsx|js)?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader'
			},
			{
				test: /\.(css|pcss)?$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{ loader: 'css-loader', options: { importLoaders: 1 } },
						{
							loader: 'postcss-loader',
							options: {
								ident: 'postcss',
								plugins: () => [require('precss'), require('postcss-preset-env')()]
							}
						}
					]
				})
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							limit: 8192, //文件大小（单位 byte）低于指定的限制时，可以返回一个 DataURL
							outputPath: 'img/' //将图片单独放在一个文件夹内
						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json'] //省略文件后缀名
	},
	plugins: [
		// 生成HTML文件
		new HtmlWebpackPlugin({
			template: 'index.html'
		}),
		// 抽离CSS
		new ExtractTextPlugin({
			filename: getPath => {
				return getPath('css/[name].css').replace('css/js', 'css');
			},
			allChunks: true
		}),

		// 清除dist文件
		new CleanWebpackPlugin('dist')
	]
};
