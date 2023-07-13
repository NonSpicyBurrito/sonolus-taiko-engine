module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
    },
    plugins: ['@typescript-eslint', 'prettier'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
        'prettier',
    ],
    rules: {
        'prettier/prettier': 'error',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        '@typescript-eslint/no-confusing-void-expression': [
            'error',
            {
                ignoreArrowShorthand: true,
            },
        ],
    },
    overrides: [
        {
            files: ['./lib/**/*.cts'],
            rules: {
                '@typescript-eslint/explicit-module-boundary-types': 'error',
                '@typescript-eslint/no-empty-function': 'error',
            },
        },
    ],
}
