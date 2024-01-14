const { describe, test, expect } = require('@jest/globals');
const { ESLint } = require('eslint');

describe('ESLint Configuration', () => {
  test('Should load ESLint config without errors', async () => {
    const eslint = new ESLint();

    // Lint the files or directories you want to test
    const results = await eslint.lintFiles(['**/*.{js,ts,jsx,tsx}']);

    // Check if there are any linting errors
    expect(results).toBeDefined();
    expect(
      results
        .map(
          (r) =>
            r.errorCount +
            r.fatalErrorCount +
            r.fixableErrorCount +
            r.warningCount +
            r.fixableWarningCount,
        )
        .reduce((a, b) => a + b, 0),
    ).toBe(0);
  });
});
