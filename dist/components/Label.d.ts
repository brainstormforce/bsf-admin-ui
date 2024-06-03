import React from "react";
interface LabelProps {
  type: "text" | "icon" | "badge";
  content: React.ReactNode;
  icon_key?: string;
  badgeSize?: "small" | "medium" | "large";
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
}
declare const Label: React.FC<LabelProps>;
export default Label;
