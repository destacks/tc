# TC: Hassle-Free Merging & Sorting of Tailwind Classes

## Introduction

TC is designed to merge & sort Tailwind CSS class names in JavaScript and TypeScript. It's ideal for usage within JSX and TSX components. TC combines the use of [`clsx`](https://github.com/lukeed/clsx) and [`tailwind-merge`](https://github.com/dcastil/tailwind-merge).

Key features of TC include:

- Efficiently merges strings, conditionals, arrays, & nested objects.
- Trims extra spaces in strings.
- Sorts Tailwind CSS classes without causing style conflicts.

## Installation

```
npm install @destacks/tc clsx tailwind-merge
```

## Usage

Example:

- Please note: the example is more complicated than normal, showing the possibilities of using arrays and nested objects. Please go to the [`clsx`](https://github.com/lukeed/clsx) project page for more information on possible control structures.

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

An example project using Vite + React is located in `example/button`. For more information, refer to the [README](example/button/README.md) inside the `example/button` directory.

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

The biggest shout-out to [`clsx`](https://github.com/lukeed/clsx) and [`tailwind-merge`](https://github.com/dcastil/tailwind-merge). TC is just a super-thin wrapper around them. They do more than 99.9% of the work and deserve all the credit.

## License

MIT License.

Copyright (c) 2023 [Alexis Michaltsis • Destacks.com](https://destacks.com/)

License file URL: https://github.com/destacks/tc/blob/main/LICENSE

## Links

- TC's GitHub repo, visit: https://github.com/destacks/tc
- TC's NPM package page, visit: https://www.npmjs.com/package/@destacks/tc
