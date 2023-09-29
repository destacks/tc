# `tc`

## Introduction

`tc` is designed to merge & sorte Tailwind CSS class names in both JavaScript and TypeScript. It's ideal for usage within JSX and TSX components. It simple combines the use of [`clsx`](https://github.com/lukeed/clsx) and [`tailwind-merge`](https://github.com/dcastil/tailwind-merge). The name `tc` is an abbreviation for: *T*ailwind with *C*lass-name handling.

Key features of `tc` include:

- Efficiently merges strings, conditionals, arrays, & nested objects.
- Trims extra spaces in strings.
- Sorts Tailwind CSS classes without causing style conflicts.

## Installation

```
npm install @destacks/tc
```

## Usage

Example:

- Example was made overly complicated to show the array and nested object possbilities. For more information on this, go to the [`clsx`](https://github.com/lukeed/clsx) project page.

```jsx
import tc from "@destacks/tc";

const Button = ({ isAlert, isActive }) => (
  <button
    className={tc(
      "bg-blue-600 text-white hover:bg-blue-700",
      isAlert && ["bg-red-300", "text-red-900", "hover:bg-red-400"],
      isActive ? { "cursor-pointer": true } : { "cursor-not-allowed": true }
    )}
  >
    Click Me
  </button>
);

export default Button;
```

## Example Project

There is an example Vite + React project located in `example/button`. For more information, refer to the [README](example/button/README.md) inside the `example/button` directory.

## Auto-Complete in VS Code

1. [Install the "Tailwind CSS IntelliSense" extension.](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

2. Add to your [VS Code `settings.json`](https://code.visualstudio.com/docs/getstarted/settings):

```json
{
  "tailwindCSS.experimental.classRegex": [
    ["tc\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

## Credits

The biggest shout-out to [`clsx`](https://github.com/lukeed/clsx) and [`tailwind-merge`](https://github.com/dcastil/tailwind-merge). `tc` is just a super-thin wrapper around them. They are doing more than 99.9% of the work and deserve all the credit.

## License

MIT License.

Copyright (c) 2023 [Alexis Michaltsis • Destacks.com](https://destacks.com/)

License file URL: https://github.com/destacks/tc/blob/main/LICENSE

## Links

- `tc`'s GitHub repo, visit: https://github.com/destacks/tc
- `tc`'s NPM package page, visit: https://www.npmjs.com/package/@destacks/tc
