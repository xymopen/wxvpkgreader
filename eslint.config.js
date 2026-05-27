import js from '@eslint/js'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import html from "@html-eslint/eslint-plugin"

export default defineConfig([
	globalIgnores(['dist']),
	{
		extends: [
			js.configs.recommended
		],
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
		extends: [
			html.configs["flat/recommended"]
		],
		files: ['src/*.html'],
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
	},
	{
		extends: [
			js.configs.recommended
		],
		files: ['vite.config.js'],
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: 'module',
			globals: globals.nodeBuiltin,
			parserOptions: {
				ecmaVersion: 'latest',
			}
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
		}
	}
])
