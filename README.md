# Custom ESLint Configuration

[![ESLint Config](https://img.shields.io/badge/eslint-config-blue.svg)](https://www.npmjs.com/package/@jakoblierman/eslint-config)

This package provides a custom ESLint configuration to enforce coding standards and best practices in your projects.

## Installation

Install the package using your package manager of choice:

```bash
npm install --save-dev eslint @jakoblierman/eslint-config
```

```bash
yarn add --dev eslint @jakoblierman/eslint-config
```

```bash
pnpm add --save-dev eslint @jakoblierman/eslint-config
```

## Usage

Create an `.eslintrc.js` file in your project's root and extend this configuration:

```javascript
module.exports = {
  extends: ['@jakoblierman/eslint-config'],
  // Add additional rules or overrides if needed
};
```

### Add NPM script (optional)

Add the following script to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

You can now run ESLint using the following command: `npm run lint`, `yarn lint`, or `pnpm lint`.
If you want to fix all auto-fixable problems, run `npm run lint -- --fix`, `yarn lint --fix`, or `pnpm lint --fix`.

### Add commit hook (optional)

To automatically format your code before committing, install the [Husky](https://typicode.github.io/husky/) package using [this guide](https://typicode.github.io/husky/getting-started.html).

Install the [lint-staged](https://github.com/lint-staged/lint-staged) package.
This package runs scripts on files that are staged in Git.

Extend your `.lintstagedrc` file with the following:

```json
{
  "*.{js,jsx,ts,tsx}": [
    "eslint --cache --cache-file node_modules/.cache/.eslintcache --fix"
  ]
}
```

Run lint-staged on every commit by configuring a Husky hook:

```bash
echo "npx lint-staged" > .husky/pre-commit
```

Now, your project will use this configuration for ESLint linting.

## Configuration

This configuration includes settings for:

- Recommended ESLint rules
- Prettier formatting
- TypeScript support
- React support (`@jakoblierman/eslint-config/react`)
- Next.js support (`@jakoblierman/eslint-config/nextjs`)
- Jest support (`@jakoblierman/eslint-config/jest`)
- Vitest support (`@jakoblierman/eslint-config/vitest`)

Feel free to customize the configuration by extending or overriding rules to suit your project's needs.
