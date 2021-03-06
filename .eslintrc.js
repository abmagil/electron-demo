module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": ["airbnb", "eslint:recommended", "plugin:react/recommended"],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true,
        },
        "sourceType": "module"
    },
    "rules": {
        "comma-dangle": ["error", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "never",
            "exports": "never",
            "functions": "never",
        }],
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-unused-vars": [ "warn", {"vars": "local"} ],
        "import/no-unresolved": ["error", { "caseSensitive": false, ignore: ['\.scss$']}],
        "import/no-extraneous-dependencies": ["off"],
        "jsx-a11y/label-has-for": ["off"],
        "react/prop-types": ["off"],
        "react/jsx-filename-extension": ["off"],
        "react/no-array-index-key": ["warn"],
        "no-debugger": ["warn"],
        "no-console": ["warn"],
    },
    "globals": {
        "jest": false
    }
};
