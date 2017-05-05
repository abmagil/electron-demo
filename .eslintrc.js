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
    }
};
