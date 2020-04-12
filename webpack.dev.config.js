const webpack = require('webpack');
const path = require('path'); //path是node.js内置的package，用来处理路径的。
const HtmlWebpackPlugin = require('html-webpack-plugin'); //生成HTML文件
const CleanWebpackPlugin = require('clean-webpack-plugin'); //清除dist文件

module.exports = {
	mode: 'development', //开发模式
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
				loader: ['babel-loader', 'eslint-loader']
			},
			{
				test: /\.(css|pcss)?$/,
				use: [
					'style-loader',
					{ loader: 'css-loader?modules', options: { importLoaders: 1, sourceMap: true } },
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: () => [require('precss'), require('postcss-preset-env')()]
						}
					}
				]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							limit: 8192 //文件大小（单位 byte）低于指定的限制时，可以返回一个 DataURL
						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json'] //省略文件后缀名
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9090,
		hot: true,
		inline: true,
		historyApiFallback:true
		// proxy: [
		// 	{
		// 		context: ['/app/mock/**'],
		// 		target: 'http://rap2api.taobao.org/',
		// 		secure: false
		// 		// changeOrigin: true
		// 	}
		// ]
	},
	plugins: [
		// 热更新
		new webpack.HotModuleReplacementPlugin(),
		// 生成HTML文件
		new HtmlWebpackPlugin({
			template: 'index.html'
		}),
		// 清除dist文件
		new CleanWebpackPlugin('dist')
	]
};
