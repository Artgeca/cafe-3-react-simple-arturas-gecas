module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/jsx-runtime",
        "airbnb",
        'airbnb-typescript'
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": './tsconfig.json'
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
        "react/react-in-jsx-scope": "off",
        "jsx-quotes": [1, "prefer-single"],
        "no-unused-vars": [1],
        "@typescript-eslint/no-unused-vars": [1]
    }
}