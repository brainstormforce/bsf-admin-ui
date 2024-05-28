import React from "react";
import { css, cx } from "@emotion/css";
import { ICONS } from "../utility";

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
    badgeStyle["padding"] = "2px 6px";
    badgeStyle["border"] = "1px solid #e2e8f0";
    badgeStyle["borderRadius"] = "4px";

    switch (badgeSize) {
      case "small":
        badgeStyle["fontSize"] = "10px";
        break;
      case "medium":
        badgeStyle["fontSize"] = "14px";
        break;
      case "large":
        badgeStyle["fontSize"] = "18px";
        break;
    }
  }
  
  let labelStyle= {
    color:"#94a3b8",
    cursor: onClick ? "pointer" : "default",
    fontSize: "14px",
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
