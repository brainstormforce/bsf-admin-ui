import React from "react";
interface CheckboxGroupProps {
    group: {
        id: string;
        label: React.ReactNode;
        checked: boolean;
    }[];
    onChange?: (checked: boolean, id: string) => void;
    disabled?: boolean;
    gap?: number;
    columns?: number;
    groupStyle?: React.CSSProperties;
    checkboxStyle?: React.CSSProperties;
    className?: string;
    groupClassName?: string;
}
declare const CheckBox: React.FC<CheckboxGroupProps>;
export default CheckBox;
