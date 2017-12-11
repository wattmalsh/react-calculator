module.exports = {
  extends: 'airbnb',
  parserOptions: {
    ecmaScript: 6,
  },
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
  },
  env: {
    browser: true,
  },
};
