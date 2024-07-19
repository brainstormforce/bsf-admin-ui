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
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    inputProps?: any;
}
declare const Input: (props: InputPropsTypes) => React.JSX.Element;
export default Input;
