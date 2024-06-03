import * as React from "react";
import { ReactNode } from "react";
import { cx, css } from "@emotion/css";
import { button as buttonVar } from "../css-variables";
type PropsType = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  size?: "small" | "medium" | "large";
};
const Button = (props: PropsType) => {
  const { children, onClick, style, size = "medium" } = props;
  const additionalStyle = style && typeof style === "object" ? style : {};

  const allUnset = css`
    all: unset;
  `;

  let fontSize;
  let padding;
  let borderRadius;
  switch (size) {
    case "small":
      fontSize = buttonVar.smallFontSize;
      padding = buttonVar.smallPadding;
      borderRadius = buttonVar.smallBorderRadius;
      break;
    case "medium":
      fontSize = buttonVar.mediumFontSize;
      padding = buttonVar.mediumPadding;
      borderRadius = buttonVar.mediumBorderRadius;
      break;
    case "large":
      fontSize = buttonVar.largeFontSize;
      padding = buttonVar.largePadding;
      borderRadius = buttonVar.largeBorderRadius;
      break;
    default:
      fontSize = buttonVar.mediumFontSize;
      padding = buttonVar.mediumPadding;
      borderRadius = buttonVar.mediumBorderRadius;
  }

  let baseCss = {
    cursor: "pointer",
    fontSize,
    padding,
    borderRadius,
    backgroundColor: buttonVar.backgroundColor,
    color: buttonVar.color,
    fontWeight: buttonVar.fontWeight,
    width: "fit-content",
    "&:hover": {
      backgroundColor: buttonVar.hoverBackgroundColor,
      color: buttonVar.hoverColor,
    },
    ...additionalStyle,
  };

  const completeStyle = css(baseCss);

  return (
    <>
      <button onClick={onClick} className={cx(allUnset, completeStyle)}>
        {children}
      </button>
    </>
  );
};

export default Button;
