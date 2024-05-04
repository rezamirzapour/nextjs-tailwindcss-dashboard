import type { ButtonHTMLAttributes } from "react";

export interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  variant?: "primary" | "secondary" | "tertiary";
  filling?: "filled" | "outlined";
  roundish?: "sharp" | "rounded" | "x-rounded";
}
