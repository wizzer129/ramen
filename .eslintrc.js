module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['plugin:vue/essential', '@vue/standard'],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        indent: ['error', 4],
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        'no-underscore-dangle': 0,
        'object-curly-newline': 0,
        'class-methods-use-this': 0,
        'max-len': ['error', { code: 150 }],
        'linebreak-style': ['error', 'unix'],
        'func-names': ['error', 'as-needed'],
        'no-param-reassign': ['error', { props: false }],
        'import/extensions': 0,
        'no-undef': 0,
        'import/no-unresolved': 0,
        'import/no-absolute-path': 0,
        'arrow-parens': ['error', 'as-needed'],
        'no-bitwise': 'off',
        'no-await-in-loop': 'off',
        'no-async-promise-executor': 0,
        'max-classes-per-file': 0,
        'operator-linebreak': ['error', 'after'],
        'comma-dangle': ['error', 'always-multiline'],
        'no-invalid-this': 1,
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)',
            ],
            env: {
                mocha: true,
            },
        },
    ],
}
