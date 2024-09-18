import { MouseEventHandler } from "react";
export interface ButtonProps {
    type: "primary" | "danger";
    text: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
