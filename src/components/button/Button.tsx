import * as React from "react";
import { ReactNode } from "react";
import { cx, css } from '@emotion/css'

type PropsType = {
  children: ReactNode;
  onClick?: () => void;
};
const Button = ({ children, onClick }: PropsType) => {
  const color = "darkgreen";

  const buttonCss = css`
  &.extra-class {
    background-color: hotpink;
  }
  &:hover {
    color: ${color};
  }
`;

const cls1 = css`
  font-size: 20px;
  background: green;
`;
const cls2 = css`
  font-size: 20px;
  background: blue;
`;

  return (
    <>
      <button
        onClick={onClick}
        className={cx(cls1, cls2)}
      >
        {children}
      </button>
      <button
        onClick={onClick}
        className={cx(cls1, cls2)}
      >
        {children}
      </button>
    </>
  );
};

// export { Button };
export default Button;
