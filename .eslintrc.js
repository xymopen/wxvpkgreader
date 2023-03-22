const { readGitignoreFiles } = require("eslint-gitignore");

module.exports = {
	env: {
		es2021: true
	},
	extends: "eslint:recommended",
	plugins: [
		"@html-eslint",
		"html"
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module"
	},
	rules: {
		indent: [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"windows"
		],
		quotes: [
			"error",
			"double"
		],
		semi: [
			"error",
			"always"
		]
	},
	ignorePatterns: readGitignoreFiles({ cwd: __dirname }),
	overrides: [
		{
			files: [
				"*"
			],
			env: {
				node: true
			},
		},
		{
			files: [
				"src/**/*"
			],
			env: {
				browser: true
			},
			rules: {
				"no-unused-vars": "off"
			}
		},
		{
			files: [
				"*.html"
			],
			extends: [
				"plugin:@html-eslint/recommended"
			],
			parser: "@html-eslint/parser",
			rules: {
				"@html-eslint/require-lang": "off",
				"@html-eslint/indent": [
					"error",
					"tab"
				],
				"@html-eslint/quotes": [
					"error",
					"double"
				]
			}
		}
	],
};
