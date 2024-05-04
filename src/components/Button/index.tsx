import clsx from "clsx";
import type { IProps } from "./Button.type";

const Button: React.FC<IProps> = ({
  fullWidth = false,
  variant = "primary",
  roundish = "rounded",
  filling = "filled",
  ...props
}) => {
  return (
    <button
      {...props}
      className={clsx(
        "items-center justify-center px-10 py-4 text-center font-medium hover:bg-opacity-90 disabled:bg-gray disabled:text-slate-400 lg:px-8 xl:px-10",
        {
          "w-full": fullWidth,
          "bg-primary": variant === "primary" && filling === "filled",
          "bg-meta-3": variant === "secondary" && filling === "filled",
          "bg-black": variant === "tertiary" && filling === "filled",
          "border border-white text-white": filling === "filled",
          "border border-primary text-primary":
            variant === "primary" && filling === "outlined",
          "border border-meta-3 text-meta-3":
            variant === "secondary" && filling === "outlined",
          "border border-black text-black":
            variant === "tertiary" && filling === "outlined",
          "rounded-md": roundish === "rounded",
          "rounded-full": roundish === "x-rounded",
        },
      )}
    />
  );
};

export default Button;
