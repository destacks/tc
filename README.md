# `twcn`

## Introduction

`twcn` is designed to construct and merge Tailwind CSS class names in both JavaScript and TypeScript. It's ideal for usage within JSX and TSX components.

Key features of `twcn` include:

- Efficiently merges strings, conditionals, arrays, & nested objects.
- Trims extra spaces in strings.
- Sorts Tailwind CSS classes without causing style conflicts.

## Installation

```
npm install @destacks/twcn
```

## Usage

Example:

```jsx
import cn from "@destacks/twcn";

const Button = ({ isAlert, isActive }) => (
  <button
    className={cn(
      "bg-blue-600 text-white hover:bg-blue-700",
      isAlert ? "bg-red-300 text-red-900 hover:bg-red-400" : "",
      isActive ? "cursor-pointer" : "cursor-not-allowed"
    )}
  >
    Click Me
  </button>
);

export default Button;
```

## Auto-Complete in VS Code

1. [Install the "Tailwind CSS IntelliSense" extension.](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

2. Add to your [VS Code `settings.json`](https://code.visualstudio.com/docs/getstarted/settings):

```json
{
  "tailwindCSS.experimental.classRegex": [
    ["cn\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

## Credits

The biggest shout-out to [`clsx`](https://github.com/lukeed/clsx) and [`tailwind-merge`](https://github.com/dcastil/tailwind-merge). `twcn` is just a super-thin wrapper around them. They are doing more than 99.9% of the work and deserve all the credit.

## License

MIT License.

Copyright (c) 2023 [Alexis Michaltsis • Destacks.com](https://destacks.com/)

License file URL: https://github.com/destacks/twcn/blob/main/LICENSE

## Links

For more information on `twcn`, visit: https://github.com/destacks/twcn
For more information on the `twcn` NPM package, visit: https://www.npmjs.com/package/@destacks/twcn
