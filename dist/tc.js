"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clsx_1 = require("clsx");
const tailwind_merge_1 = require("tailwind-merge");
/**
 * `tc` merges & sorts Tailwind CSS class names.
 *
 * Built on top of `clsx` & `tailwind-merge`.
 *
 * Example:
 * ```jsx
 * import tc from "@destacks/tc";
 * const Button = ({ isAlert }) => <button className={tc('bg-blue-600', isAlert && 'bg-red-300')}>Click Me</button>;
 * ```
 * More information at: https://github.com/destacks/tc
 */
const tc = (...classValues) => (0, tailwind_merge_1.twMerge)((0, clsx_1.clsx)(...classValues));
exports.default = tc;
