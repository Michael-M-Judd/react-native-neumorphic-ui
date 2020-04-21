module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-styled-components',
    'stylelint-config-prettier'
  ],
  rules: {
    'at-rule-no-vendor-prefix': true,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['include', 'mixin', 'extend', 'for', 'content', 'each']
      }
    ],
    'color-named': 'never',
    'declaration-property-value-blacklist': {
      '/^background/': ['/http:/'],
      '/^border$/': ['none'],
      '/.+/': ['initial']
    },
    'font-family-name-quotes': 'always-unless-keyword',
    'function-url-quotes': 'always',
    'media-feature-name-no-vendor-prefix': true,
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: ['first-nested'],
        ignore: ['after-comment']
      }
    ],
    'property-no-vendor-prefix': true,
    'selector-max-id': 0,
    'selector-no-vendor-prefix': true,
    'selector-type-no-unknown': [
      true,
      {
        ignore: 'default-namespace'
      }
    ],
    'string-quotes': 'single',
    'unit-blacklist': [
      ['em', 'rem'],
      {
        severity: 'warning'
      }
    ],
    'value-no-vendor-prefix': true,
    'no-duplicate-selectors': true
  }
};
