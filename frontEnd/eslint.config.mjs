import eslintConfigNext from 'eslint-config-next'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginImport from 'eslint-plugin-import'
import eslintPluginTypeScript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'

const prettierRules = {
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  printWidth: 120,
  bracketSpacing: true,
  trailingComma: 'es5',
  arrowParens: 'always',
}

export default [
  {
    ignores: ['.next/**', 'node_modules/**', 'build/**', 'coverage/**'],
  },
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': eslintPluginTypeScript,
      prettier: eslintPluginPrettier,
      import: eslintPluginImport,
    },
    rules: {
      ...eslintConfigNext.rules,
      'prettier/prettier': ['error', prettierRules],
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal'],
          alphabetize: { order: 'asc', caseInsensitive: true },
          'newlines-between': 'always',
        },
      ],
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
    },
  },
  eslintConfigPrettier,
]