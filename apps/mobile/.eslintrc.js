module.exports = {
  extends: ['../../.eslintrc.js'],
  plugins: ['react-native'],
  env: {
    'react-native/react-native': true,
  },
  rules: {
    'react-native/no-unused-styles': 'warn',
    'react-native/split-platform-components': 'warn',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-color-literals': 'warn',
  },
};