import * as React from "react";
import { ReactNode } from "react";
type PropsType = {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
    style?: React.CSSProperties;
};
declare const Button: (props: PropsType) => React.JSX.Element;
export default Button;
