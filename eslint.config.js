const js = require('@eslint/js')
const globals = require('globals')
const html = require("@html-eslint/eslint-plugin")

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
	{ ignores: ['dist'] },
	{
		...js.configs.recommended,
		files: ['src/*.js'],
		languageOptions: {
			ecmaVersion: 2020,
			sourceType: 'module',
			globals: globals.browser,
			parserOptions: {
				ecmaVersion: 'latest',
			}
		},
		rules: {
			...js.configs.recommended.rules,
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
			],
			"no-unused-vars": "off"
		}
	},
	{
		...html.configs["flat/recommended"],
		files: ['src/*.html'],
		rules: {
			...html.configs["flat/recommended"].rules,
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
	},
	{
		...js.configs.recommended,
		files: ['vite.config.js'],
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: 'module',
			globals: globals.node,
			parserOptions: {
				ecmaVersion: 'latest',
			}
		},
		rules: {
			...js.configs.recommended.rules,
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
		}
	}
]
