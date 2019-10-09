module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "standard"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
      "semi": ["error", "always"],
      "quotes": ["error", "single"],
      "comma-spacing": ["error", { "before": false, "after": true }],
      // TODO: "linebreak-style": ['error', 'unix'],
      // TODO: for now console.log is a warning
      // even though it will be an error once we will have a logging system
      "no-console": ["warn"]
    }
};
