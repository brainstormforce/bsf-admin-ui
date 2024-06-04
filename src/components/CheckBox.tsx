import React from "react";
import { css, cx } from "@emotion/css";
import Container from "./Container";
import { ICONS } from "../utility";
import { checkbox as checkboxVars } from "../css-variables";

interface CheckboxProps {
  label?: React.ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
  gap?: number;
}

const CheckboxWithLabel: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  disabled,
  gap = 8,
  style,
  className = "",
}) => {
  const handleChange = () => {
    if (onChange) {
      onChange(!checked);
    }
  };

  const checkboxStyle = css({
    input: {
      display: "none",
    },
    "&> div": {
      cursor: "pointer",
      width: checkboxVars.size,
      height: checkboxVars.size,
      borderRadius: checkboxVars.borderRadius,
      boxShadow: checkboxVars.checkBoxBoxShadow,
      border: checkboxVars.border,
    },
    "&.checkbox-checked": {
      "&> div": {
        borderColor: checkboxVars.checkedBorderColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "> svg": {
          height: checkboxVars.checkMarkSize,
          width: checkboxVars.checkMarkSize,
          color: checkboxVars.checkedBorderColor,
        },
      },
    },
    label: {
      lineHeight: 1,
    },
  });

  return (
    <Container
      {...{
        gap: gap,
        containerType: "flex",
        alignItems: "center",
        className: cx(
          checkboxStyle,
          {
            disabled,
          },
          checked ? "checkbox-checked" : "",
          className,
        ),
        style: style,
      }}
    >
      <input type="checkbox" checked={checked} disabled={disabled} />
      <div onClick={() => handleChange()}>{checked && ICONS.checkMark}</div>
      <label onClick={() => handleChange()}>{label}</label>
    </Container>
  );
};

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

const Checkbox: React.FC<CheckboxGroupProps> = ({
  group,
  onChange,
  gap,
  columns,
  groupStyle,
  checkboxStyle,
  groupClassName = "",
  className = "",
}) => {
  return (
    <Container
      {...{
        padding: 10,
        columns: columns,
        gap: gap,
        style: groupStyle,
        className: groupClassName,
      }}
    >
      {group.map((item) => (
        <CheckboxWithLabel
          key={item.id}
          label={item.label}
          checked={item.checked}
          style={checkboxStyle}
          className={className}
          onChange={(checked) => {
            if (onChange) {
              onChange(checked, item.id);
            }
          }}
        />
      ))}
    </Container>
  );
};

export default Checkbox;
