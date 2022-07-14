module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true,
  },
  "extends": [
    "google",
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
  },
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "max-len": ["warn", {"code": 150}],
    "linebreak-style": ["off"],
    "require-jsdoc": ["off"],
  },
};
