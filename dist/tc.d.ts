import { ClassValue } from "clsx";
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
declare const tc: (...classValues: ClassValue[]) => string;
export default tc;
