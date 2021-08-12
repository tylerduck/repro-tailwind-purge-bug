import clsx from "clsx";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

// translate-x-8 is nowhere in this file
export const Button: React.VFC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ className, children, ...buttonProps }) => (
  <button
    className={clsx("text-white rounded bg-red", className)}
    {...buttonProps}
  >
    <span className="block font-bold">{children}</span>
  </button>
);
