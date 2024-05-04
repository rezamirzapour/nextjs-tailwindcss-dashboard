import type {
  DetailedHTMLProps,
  HTMLAttributes,
  InputHTMLAttributes,
} from "react";

export interface IProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  labelTextSize?: "small" | "medium" | "large";
  containerProps?: HTMLAttributes<HTMLDivElement>;
}
