module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/jsx-runtime"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "react/prop-types": [0],
        "newline-before-return": [1],
        "import/prefer-default-export": [0],
        "react/function-component-definition": [1, {
            "namedComponents": "arrow-function"
        }],
        "object-curly-spacing": [1, "always"],
        "quotes": [1, "single"]
    }
}
