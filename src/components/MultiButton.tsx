import React from "react";
import GridContainer from "./GridContainer";

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
  backgroundColor = "#007bff",
  color = "#ffffff",
  hoverColor = "#0056b3",
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
      border: "1px solid #E2E8F0",
      borderRadius: "8px",
      overflow: "hidden",

      "& > div": {
        padding: "10px 12px",
        color: "#020617",
        borderRight: "1px solid #E2E8F0",
        ...buttonItemCss,
        "&:last-child": {
          borderRight: "none",
        },
        "&.active": {
          backgroundColor: "#FAF5FF",
        },
      },
    };
  } else {
    buttonCss = {
      padding: "5px",
      borderRadius: "6px",
      backgroundColor: "#f3f4f6",

      "& > div": {
        padding: "6px 12px",
        color: "#64748B",
        backgroundColor: "transparent",
        borderRadius: "4px",
        ...buttonItemCss,
        "&.active": {
          color: "#020617",
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
        gap: 0,
        padding: 0,
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
