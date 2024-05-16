import * as React from 'react';
import { css, cx } from '@emotion/css';

const Button = ({ children, onClick }) => {
    const color = "darkgreen";
    css `
  &.extra-class {
    background-color: hotpink;
  }
  &:hover {
    color: ${color};
  }
`;
    const cls1 = css `
  font-size: 20px;
  background: green;
`;
    const cls2 = css `
  font-size: 20px;
  background: blue;
`;
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { onClick: onClick, className: cx(cls1, cls2) }, children)));
};

export { Button };
