import * as React from "react";
import { ReactNode } from "react";
import { cx, css } from "@emotion/css";
type PropsType = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  //   content?: ReactNode;
  //   loading?: boolean;
  //   disabled?: boolean;
  //   icon?: ReactNode;
  // iconPosition?: "left" | "right";
  style?: React.CSSProperties;
  // type?: 'prime' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'light' | 'dark';
  // size?: 'sm' | 'md' | 'lg' | 'base';
};
const Button = (props: PropsType) => {
  const { children, onClick, style } = props;
  const additionalStyle = style && typeof style === "object" ? style : {};

  const allUnset = css`
    all: unset;
  `;

  let baseCss = {
    cursor: "pointer",
    borderRadius: "6px",
    fontSize: "14px",
    padding: "9px 17px",
    backgroundColor: "#6B21A8",
    color: "white",
    fontWeight: 500,
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
