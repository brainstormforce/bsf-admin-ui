import React from "react";
import { css, cx } from "@emotion/css";
import { ICONS } from "../utility";
import { label as labelVars } from "../css-variables";

interface LabelProps {
  type: "text" | "icon" | "badge";
  content: React.ReactNode;
  icon_key?: string;
  badgeSize?: "small" | "medium" | "large";
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
}

const Label: React.FC<LabelProps> = ({
  type,
  content,
  badgeSize = "medium",
  onClick,
  style = {},
  icon_key,
  className,
}) => {
  
  const badgeStyle: React.CSSProperties = {};
  if (type === "badge") {
    // Add some padding and border radius to the badge.
    badgeStyle["padding"] = labelVars.padding
    badgeStyle["border"] = labelVars.border;
    badgeStyle["borderRadius"] = labelVars.borderRadius;

    switch (badgeSize) {
      case "small":
        badgeStyle["fontSize"] = labelVars.smallSize;
        break;
      case "medium":
        badgeStyle["fontSize"] = labelVars.mediumSize;
        break;
      case "large":
        badgeStyle["fontSize"] = labelVars.largeSize;
        break;
    }
  }
  
  let labelStyle= {
    color: labelVars.color,
    cursor: onClick ? "pointer" : "default",
    fontWeight: "bold",
    width: "fit-content",
    ...badgeStyle,
    ...style,
  };

  let labelClass = css( labelStyle );

  // if className is passed, add it to the labelClass
  if (className) {
    labelClass = cx(labelClass, className);
  }

  // let content: React.ReactNode = text;
  if (type === "icon" && icon_key) {
    if (ICONS[icon_key]) {
      content = ICONS[icon_key];
    }
  }

  return (
    <div className={labelClass} onClick={onClick}>
      {content}
    </div>
  );
};

export default Label;
