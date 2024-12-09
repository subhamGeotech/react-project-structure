module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', 'boundaries', 'import'],
    settings: {
        'import/resolver': {
            typescript: {},
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
        'boundaries/include': ['src/**/*'],
        'boundaries/elements': [
            {
                mode: 'full',
                type: 'common',
                pattern: [
                    'src/common/components/**/*',
                    'src/common/constants/**/*',
                    'src/common/contexts/**/*',
                    'src/common/hooks/**/*',
                    'src/common/icons/**/*',
                    'src/common/layouts/**/*',
                    'src/common/models/**/*',
                    'src/common/services/**/*',
                    'src/common/utils/**/*',
                    'src/common/validators/**/*',
                    'src/common/widgets/**/*',
                ],
            },
            {
                mode: 'full',
                type: 'feature',
                capture: ['featureName'],
                pattern: ['src/features/*/**/*'],
            },
            {
                mode: 'full',
                type: 'router',
                pattern: ['src/router/**/*'],
            },
            {
                mode: 'full',
                type: 'scss',
                pattern: ['src/scss/**/*'],
            },
            {
                mode: 'full',
                type: 'store',
                pattern: ['src/store/**/*'],
            },
            {
                mode: 'full',
                type: 'assets',
                pattern: ['src/assets/**/*'],
            },
        ],
    },
    rules: {
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

        'react-hooks/exhaustive-deps': ['off'],

        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'external',
                        position: 'before',
                    },
                ],
            },
        ],

        'boundaries/no-unknown': 'error',
        'boundaries/element-types': [
            'error',
            {
                default: 'disallow',
                rules: [
                    {
                        from: ['common'],
                        allow: ['common', 'scss'],
                    },
                    {
                        from: ['feature'],
                        allow: ['common', 'scss', 'store', ['feature', { featureName: '${from.featureName}' }]],
                    },
                    {
                        from: ['router', 'store', 'assets'],
                        allow: ['router', 'common', 'feature', 'scss'],
                    },
                    {
                        from: ['scss'],
                        allow: ['scss', 'assets'],
                    },
                ],
            },
        ],

        'no-console': 'off',
    },
};
