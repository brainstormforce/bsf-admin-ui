import React from "react";
import { css, cx } from "@emotion/css";
import GridContainer from "./GridContainer";
import WithDescription from "./WithDescription";
import { color as colorsVar } from "../css-variables";

interface SwitchProps {
  checked?: boolean;
  onClick: () => void;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onColor?: string;
  offColor?: string;
  thumbColor?: string;
  label?: string;
  labelPosition?: "left" | "right";
  labelGap?: number;
  description?: React.ReactNode;
  descriptionGap?: number;
}

const Switch: React.FC<SwitchProps> = ({
  checked = false,
  onClick,
  disabled = false,
  size = "small",
  onColor = colorsVar.primary,
  offColor = colorsVar.border,
  thumbColor = "#fff",
  label,
  labelPosition = "right",
  labelGap = 8,
  description,
  descriptionGap = 6,
}) => {
  const switchSize = {
    small: {
      width: "36px",
      height: "20px",
      thumbSize: "16px",
    },
    medium: {
      width: "60px",
      height: "30px",
      thumbSize: "26px",
    },
    large: {
      width: "80px",
      height: "40px",
      thumbSize: "36px",
    },
  }[size];

  const switchClass = css({
    position: "relative",
    display: "inline-block",
    width: switchSize.width,
    height: switchSize.height,
    backgroundColor: checked ? onColor : offColor,
    borderRadius: "34px",
    cursor: "pointer",
    transition: "background-color 0.2s",
  });

  const thumbClass = css({
    position: "absolute",
    top: "50%",
    left: checked ? `calc(100% - ${switchSize.thumbSize} - 2px)` : "2px",
    width: switchSize.thumbSize,
    height: switchSize.thumbSize,
    backgroundColor: thumbColor,
    borderRadius: "50%",
    transform: "translateY(-50%)",
    transition: "left 0.2s",
  });

  const labelClass = css({
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "18px",
    display: "block",
    color: colorsVar.muted,
  });

  const handleOnclick = () => !disabled && onClick();

  const labelContent = (
    <span className={labelClass} onClick={handleOnclick}>
      {label}
    </span>
  );

  return (
    <WithDescription
      {...{
        gap: descriptionGap,
        description,
      }}
    >
      <GridContainer
        {...{
          containerType: "flex",
          gap: labelGap,
          alignItems: "center",
          style: disabled ? { opacity: 0.5 } : {},
        }}
      >
        {label && labelPosition === "left" && labelContent}
        <div className={switchClass} onClick={handleOnclick}>
          <div className={thumbClass}></div>
        </div>
        {label && labelPosition === "right" && labelContent}
      </GridContainer>
    </WithDescription>
  );
};

export default Switch;
