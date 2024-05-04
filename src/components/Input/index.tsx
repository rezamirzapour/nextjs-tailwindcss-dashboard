import clsx from "clsx";
import type { IProps } from "./input.type";
import { forwardRef, RefAttributes } from "react";

const Input: React.ForwardRefExoticComponent<
  Omit<IProps, "ref"> & RefAttributes<HTMLInputElement>
> = forwardRef(function InputRender(
  { label, labelTextSize = "small", containerProps, ...props },
  ref,
) {
  return (
    <div {...containerProps}>
      <label
        className={clsx("mb-3 block font-medium text-black dark:text-white", {
          "text-sm": labelTextSize === "small",
          "text-md": labelTextSize === "medium",
          "text-lg": labelTextSize === "large",
        })}
      >
        {label}
      </label>
      <input
        ref={ref}
        {...props}
        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
      />
    </div>
  );
});

export default Input;
