'use strict';

module.exports = {
  rules: {
    // Possible Errors
    'comma-dangle': [2, 'never'],
    'no-cond-assign': [2, 'always'],
    'no-console': 1,
    'no-constant-condition': 2,
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty': 2,
    'no-empty-character-class': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': [2, 'all'],
    'no-extra-semi': 2,
    'no-func-assign': 2,
    'no-inner-declarations': 2,
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-negated-in-lhs': 2,
    'no-obj-calls': 2,
    'no-regex-spaces': 2,
    'no-sparse-arrays': 2,
    'no-unexpected-multiline': 2,
    'no-unreachable': 2,
    'use-isnan': 2,
    'valid-jsdoc': [2, {
      prefer: {
        return: 'return'
      },
      requireReturn: false
    }],
    'valid-typeof': 2,

    // Best Practices
    'accessor-pairs': 2,
    'array-callback-return': 2,
    'block-scoped-var': 2,
    complexity: [1, 12],
    'consistent-return': 2,
    curly: [2, 'all'],
    'default-case': 2,
    'dot-location': [2, 'property'],
    'dot-notation': 2,
    eqeqeq: 2,
    'guard-for-in': 2,
    'no-alert': 2,
    'no-caller': 2,
    'no-case-declarations': 2,
    'no-div-regex': 2,
    'no-else-return': 2,
    'no-empty-function': 2,
    'no-empty-pattern': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-label': 0,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-implicit-coercion': 2,
    'no-implicit-globals': 2,
    'no-implied-eval': 2,
    'no-invalid-this': 2,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-magic-numbers': 0,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-param-reassign': [2, {
      props: false
    }],
    'no-process-env': 1,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-return-assign': 2,
    'no-script-url': 2,
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unmodified-loop-condition': 2,
    'no-unused-expressions': 2,
    'no-unused-labels': 0,
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-void': 2,
    'no-warning-comments': 0,
    'no-with': 2,
    radix: 2,
    'vars-on-top': 2,
    'wrap-iife': [2, 'inside'],
    yoda: 2,

    // Strict Mode
    strict: [2, 'safe'],

    // // Variables
    'init-declarations': 2,
    'no-catch-shadow': 2,
    'no-delete-var': 2,
    'no-label-var': 0,
    'no-shadow': 2,
    'no-shadow-restricted-names': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-undefined': 0,
    'no-unused-vars': [2, {
      vars: 'local',
      args: 'after-used'
    }],
    'no-use-before-define': 2,

    // Node.js and CommonJS
    'callback-return': [1, ['callback', 'cb', 'next']],
    'global-require': 2,
    'handle-callback-err': [2, '^(err|error)$'],
    'no-mixed-requires': 0,
    'no-new-require': 2,
    'no-path-concat': 2,
    'no-process-exit': 1,
    'no-restricted-imports': 0,
    'no-restricted-modules': 0,
    'no-sync': 0,

    // Stylistic Issues
    'array-bracket-spacing': [2, 'never'],
    'block-spacing': [2, 'always'],
    'brace-style': [2, '1tbs', {
      allowSingleLine: false
    }],
    camelcase: [2, {
      properties: 'never'
    }],
    'comma-spacing': [2, {
      before: false,
      after: true
    }],
    'comma-style': [2, 'last'],
    'computed-property-spacing': [2, 'never'],
    'consistent-this': 0,
    'eol-last': 2,
    'func-names': 1,
    'func-style': [2, 'expression'],
    'id-blacklist': 0,
    'id-length': 0,
    'id-match': 0,
    indent: [2, 2, {
      SwitchCase: 1
    }],
    'jsx-quotes': [2, 'prefer-double'],
    'key-spacing': [2, {
      beforeColon: false,
      afterColon: true
    }],
    'keyword-spacing': [2, {
      after: true,
      before: true
    }],
    'linebreak-style': 2,
    'lines-around-comment': 0,
    'max-depth': 0,
    'max-len': 0,
    'max-nested-callbacks': 0,
    'max-params': 0,
    'max-statements': 0,
    'new-cap': 2,
    'new-parens': 2,
    'newline-after-var': 0,
    'newline-per-chained-call': 0,
    'no-array-constructor': 2,
    'no-bitwise': 0,
    'no-continue': 0,
    'no-inline-comments': 0,
    'no-lonely-if': 0,
    'no-mixed-spaces-and-tabs': 2,
    'no-multiple-empty-lines': [2, {
      max: 2,
      maxEOF: 1,
      maxBOF: 0
    }],
    'no-negated-condition': 0,
    'no-nested-ternary': 2,
    'no-new-object': 2,
    'no-plusplus': 0,
    'no-restricted-syntax': 0,
    'no-spaced-func': 2,
    'no-ternary': 0,
    'no-trailing-spaces': 2,
    'no-underscore-dangle': [2, {
      allowAfterThis: true
    }],
    'no-unneeded-ternary': [2, {
      defaultAssignment: false
    }],
    'no-whitespace-before-property': 2,
    'object-curly-spacing': [2, 'always'],
    'one-var': [2, 'never'],
    'one-var-declaration-per-line': 0,
    'operator-assignment': 0,
    'operator-linebreak': [2, 'before'],
    'padded-blocks': [2, 'never'],
    'quote-props': [2, 'as-needed'],
    quotes: [2, 'single', 'avoid-escape'],
    'require-jsdoc': 0,
    semi: [2, 'always'],
    'semi-spacing': [2, {
      before: false,
      after: true
    }],
    'sort-imports': 2,
    'sort-vars': 2,
    'space-before-blocks': 2,
    'space-before-function-paren': [2, 'always'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': 2,
    'spaced-comment': [2, 'always'],
    'wrap-regex': 0
  }
};
