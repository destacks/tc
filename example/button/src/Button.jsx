import PropTypes from "prop-types";
import cn from "@destacks/twcn";

const Button = ({ isAlert, isActive, onClick, className, children }) => (
  <button
    className={cn(
      "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded",
      isAlert &&
        "bg-red-300 text-red-900 hover:bg-red-500 hover:text-red-100 border-red-500",
      isActive ? "cursor-pointer" : "cursor-not-allowed",
      className
    )}
    onClick={onClick}
    disabled={!isActive}
  >
    {children}
  </button>
);

Button.propTypes = {
  isAlert: PropTypes.bool.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
