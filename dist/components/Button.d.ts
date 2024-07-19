import * as React from "react";
import { ReactNode } from "react";
type PropsType = {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
    style?: React.CSSProperties;
    size?: "small" | "medium" | "large";
    isLoading?: boolean;
};
declare const Button: (props: PropsType) => React.JSX.Element;
export default Button;
