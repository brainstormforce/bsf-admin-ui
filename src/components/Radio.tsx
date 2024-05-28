import React from "react";
import { css, cx } from "@emotion/css";
import GridContainer from "./GridContainer";
import { ICONS } from "../utility";

interface RadioProps {
  label?: React.ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
  radioBoxGap?: number;
  radioType?: "radio" | "checkbox";
}

const RadioLabel: React.FC<RadioProps> = ({
  label,
  checked,
  onChange,
  disabled,
  radioBoxGap = 8,
  style,
  className = "",
  radioType,
}) => {
  const handleChange = () => {
    if (onChange) {
      onChange(!checked);
    }
  };

  const containerStyle = {
    padding: "12px 16px",
    border: checked ? "1px solid #7F56D9" : "1px solid #EAECF0",
    borderRadius: "6px",
    cursor: "pointer",
  };

  style = { ...containerStyle, ...style };

  const radioStyle = css({
    input: {
      display: "none",
    },
    "&> div": {
      width: "16px",
      height: "16px",
      borderRadius: radioType === "radio" ? "50%" : "4px",
      boxShadow: "inset 0 1px 2px rgba(0, 0, 0, .1)",
      border: "1px solid #8c8f94",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    "&.radio-checked": {
      "&> div": {
        borderColor: radioType === "checkbox" ? "transparent" : "#7F56D9",
        backgroundColor: radioType === "checkbox" ? "#7F56D9" : "transparent",
        "&::before":
          radioType === "radio"
            ? {
                content: "''",
                height: "6px",
                width: "6px",
                borderRadius: "50%",
                display: "block",
                backgroundColor: "#7F56D9",
              }
            : {},
      },
      "& label": {
        color: "#7F56D9",
      },
    },
    label: {
      lineHeight: 1,
    },
  });

  return (
    <GridContainer
      {...{
        gap: radioBoxGap,
        padding: 0,
        containerType: "flex",
        alignItems: "center",
        className: cx(
          radioStyle,
          { disabled },
          checked ? "radio-checked" : "",
          className
        ),
        style: style,
        extraProps: { onClick: () => handleChange() },
      }}
    >
      <input type="radio" checked={checked} disabled={disabled} />
      <div>{radioType === "checkbox" ? ICONS.checkMark2 : null}</div>
      <label>{label}</label>
    </GridContainer>
  );
};

interface RadioGroupProps {
  group: { id: string; label: React.ReactNode }[];
  checked?: string; // Checked id
  onChange?: (checked: string) => void;
  disabled?: boolean;
  gap?: number;
  numberOfColumns?: number;
  groupStyle?: React.CSSProperties;
  radioBoxStyle?: React.CSSProperties;
  className?: string;
  groupClassName?: string;
  radioType?: "radio" | "checkbox";
}

const Radio: React.FC<RadioGroupProps> = ({
  radioType = "radio",
  group,
  checked,
  onChange,
  gap,
  numberOfColumns,
  groupStyle,
  radioBoxStyle,
  groupClassName = "",
  className = "",
}) => {
  return (
    <GridContainer
      {...{
        padding: 0,
        numberOfColumn: numberOfColumns,
        gap: gap,
        style: groupStyle,
        className: groupClassName,
      }}
    >
      {group.map((item) => (
        <RadioLabel
          key={item.id}
          radioType={radioType}
          label={item.label}
          checked={checked === item.id}
          style={radioBoxStyle}
          className={className}
          onChange={() => {
            if (onChange) {
              onChange(item.id);
            }
          }}
        />
      ))}
    </GridContainer>
  );
};

export default Radio;
