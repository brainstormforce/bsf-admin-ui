import * as React from "react";
import { ReactNode } from "react";
type PropsType = {
    children: ReactNode;
    onClick?: () => void;
};
declare const Button: ({ children, onClick }: PropsType) => React.JSX.Element;
export default Button;
