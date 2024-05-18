// eslint-disable-next-line eslint-comments/disable-enable-pair -- Disable th naming convention rule for this file
/* eslint-disable filenames-simple/naming-convention -- Plugin doesn't work well with these types of filenames */

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: ['./index.js'],
  rules: {
    'unicorn/prefer-module': 'off',
  },
};
