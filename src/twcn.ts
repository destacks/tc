import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * `twcn`'s `cn` function merges Tailwind CSS class names for JS/TS in JSX/TSX.
 * Built on top of `clsx` & `tailwind-merge`.
 * Example:
 * ```jsx
 * import cn from "@destacks/twcn";
 * const Button = ({ isAlert }) => <button className={cn('bg-blue-600', isAlert && 'bg-red-300')}>Click Me</button>;
 * ```
 * More info: https://github.com/destacks/twcn
 */
const cn = (...classValues: ClassValue[]) => twMerge(clsx(...classValues));

export default cn;
