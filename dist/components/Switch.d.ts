import React from "react";
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
declare const Switch: React.FC<SwitchProps>;
export default Switch;
