module.exports = {
	env: {
		es6: true,
		amd: true,
		browser: true,
		node: true
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	parserOptions: {
		//使用的额外的语言特性
		ecmaFeatures: {
			jsx: true,
			impliedStrict: true
		},
		ecmaVersion: 2018, //指定使用的 ECMAScript 版本
		sourceType: 'module' //设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)
	},
	plugins: ['react'],
	rules: {
		// indent: ['error', 4],
		'linebreak-style': [0, 'error', 'windows'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'react/prop-types': 0, //禁用prop-types类型检测
		eqeqeq: ['error', 'always'], //要求使用 === 和 !==
		'default-case': ['error'], //要求 switch 语句中有 default 分支
		'no-empty-function': ['error'], //禁止出现空函数
		'no-self-compare': ['error'], //禁止自身比较
		// 'no-unused-expressions': ['error'], //禁止出现未使用过的表达式
		'no-label-var': ['error'], //不允许标签与变量同名
		// 'no-shadow': ['error'], //禁止变量声明与外层作用域的变量同名
		'no-undef-init': ['error'], //禁止将变量初始化为 undefined
		'no-use-before-define': ['error'], //禁止在变量定义之前使用它们
		'new-cap': ['error'], //要求构造函数首字母大写
		'no-duplicate-imports': ['error'], //禁止重复模块导入
		'no-console': 0,
		'no-empty-function': 0
	}
};
