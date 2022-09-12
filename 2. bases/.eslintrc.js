module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['standard-with-typescript', 'eslint-config-prettier'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: ['tsconfig.json'],
	},
	rules: {
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
	},
};
