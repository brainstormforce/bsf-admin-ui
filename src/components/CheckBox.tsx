import React from "react";
import { css, cx } from "@emotion/css";
import Container from "./Container";
import { ICONS } from "../utility";
import { color } from "../css-variables";

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
      width: "16px",
      height: "16px",
      borderRadius: "4px",
      boxShadow: "inset 0 1px 2px rgba(0, 0, 0, .1)",
      border: "1px solid " + color.foreground,
    },
    "&.checkbox-checked": {
      "&> div": {
        borderColor: "#007cba",
        "&::before": {
          content: `url(${ICONS.checkMark})`,
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
          { disabled },
          checked ? "checkbox-checked" : "",
          className
        ),
        style: style,
      }}
    >
      <input type="checkbox" checked={checked} disabled={disabled} />
      <div onClick={() => handleChange()}></div>
      <label onClick={() => handleChange()}>{label}</label>
    </Container>
  );
};

interface CheckboxGroupProps {
  group: { id: string; label: React.ReactNode; checked: boolean }[];
  onChange?: (checked: boolean, id: string) => void;
  disabled?: boolean;
  gap?: number;
  columnss?: number;
  groupStyle?: React.CSSProperties;
  checkboxStyle?: React.CSSProperties;
  className?: string;
  groupClassName?: string;
}

const CheckBox: React.FC<CheckboxGroupProps> = ({
  group,
  onChange,
  gap,
  columnss,
  groupStyle,
  checkboxStyle,
  groupClassName = "",
  className = "",
}) => {
  return (
    <Container
      {...{
        padding: 10,
        columns: columnss,
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

export default CheckBox;
