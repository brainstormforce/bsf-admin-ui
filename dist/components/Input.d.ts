import React from "react";
interface InputPropsTypes {
    type: string;
    value: string;
    label?: React.ReactNode;
    labelPosition?: "top" | "left" | "right" | "bottom";
    labelGap?: number;
    description?: React.ReactNode;
    descriptionGap?: number;
    props?: any;
    style?: React.CSSProperties;
    inputContainerStyle?: React.CSSProperties;
    className?: string;
}
declare const Input: React.FC<InputPropsTypes>;
export default Input;
