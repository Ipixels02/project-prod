module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'plugin:i18next/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['./tsconfig.json'],
        ecmaVersion: 'latest',
        sourceType: 'module',
        tsconfigRootDir: __dirname
    },
    ignorePatterns: ['config/**', 'webpack.config.ts'],
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks'
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4, { SwitchCase: 1 }],
        '@typescript-eslint/indent': [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'warn',
        'no-underscore-dangle': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/no-misused-promises': 'warn',
        '@typescript-eslint/naming-convention': 'off',
        'i18next/no-literal-string': ['error',
            {
                markupOnly: true,
                ignoreAttribute: ['data-testid', 'to', 'target']
            }
        ],
        'max-len': ['error', { ignoreComments: true, code: 120 }],
        semi: 'off',
        '@typescript-eslint/semi': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
        '@typescript-eslint/consistent-type-exports': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off',
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
        'no-param-reassign': 'off',
        '@typescript-eslint/restrict-plus-operands': 'off',
        'react/display-name': 'off',
        '@typescript-eslint/prefer-ts-expect-error': 'off',
        '@typescript-eslint/no-dynamic-delete': 'warn',
        'no-undef': 'off',
        '@typescript-eslint/no-invalid-void-type': 'warn',
        '@typescript-eslint/restrict-template-expressions': 'warn',
        'react/no-array-index-key': 'off'
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true
    },
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off'
            }
        }
    ]
};
