/** @type {import('stylelint').Config} */
const config = {
  customSyntax: 'postcss-scss',
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
  ],
  plugins: ['stylelint-declaration-block-no-ignored-properties'],
  // https://stylelint.io/user-guide/configuration
  rules: {
    'at-rule-no-unknown': null,
    'no-invalid-position-at-import-rule': null,
    'media-feature-name-no-vendor-prefix': null,
    'value-keyword-case': [
      'lower',
      {
        camelCaseSvgKeywords: true,
      },
    ],
    'plugin/declaration-block-no-ignored-properties': true,
    'function-no-unknown': null,
    'scss/operator-no-newline-after': null,
    'declaration-block-no-redundant-longhand-properties': [
      true,
      { ignoreShorthands: ['grid-template'] },
    ],
  },
};
module.exports = config;
