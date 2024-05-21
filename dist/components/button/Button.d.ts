import * as React from "react";
import { ReactNode } from "react";
type PropsType = {
    children: ReactNode;
    onClick?: () => void;
    type?: number;
};
declare const Button: ({ children, onClick, type }: PropsType) => React.JSX.Element;
export default Button;
