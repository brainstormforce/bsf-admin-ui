import React from "react";
interface CustomOptionType {
    label?: string;
    value?: string | number;
    title?: string;
    description?: string;
}
interface VariablePickerProps {
    options: CustomOptionType[];
    onChange: (value: string) => void;
    type: "text" | "textarea";
    value: string;
    inputStyle?: React.CSSProperties;
    className?: string;
}
declare const VariablePicker: (props: VariablePickerProps) => React.JSX.Element;
export default VariablePicker;
