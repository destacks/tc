# `twcn` Button Example with React + Vite

This example showcases how to use the `twcn` package to construct and merge Tailwind CSS class names in a React component with the Vite.js build tool.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes bundled with Node.js)

### Setup

1. **Navigate to the example directory**:

   ```bash
   cd path/to/example/button
   ```

2. **Install the necessary dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

   This will start the Vite.js development server, and the example should be accessible at `http://localhost:3000/`.

## Exploring the Button Component

Open the `src/Buttons.jsx` file to view the Button component. This component uses the `twcn` function to merge various Tailwind CSS classes based on given conditions, showcasing the utility of `twcn` in a React context.

## VS Code Integration

For a better development experience with Tailwind CSS in this example, the integration with VS Code's Tailwind CSS IntelliSense is set up. If you open this project in VS Code, you should be able to get autocompletion for Tailwind CSS classes within the `cn` function, thanks to the regex configuration in `.vscode/settings.json`.

## Further Information

For more details on `twcn`, refer to the main project's [README](../README.md) or visit the official repository [here](https://github.com/destacks/twcn).
