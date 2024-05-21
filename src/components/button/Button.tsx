import * as React from "react";
import { ReactNode } from "react";
import { cx, css } from '@emotion/css'
import { cssVariables } from "../../css-variables";
type PropsType = {
  children: ReactNode;
  onClick?: () => void;
  type?: number;
};
const Button = ({ children, onClick, type = 1 }: PropsType) => {

const buttonVarCss = "var(--bsf-admin-button-size-common, 9px)";

// const buttonVarCssColor = "var(--bsf-admin-button-color, var(--bsf-admin-theme-color, blue))";

const buttonVarCssColor = cssVariables.colorPrimary;

/* :root {
--bsf-admin-button-size: 59px;
--bsf-admin-button-size-common: var(--bsf-admin-button-size, 21px);
} */




const cls1 = css`
all: unset;
font-size: ${buttonVarCss};
color: #323030;
border: 1px solid;
padding: 12px 20px;
border-radius: 5px;
margin: 10px 0;
display: block;
cursor: pointer;
line-height: 1;
background-color: ${buttonVarCssColor};
`;
let cls2 = css``;

// change ty

// Add background red based on the type if type 2 is passed
if (type === 2) {
  cls2 = css`
    color: #fff;
    background-color: #3a734f;
  `;
}

  return (
    <>
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
