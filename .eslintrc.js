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
    "max-len": ["warn", {"code": 80}],
    "linebreak-style": ["off"],
  },
};
