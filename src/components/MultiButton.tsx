import React from "react";
import GridContainer from "./GridContainer";
import { color as colorsVar } from "../css-variables";

interface MultiButtonControlProps {
  controlStyle?: "outline" | "filled";
  width?: "fit-content" | "full-width";
  onClick: (id: string) => void;
  activeItem: string;
  items: { id: string; label: string }[];
  backgroundColor?: string;
  color?: string;
  hoverColor?: string;
  className?: string;
}

const MultiButtonControl: React.FC<MultiButtonControlProps> = ({
  controlStyle = "filled",
  width = "fit-content",
  onClick,
  activeItem,
  items,
  backgroundColor = colorsVar.primaryBackground,
  color = colorsVar.text,
  hoverColor = colorsVar.foreground,
  className = "",
}) => {
  let containerClass = "bsf-multi-button-control";

  // If the className prop is passed, add it to the containerClass
  if (className) {
    containerClass += " " + className;
  }

  let buttonCss = {};

  let buttonItemCss = {
    fontWeight: 500,
    fontSize: "14px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  if (controlStyle === "outline") {
    buttonCss = {
      border: "1px solid " + colorsVar.borderLight,
      borderRadius: "8px",
      overflow: "hidden",

      "& > div": {
        padding: "10px 12px",
        color: color,
        borderRight: "1px solid " + colorsVar.borderLight,
        ...buttonItemCss,
        "&:last-child": {
          borderRight: "none",
        },
        "&.active": {
          backgroundColor: backgroundColor,
        },
      },
    };
  } else {
    buttonCss = {
      padding: "5px",
      borderRadius: "6px",
      backgroundColor: backgroundColor,

      "& > div": {
        padding: "6px 12px",
        color: color,
        backgroundColor: "transparent",
        borderRadius: "4px",
        ...buttonItemCss,
        
        "&.active": {
          color: hoverColor,
          backgroundColor: "#ffffff",
        },
      },
    };
  }

  buttonCss =
    width === "full-width"
      ? { ...buttonCss, ...{ width: "100%" } }
      : { ...buttonCss, ...{ width: "fit-content" } };

  let buttonItemClass = (id: string) =>
    "bsf-multi-button-control__item" + (activeItem === id ? " active" : "");

  return (
    <GridContainer
      {...{
        numberOfColumn: items.length,
        className: containerClass,
        style: buttonCss,
      }}
    >
      {items.map((item) => (
        <div
          key={item.id}
          className={buttonItemClass(item.id)}
          onClick={() => item.id !== activeItem && onClick(item.id)}
        >
          {item.label}
        </div>
      ))}
    </GridContainer>
  );
};

export default MultiButtonControl;
