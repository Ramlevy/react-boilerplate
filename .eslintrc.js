module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "mocha": true,
        "node": false
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "jsx-quotes"       : 1,
        "no-console"        : 0,
        "no-undef":  1,
        "no-redeclare": 1,
        "no-case-declarations": 0,
        "react/display-name": 0,
        "react/forbid-prop-types": 0,
        "react/jsx-boolean-value": 0,
        "react/jsx-closing-bracket-location": 1,
        "react/jsx-curly-spacing": 0,
        "react/jsx-handler-names": 0,
        "react/jsx-indent-props": 0,
        "react/jsx-indent": 0,
        "react/jsx-key": 1,
        "react/jsx-max-props-per-line": 0,
        "react/jsx-no-bind": 0,
        "react/jsx-no-duplicate-props": 1,
        "react/jsx-no-literals": 0,
        "react/jsx-no-undef": 1,
        "react/jsx-pascal-case": 1,
        "react/jsx-sort-prop-types": 0,
        "react/jsx-sort-props": 0,
        "react/jsx-uses-react": 1,
        "react/jsx-uses-vars": 1,
        "no-unused-vars": ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
        "react/no-danger": 1,
        "react/no-deprecated": 1,
        "react/no-did-mount-set-state": 1,
        "react/no-did-update-set-state": 1,
        "react/no-direct-mutation-state": 1,
        "react/no-is-mounted": 1,
        "react/no-multi-comp": 0,
        "react/no-set-state": 0,
        "react/no-string-refs": 0,
        "react/no-unknown-property": 1,
        "react/prefer-es6-class": 1,
        "react/prop-types": 0,
        "react/react-in-jsx-scope": 0,
        "react/require-extension": 0,
        "react/self-closing-comp": 1,
        "react/sort-comp": 1,
        "react/wrap-multilines": 0
      },
    "extends": ["eslint:recommended", "plugin:react/recommended"]
};