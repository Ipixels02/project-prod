module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        "plugin:i18next/recommended"
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json']
    },
    plugins: [
        'react',
        '@typescript-eslint',
        "i18next"
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        '@typescript-eslint/indent': [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
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
        "i18next/no-literal-string": ['error', { markupOnly: true, "ignoreAttribute": ["data-testid", "to"] }],
        'max-len': ['error', { ignoreComments: true, code: 100 }],
        "semi": "off",
        "@typescript-eslint/semi": "off",
        '@typescript-eslint/consistent-type-imports': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off'
    },
    globals: {
        __IS_DEV__: true
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                "i18next/no-literal-string": 'off'
            }
        }
    ]
}
