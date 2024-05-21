import * as React from 'react';
import React__default, { useEffect } from 'react';
import { css, cx, injectGlobal } from '@emotion/css';

// // Add some color scheme for the button in js.
// export const colorScheme = {
//     primary: 'blue',
//     secondary: 'green',
//     tertiary: 'red'
//     };
// // Add some font size for the button in js.
// export const fontSize = {
//     small: "var(--bsf-admin-button-size, 21px)",
//     medium: '16px',
//     large: '20px'
//     };
// light/slate
// #6b21a8
// dark/slate
// #f8fafc
// light/zinc
// #18181b
// dark/zinc
// #fafafa
// Primary colour for <Button />
const cssVariables = {
    colorPrimary: "var(--bsf-admin-ui-color-primary, #6b21a8)",
    colorSecondary: "var(--bsf-admin-ui-color-secondary, #f8fafc)",
    colorTertiary: "var(--bsf-admin-ui-color-tertiary, #18181b)",
    fontSizeSmall: "var(--bsf-admin-ui-font-size-small, 21px)",
};

const Button = ({ children, onClick, type = 1 }) => {
    const buttonVarCss = "var(--bsf-admin-button-size-common, 9px)";
    // const buttonVarCssColor = "var(--bsf-admin-button-color, var(--bsf-admin-theme-color, blue))";
    const buttonVarCssColor = cssVariables.colorPrimary;
    /* :root {
    --bsf-admin-button-size: 59px;
    --bsf-admin-button-size-common: var(--bsf-admin-button-size, 21px);
    } */
    const cls1 = css `
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
    let cls2 = css ``;
    // change ty
    // Add background red based on the type if type 2 is passed
    if (type === 2) {
        cls2 = css `
    color: #fff;
    background-color: #3a734f;
  `;
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { onClick: onClick, className: cx(cls1, cls2) }, children)));
};

const GridContainer = (props) => {
    const { containerType = "grid", gap = 10, numberOfColumn, padding = 10, justifyContent, alignItems, alignContent, justifyItems, className, style, children, } = props;
    useEffect(() => {
        injectGlobal `
    #wpcontent {
          padding: 0;
      }
    `;
    }, []);
    // If additional style is not blank and should be object then assign it to additionalStyle variable else assign empty object.
    const additionalStyle = style && typeof style === "object" ? style : {};
    let styleObject = {
        display: containerType,
        gap: gap,
        padding: padding,
        justifyContent: justifyContent,
        alignItems: alignItems,
        alignContent: alignContent,
        justifyItems: justifyItems,
        ...additionalStyle,
    };
    // Add grid items css if gridItemSettings is passed in props.
    if (props?.gridItemSettings) {
        props.gridItemSettings.forEach((item, index) => {
            const gridItemStyle = {
                gridColumn: item.columnSpan ? `span ${item.columnSpan}` : "auto",
                ...item.style,
            };
            const objectKey = `& > :nth-child(${index + 1})`;
            styleObject = { ...styleObject, [objectKey]: gridItemStyle };
        });
    }
    // Add number of column if it is passed in props and should be number type and type should be grid.
    if (numberOfColumn &&
        typeof numberOfColumn === "number" &&
        containerType === "grid") {
        styleObject["gridTemplateColumns"] = `repeat(${numberOfColumn}, 1fr)`;
    }
    const mainClass = css(styleObject);
    return React__default.createElement("div", { className: cx(mainClass, className) }, children);
};

export { Button, GridContainer };
