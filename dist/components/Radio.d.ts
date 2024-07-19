import React from "react";
interface RadioGroupProps {
    group: {
        id: string;
        label: React.ReactNode;
        checked?: boolean;
    }[];
    checked?: string;
    onChange?: (checked: string) => void;
    disabled?: boolean;
    gap?: number;
    columns?: number;
    groupStyle?: React.CSSProperties;
    radioBoxStyle?: React.CSSProperties;
    className?: string;
    groupClassName?: string;
    radioType?: "radio" | "checkbox";
    isMultiple?: boolean;
}
declare const Radio: React.FC<RadioGroupProps>;
export default Radio;
