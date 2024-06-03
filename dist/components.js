import * as React from "react";
import React__default, {
  forwardRef,
  useRef,
  useImperativeHandle,
  useState,
} from "react";
import { css, cx } from "@emotion/css";
import Select from "react-select";

const color = {
  primary: "var(--bsf-admin-primary, #6B21A8)",
  primaryHover: "var(--bsf-admin-primary-hover, #7E22CE)",
  secondary: "var(--bsf-admin-secondary, #F3E8FF)",
  secondaryHover: "var(--bsf-admin-secondary-hover, #E9D5FF)",
  primaryBackground: "var(--bsf-admin-primary-background, #FAF5FF)",
  mutedBackground: "var(--bsf-admin-muted-background, #F3F4F6)",
  background: "var(--bsf-admin-background, #FFFFFF)",
  foreground: "var(--bsf-admin-foreground, #020617)",
  text: "var(--bsf-admin-text, #475569)",
  muted: "var(--bsf-admin-muted, #64748B)",
  border: "var(--bsf-admin-border, #CBD5E1)",
  borderLight: "var(--bsf-admin-border-light, #E2E8F0)",
  alertInfo: "var(--bsf-admin-alert-info, #3B82F6)",
  alertSuccess: "var(--bsf-admin-alert-success, #22C55E)",
  alertWarning: "var(--bsf-admin-alert-warning, #F59E0B)",
  alertError: "var(--bsf-admin-alert-error, #EF4444)",
  alertInfoBg: "var(--bsf-admin-alert-info-bg, #EFF6FF)",
  alertSuccessBg: "var(--bsf-admin-alert-success-bg, #F0FDF4)",
  alertWarningBg: "var(--bsf-admin-alert-warning-bg, #FFFBEB)",
  alertErrorBg: "var(--bsf-admin-alert-error-bg, #FEF2F2)",
  alertInfoText: "var(--bsf-admin-alert-info-text, #2563eb)",
  alertSuccessText: "var(--bsf-admin-alert-success-text, #16a34a)",
  alertWarningText: "var(--bsf-admin-alert-warning-text, #D97706)",
  alertErrorText: "var(--bsf-admin-alert-error-text, #dc2626)",
};
const input = {
  fontSize: "var(--bsf-admin-input-font-size, 15px)",
  padding: "var(--bsf-admin-input-padding, 12px 14px)",
  border: "var(--bsf-admin-input-border, 1px solid #d0d5dd)",
  borderRadius: "var(--bsf-admin-input-border-radius, 8px)",
  boxShadow: "var(--bsf-admin-input-box-shadow, 0px 1px 2px 0px #1018280D)",
};
const inputPicker = {
  fontSize: "var(--bsf-admin-input-picker-font-size, 15px)",
  padding: "var(--bsf-admin-input-picker-padding, 12px 14px)",
  border:
    "var(--bsf-admin-input-picker-border, 1px solid " + color.borderLight + ")",
  borderRadius: "var(--bsf-admin-input-picker-border-radius, 8px)",
  boxShadow:
    "var(--bsf-admin-input-picker-box-shadow, 0px 1px 2px 0px " +
    color.borderLight +
    ")",
};
const button = {
  mediumFontSize: "var(--bsf-admin-button-medium-font-size, 14px)",
  mediumPadding: "var(--bsf-admin-button-medium-padding, 9px 17px)",
  mediumBorderRadius: "var(--bsf-admin-button-medium-border-radius, 6px)",
  smallFontSize: "var(--bsf-admin-button-small-font-size, 12px)",
  smallPadding: "var(--bsf-admin-button-small-padding, 7px 14px)",
  smallBorderRadius: "var(--bsf-admin-button-small-border-radius, 6px)",
  largeFontSize: "var(--bsf-admin-button-large-font-size, 16px)",
  largePadding: "var(--bsf-admin-button-large-padding, 11px 20px)",
  largeBorderRadius: "var(--bsf-admin-button-large-border-radius, 6px)",
  backgroundColor:
    "var(--bsf-admin-button-background-color, " + color.primary + ")",
  color: "var(--bsf-admin-button-color, #FFFF)",
  fontWeight: "var(--bsf-admin-button-font-weight, 500)",
  hoverBackgroundColor:
    "var(--bsf-admin-button-hover-background-color, " +
    color.primaryHover +
    ")",
  hoverColor: "var(--bsf-admin-button-hover-color, #FFFF)",
};
const checkbox = {
  size: "var(--bsf-admin-checkbox-size, 16px)",
  borderRadius: "var(--bsf-admin-checkbox-border-radius, 4px)",
  border:
    "var(--bsf-admin-checkbox-border, 1px solid " + color.foreground + ")",
  checkedBorderColor:
    "var(--bsf-admin-checkbox-checked-border-color, " + color.primary + ")",
  checkMarkSize: "var(--bsf-admin-checkbox-check-mark-size, 10px)",
  checkMarkColor:
    "var(--bsf-admin-checkbox-check-mark-color, " + color.primary + ")",
  checkBoxBoxShadow:
    "var(--bsf-admin-checkbox-box-shadow, inset 0 1px 2px #0000001a)",
};
const textSizes = {
  h1: "var(--bsf-admin-text-size-h1, 32px)",
  h2: "var(--bsf-admin-text-size-h2, 18px)",
  h3: "var(--bsf-admin-text-size-h3, 14px)",
};
const card = {
  border: "var(--bsf-admin-card-border, 1px solid " + color.borderLight + ")",
  borderRadius: "var(--bsf-admin-card-border-radius, 4px)",
  boxShadow:
    "var(--bsf-admin-card-box-shadow, 0px 1px 2px 0px " +
    color.borderLight +
    ")",
  backgroundColor:
    "var(--bsf-admin-card-background-color, " + color.background + ")",
  padding: "var(--bsf-admin-card-padding, 24px)",
  gap: "var(--bsf-admin-card-gap, 24px)",
  width: "var(--bsf-admin-card-width, 224px)",
  cardHeaderGap: "var(--bsf-admin-card-header-gap, 8px)",
  cardContentGap: "var(--bsf-admin-card-content-gap, 16px)",
};
const label = {
  color: "var(--bsf-admin-label-color, #94a3b8)",
  fontSize: "var(--bsf-admin-label-font-size, 14px)",
  padding: "var(--bsf-admin-label-padding, 2px 6px)",
  border: "var(--bsf-admin-label-border, 1px solid " + color.borderLight + ")",
  borderRadius: "var(--bsf-admin-label-border-radius, 4px)",
  smallSize: "var(--bsf-admin-label-small-size, 10px)",
  mediumSize: "var(--bsf-admin-label-medium-size, 14px)",
  largeSize: "var(--bsf-admin-label-large-size, 18px)",
};
const multiButton = {
  background:
    "var(--bsf-admin-multi-button-background-color, " +
    color.primaryBackground +
    ")",
  color: "var(--bsf-admin-multi-button-color, " + color.text + ")",
  hoverColor:
    "var(--bsf-admin-multi-button-hover-color, " + color.foreground + ")",
  fontSize: "var(--bsf-admin-multi-button-font-size, 14px)",
  outlineBorder:
    "var(--bsf-admin-multi-button-outline-border, 1px solid " +
    color.borderLight +
    ")",
  outlineBorderRadius:
    "var(--bsf-admin-multi-button-outline-border-radius, 8px)",
  outlinePadding: "var(--bsf-admin-multi-button-outline-padding, 10px 12px)",
  filledPadding: "var(--bsf-admin-multi-button-filled-padding, 5px)",
  filledInnerPadding: "var(--bsf-admin-multi-button-filled-padding, 6px 12px)",
  filledBorderRadius: "var(--bsf-admin-multi-button-filled-border-radius, 6px)",
  filledBorderRadiusInner:
    "var(--bsf-admin-multi-button-filled-border-radius-inner, 4px)",
};
const radio = {
  gap: "var(--bsf-admin-radio-box-gap, 8px)",
  padding: "var(--bsf-admin-radio-box-padding, 12px 16px)",
  containerBorder: "var(--bsf-admin-radio-box-border, 1px solid #EAECF0)",
  checkedBorder: "var(--bsf-admin-radio-box-checked-border, 1px solid #7F56D9)",
  borderRadius: "var(--bsf-admin-radio-box-border-radius, 6px)",
  size: "var(--bsf-admin-radio-box-size, 16px)",
  boxShadow:
    "var(--bsf-admin-radio-box-shadow, inset 0 1px 2px rgba(0, 0, 0, .1))",
  innerBorder: "var(--bsf-admin-radio-box-inner-border, 1px solid #8c8f94)",
  borderColor: "var(--bsf-admin-radio-box-border-color, #8c8f94)",
  radioInnerSize: "var(--bsf-admin-radio-inner-size, 6px)",
  backgroundColor: "var(--bsf-admin-radio-background-color, #7F56D9)",
};
const switchVar = {
  smallWidth: "var(--bsf-admin-switch-small-width, 36px)",
  smallHeight: "var(--bsf-admin-switch-small-height, 20px)",
  smallThumbSize: "var(--bsf-admin-switch-small-thumb-size, 16px)",
  mediumWidth: "var(--bsf-admin-switch-medium-width, 60px)",
  mediumHeight: "var(--bsf-admin-switch-medium-height, 30px)",
  mediumThumbSize: "var(--bsf-admin-switch-medium-thumb-size, 26px)",
  largeWidth: "var(--bsf-admin-switch-large-width, 80px)",
  largeHeight: "var(--bsf-admin-switch-large-height, 40px)",
  largeThumbSize: "var(--bsf-admin-switch-large-thumb-size, 36px)",
  onColor: "var(--bsf-admin-switch-on-color, " + color.primary + ")",
  offColor: "var(--bsf-admin-switch-off-color, " + color.border + ")",
  thumbColor: "var(--bsf-admin-switch-thumb-color, #FFFFFF)",
  borderRadius: "var(--bsf-admin-switch-border-radius, 34px)",
  labelFontSize: "var(--bsf-admin-switch-label-font-size, 12px)",
  labelLineHeight: "var(--bsf-admin-switch-label-line-height, 18px)",
  labelColor: "var(--bsf-admin-switch-label-color, " + color.muted + ")",
  labelGap: "var(--bsf-admin-switch-label-gap, 8px)",
  descriptionGap: "var(--bsf-admin-switch-description-gap, 6px)",
};
const description = {
  color: "var(--bsf-admin-description-color, " + color.muted + ")",
  fontSize: "var(--bsf-admin-description-font-size, 12px)",
  lineHeight: "var(--bsf-admin-description-line-height, 18px)",
  gap: "var(--bsf-admin-description-gap, 6px)",
};

const Button = (props) => {
  const { children, onClick, style, size = "medium" } = props;
  const additionalStyle = style && typeof style === "object" ? style : {};
  const allUnset = css`
    all: unset;
  `;
  let fontSize;
  let padding;
  let borderRadius;
  switch (size) {
    case "small":
      fontSize = button.smallFontSize;
      padding = button.smallPadding;
      borderRadius = button.smallBorderRadius;
      break;
    case "medium":
      fontSize = button.mediumFontSize;
      padding = button.mediumPadding;
      borderRadius = button.mediumBorderRadius;
      break;
    case "large":
      fontSize = button.largeFontSize;
      padding = button.largePadding;
      borderRadius = button.largeBorderRadius;
      break;
    default:
      fontSize = button.mediumFontSize;
      padding = button.mediumPadding;
      borderRadius = button.mediumBorderRadius;
  }
  let baseCss = {
    cursor: "pointer",
    fontSize,
    padding,
    borderRadius,
    backgroundColor: button.backgroundColor,
    color: button.color,
    fontWeight: button.fontWeight,
    width: "fit-content",
    "&:hover": {
      backgroundColor: button.hoverBackgroundColor,
      color: button.hoverColor,
    },
    ...additionalStyle,
  };
  const completeStyle = css(baseCss);
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "button",
      { onClick: onClick, className: cx(allUnset, completeStyle) },
      children,
    ),
  );
};

const Container = (props) => {
  const {
    containerType = "grid",
    gap = 0,
    columns,
    padding = 0,
    justifyContent,
    alignItems,
    alignContent,
    justifyItems,
    direction,
    className,
    style,
    children,
    extraProps,
  } = props;
  // If additional style is not blank and should be object then assign it to additionalStyle variable else assign empty object.
  const additionalStyle = style && typeof style === "object" ? style : {};
  const svgCss = {
    "& svg": { display: "flex" },
  };
  let styleObject = {
    display: containerType,
    gap: gap,
    padding: padding,
    justifyContent: justifyContent,
    alignItems: alignItems,
    alignContent: alignContent,
    justifyItems: justifyItems,
    ...svgCss,
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
  if (columns && typeof columns === "number" && containerType === "grid") {
    styleObject["gridTemplateColumns"] = `repeat(${columns}, 1fr)`;
  }
  // Add direction if it is passed in props and should be string type and type should be flex.
  if (direction && typeof direction === "string" && containerType === "flex") {
    styleObject["flexDirection"] = direction;
  }
  const mainClass = css(styleObject);
  return React__default.createElement(
    React__default.Fragment,
    null,
    React__default.createElement(
      "div",
      { className: cx(mainClass, className), ...extraProps },
      children,
    ),
  );
};

const icons = {
  breadCrumb: React__default.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    React__default.createElement("polyline", { points: "9 18 15 12 9 6" }),
  ),
  support: React__default.createElement(
    "svg",
    {
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "#ffffff",
      xmlns: "http://www.w3.org/2000/svg",
    },
    React__default.createElement("path", {
      d: "M7.87891 5.51884C9.05048 4.49372 10.95 4.49372 12.1215 5.51884C13.2931 6.54397 13.2931 8.20603 12.1215 9.23116C11.9176 9.40958 11.6917 9.55695 11.4513 9.67326C10.7056 10.0341 10.0002 10.6716 10.0002 11.5V12.25M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10ZM10 15.25H10.0075V15.2575H10V15.25Z",
      stroke: "#475569",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
    }),
  ),
  whatsNew: React__default.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
    },
    React__default.createElement("path", {
      d: "M9.16667 4.90182V16.0335C9.16667 16.8434 8.51008 17.5 7.70015 17.5C7.08038 17.5 6.52752 17.1104 6.31907 16.5267L4.53039 11.4024M15 10.8333C16.3807 10.8333 17.5 9.71404 17.5 8.33333C17.5 6.95262 16.3807 5.83333 15 5.83333M4.53039 11.4024C3.33691 10.8951 2.5 9.71194 2.5 8.33333C2.5 6.49238 3.99238 5 5.83333 5H7.36007C10.7773 5 13.7141 3.97159 15 2.5L15 14.1667C13.7141 12.6951 10.7773 11.6667 7.36007 11.6667L5.83331 11.6667C5.37098 11.6667 4.93064 11.5725 4.53039 11.4024Z",
      stroke: "#475569",
      "stroke-width": "1.4",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
    }),
  ),
  checkMark: React__default.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "9",
      height: "7",
      viewBox: "0 0 9 7",
      fill: "none",
    },
    React__default.createElement("path", {
      d: "M8.87179 0.545513L8.45503 0.128761C8.28333 -0.0429202 8.00306 -0.0429202 7.82988 0.128761L3.45987 4.50027L1.17066 2.21107C0.998981 2.03937 0.718691 2.03937 0.545533 2.21107L0.128761 2.62782C-0.0429202 2.79952 -0.0429202 3.07979 0.128761 3.25295L3.14584 6.27C3.23242 6.35659 3.34393 6.40062 3.45693 6.40062C3.56994 6.40062 3.68292 6.35659 3.76805 6.27L8.86737 1.17066C9.04347 0.996046 9.04347 0.717233 8.87179 0.545513Z",
      fill: "currentColor",
    }),
  ),
};

const Label = ({
  type,
  content,
  badgeSize = "medium",
  onClick,
  style = {},
  icon_key,
  className,
}) => {
  const badgeStyle = {};
  if (type === "badge") {
    // Add some padding and border radius to the badge.
    badgeStyle["padding"] = label.padding;
    badgeStyle["border"] = label.border;
    badgeStyle["borderRadius"] = label.borderRadius;
    switch (badgeSize) {
      case "small":
        badgeStyle["fontSize"] = label.smallSize;
        break;
      case "medium":
        badgeStyle["fontSize"] = label.mediumSize;
        break;
      case "large":
        badgeStyle["fontSize"] = label.largeSize;
        break;
    }
  }
  let labelStyle = {
    color: label.color,
    cursor: onClick ? "pointer" : "default",
    fontWeight: "bold",
    width: "fit-content",
    ...badgeStyle,
    ...style,
  };
  let labelClass = css(labelStyle);
  // if className is passed, add it to the labelClass
  if (className) {
    labelClass = cx(labelClass, className);
  }
  // let content: React.ReactNode = text;
  if (type === "icon" && icon_key) {
    if (icons[icon_key]) {
      content = icons[icon_key];
    }
  }
  return React__default.createElement(
    "div",
    { className: labelClass, onClick: onClick },
    content,
  );
};

function prefix() {
  return "bsf-admin-ui-";
}

const InfoCard = (props) => {
  const {
    title,
    infoIcon = null,
    disableInfoIcon = false,
    className,
    disableHeader = false,
    children,
    padding = card.padding,
    gap = card.gap,
  } = props;
  let style = !(props.style && typeof props.style === "object")
    ? {}
    : props.style;
  const cardContentClass = prefix() + "info-card-content";
  const classKey = "& ." + cardContentClass;
  let baseCssObject = {
    border: card.border,
    borderRadius: card.borderRadius,
    boxShadow: card.boxShadow,
    backgroundColor: card.backgroundColor,
    [classKey]: {
      display: "grid",
      gap: gap,
      padding: padding,
    },
    "& h2, & h3": {
      color: color.foreground,
      fontWeight: 600,
      margin: 0,
      lineHeight: 1,
    },
    "& h2": {
      fontSize: textSizes.h2,
    },
    "& h3": {
      fontSize: textSizes.h3,
    },
    ...style,
  };
  let header = null;
  if (!disableHeader) {
    const headerStyle = css({
      padding: padding,
      borderBottom: card.border,
      display: "flex",
      alignItems: "center",
      gap: card.cardHeaderGap,
    });
    header = React__default.createElement(
      "div",
      { className: headerStyle },
      React__default.createElement("h2", null, title),
      !disableInfoIcon &&
        React__default.createElement("span", null, infoIcon ? infoIcon : "?"),
    );
  }
  const baseCss = css(baseCssObject);
  return React__default.createElement(
    "div",
    { className: cx(baseCss, className) },
    !disableHeader && header,
    React__default.createElement(
      "div",
      { className: cardContentClass },
      children,
    ),
  );
};
const InfoCardContent = (props) => {
  const { title, className, children } = props;
  let heading = null;
  if (title) {
    const headingStyle = css`
      min-width: ${card.width};
    `;
    heading = React__default.createElement(
      "h3",
      { className: headingStyle },
      title,
    );
  }
  return React__default.createElement(
    Container,
    { containerType: "flex", gap: card.cardContentGap, className: className },
    heading,
    React__default.createElement(
      Container,
      { gap: card.cardContentGap, style: { width: "100%" } },
      children,
    ),
  );
};

const MultiButtonControl = ({
  controlStyle = "filled",
  width = "fit-content",
  onClick,
  activeItem,
  items,
  backgroundColor = multiButton.background,
  color: color$1 = multiButton.color,
  hoverColor = multiButton.hoverColor,
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
    fontSize: multiButton.fontSize,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  if (controlStyle === "outline") {
    buttonCss = {
      border: multiButton.outlineBorder,
      borderRadius: multiButton.outlineBorderRadius,
      overflow: "hidden",
      "& > div": {
        padding: multiButton.outlinePadding,
        color: color$1,
        borderRight: multiButton.outlineBorder,
        ...buttonItemCss,
        "&:last-child": {
          borderRight: "none",
        },
        "&.active": {
          backgroundColor: backgroundColor,
        },
      },
    };
  } else {
    buttonCss = {
      padding: multiButton.filledPadding,
      borderRadius: multiButton.filledBorderRadius,
      backgroundColor: backgroundColor,
      "& > div": {
        padding: multiButton.filledInnerPadding,
        color: color$1,
        backgroundColor: "transparent",
        borderRadius: multiButton.filledBorderRadiusInner,
        ...buttonItemCss,
        "&.active": {
          color: hoverColor,
          backgroundColor: color.background,
        },
      },
    };
  }
  buttonCss =
    width === "full-width"
      ? { ...buttonCss, ...{ width: "100%" } }
      : { ...buttonCss, ...{ width: "fit-content" } };
  let buttonItemClass = (id) =>
    "bsf-multi-button-control__item" + (activeItem === id ? " active" : "");
  return React__default.createElement(
    Container,
    { columns: items.length, className: containerClass, style: buttonCss },
    items.map((item) =>
      React__default.createElement(
        "div",
        {
          key: item.id,
          className: buttonItemClass(item.id),
          onClick: () => item.id !== activeItem && onClick(item.id),
        },
        item.label,
      ),
    ),
  );
};

const WithDescription = ({
  description: description$1,
  gap = description.gap,
  children,
  style,
}) => {
  // Verify description should be null|undefined|false
  if (!description$1) {
    return children;
  }
  const descriptionGapStyle = css({
    fontSize: description.fontSize,
    fontWeight: 400,
    lineHeight: description.lineHeight,
    display: "block",
    color: description.color,
    ...style,
  });
  return React__default.createElement(
    Container,
    { gap: gap },
    children,
    React__default.createElement(
      "span",
      { className: descriptionGapStyle },
      description$1,
    ),
  );
};

const Switch = ({
  checked = false,
  onClick,
  disabled = false,
  size = "small",
  onColor = switchVar.onColor,
  offColor = switchVar.offColor,
  thumbColor = switchVar.thumbColor,
  label,
  labelPosition = "right",
  labelGap = switchVar.labelGap,
  description,
  descriptionGap = switchVar.descriptionGap,
}) => {
  const switchSize = {
    small: {
      width: switchVar.smallWidth,
      height: switchVar.smallHeight,
      thumbSize: switchVar.smallThumbSize,
    },
    medium: {
      width: switchVar.mediumWidth,
      height: switchVar.mediumHeight,
      thumbSize: switchVar.mediumThumbSize,
    },
    large: {
      width: switchVar.largeWidth,
      height: switchVar.largeHeight,
      thumbSize: switchVar.largeThumbSize,
    },
  }[size];
  const switchClass = css({
    position: "relative",
    display: "inline-block",
    width: switchSize.width,
    height: switchSize.height,
    backgroundColor: checked ? onColor : offColor,
    borderRadius: switchVar.borderRadius,
    cursor: "pointer",
    transition: "background-color 0.2s",
  });
  const thumbClass = css({
    position: "absolute",
    top: "50%",
    left: checked ? `calc(100% - ${switchSize.thumbSize} - 2px)` : "2px",
    width: switchSize.thumbSize,
    height: switchSize.thumbSize,
    backgroundColor: thumbColor,
    borderRadius: "50%",
    transform: "translateY(-50%)",
    transition: "left 0.2s",
  });
  const labelClass = css({
    cursor: "pointer",
    fontSize: switchVar.labelFontSize,
    fontWeight: 400,
    lineHeight: switchVar.labelLineHeight,
    display: "block",
    color: switchVar.labelColor,
  });
  const handleOnclick = () => !disabled && onClick();
  const labelContent = React__default.createElement(
    "span",
    { className: labelClass, onClick: handleOnclick },
    label,
  );
  return React__default.createElement(
    WithDescription,
    { gap: descriptionGap, description },
    React__default.createElement(
      Container,
      {
        containerType: "flex",
        gap: labelGap,
        alignItems: "center",
        style: disabled ? { opacity: 0.5 } : {},
      },
      label && labelPosition === "left" && labelContent,
      React__default.createElement(
        "div",
        { className: switchClass, onClick: handleOnclick },
        React__default.createElement("div", { className: thumbClass }),
      ),
      label && labelPosition === "right" && labelContent,
    ),
  );
};

const CheckboxWithLabel = ({
  label,
  checked,
  onChange,
  disabled,
  gap = 8,
  style,
  className = "",
}) => {
  const handleChange = () => {
    if (onChange) {
      onChange(!checked);
    }
  };
  const checkboxStyle = css({
    input: {
      display: "none",
    },
    "&> div": {
      cursor: "pointer",
      width: checkbox.size,
      height: checkbox.size,
      borderRadius: checkbox.borderRadius,
      boxShadow: checkbox.checkBoxBoxShadow,
      border: checkbox.border,
    },
    "&.checkbox-checked": {
      "&> div": {
        borderColor: checkbox.checkedBorderColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "> svg": {
          height: checkbox.checkMarkSize,
          width: checkbox.checkMarkSize,
          color: checkbox.checkedBorderColor,
        },
      },
    },
    label: {
      lineHeight: 1,
    },
  });
  return React__default.createElement(
    Container,
    {
      gap: gap,
      containerType: "flex",
      alignItems: "center",
      className: cx(
        checkboxStyle,
        { disabled },
        checked ? "checkbox-checked" : "",
        className,
      ),
      style: style,
    },
    React__default.createElement("input", {
      type: "checkbox",
      checked: checked,
      disabled: disabled,
    }),
    React__default.createElement(
      "div",
      { onClick: () => handleChange() },
      checked && icons.checkMark,
    ),
    React__default.createElement(
      "label",
      { onClick: () => handleChange() },
      label,
    ),
  );
};
const Checkbox = ({
  group,
  onChange,
  gap,
  columns,
  groupStyle,
  checkboxStyle,
  groupClassName = "",
  className = "",
}) => {
  return React__default.createElement(
    Container,
    {
      padding: 10,
      columns: columns,
      gap: gap,
      style: groupStyle,
      className: groupClassName,
    },
    group.map((item) =>
      React__default.createElement(CheckboxWithLabel, {
        key: item.id,
        label: item.label,
        checked: item.checked,
        style: checkboxStyle,
        className: className,
        onChange: (checked) => {
          if (onChange) {
            onChange(checked, item.id);
          }
        },
      }),
    ),
  );
};

const RadioLabel = ({
  label,
  checked,
  onChange,
  disabled,
  radioBoxGap = radio.gap,
  style,
  className = "",
  radioType,
}) => {
  const handleChange = () => {
    if (onChange) {
      onChange(!checked);
    }
  };
  const containerStyle = {
    padding: radio.padding,
    border: checked ? radio.checkedBorder : radio.containerBorder,
    borderRadius: radio.borderRadius,
    cursor: "pointer",
  };
  style = { ...containerStyle, ...style };
  const radioStyle = css({
    input: {
      display: "none",
    },
    "&> div": {
      width: radio.size,
      height: radio.size,
      borderRadius: radioType === "radio" ? "50%" : "4px",
      boxShadow: radio.boxShadow,
      border: radio.innerBorder,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    "&.radio-checked": {
      "&> div": {
        borderColor:
          radioType === "checkbox" ? "transparent" : radio.backgroundColor,
        backgroundColor:
          radioType === "checkbox" ? radio.backgroundColor : "transparent",
        "&::before":
          radioType === "radio"
            ? {
                content: "''",
                height: radio.radioInnerSize,
                width: radio.radioInnerSize,
                borderRadius: "50%",
                display: "block",
                backgroundColor: radio.backgroundColor,
              }
            : {},
      },
      "& label": {
        color: radio.backgroundColor,
      },
    },
    label: {
      lineHeight: 1,
    },
  });
  return React__default.createElement(
    Container,
    {
      gap: radioBoxGap,
      containerType: "flex",
      alignItems: "center",
      className: cx(
        radioStyle,
        { disabled },
        checked ? "radio-checked" : "",
        className,
      ),
      style: style,
      extraProps: { onClick: () => handleChange() },
    },
    React__default.createElement("input", {
      type: "radio",
      checked: checked,
      disabled: disabled,
    }),
    React__default.createElement(
      "div",
      null,
      radioType === "checkbox" ? icons.checkMark : null,
    ),
    React__default.createElement("label", null, label),
  );
};
const Radio = ({
  radioType = "radio",
  group,
  checked,
  onChange,
  gap,
  columns,
  groupStyle,
  radioBoxStyle,
  groupClassName = "",
  className = "",
}) => {
  return React__default.createElement(
    Container,
    {
      columns: columns,
      gap: gap,
      style: groupStyle,
      className: groupClassName,
    },
    group.map((item) =>
      React__default.createElement(RadioLabel, {
        key: item.id,
        radioType: radioType,
        label: item.label,
        checked: checked === item.id,
        style: radioBoxStyle,
        className: className,
        onChange: () => {
          if (onChange) {
            onChange(item.id);
          }
        },
      }),
    ),
  );
};

const Input = (props) => {
  const {
    type = "text",
    value = "",
    labelGap = 8,
    description = "",
    descriptionGap = 6,
    inputContainerStyle = {},
    style = {},
    className = "",
    inputProps,
  } = props;
  const inputClassName = prefix() + "input";
  const cssKey =
    "& > input." + inputClassName + ", & > textarea." + inputClassName;
  const containerWithInputStyle = {
    ...inputContainerStyle,
    [cssKey]: {
      fontSize: input.fontSize,
      padding: input.padding,
      border: input.border,
      position: "relative",
      borderRadius: input.borderRadius,
      boxShadow: input.boxShadow,
      lineHeight: 1,
      minHeight: "unset",
      ...style,
    },
  };
  const inputClassNames = inputClassName + (!className ? "" : " " + className);
  let inputContent;
  if (type === "textarea") {
    inputContent = React__default.createElement("textarea", {
      ...inputProps,
      className: inputClassNames,
      value: value,
    });
  } else {
    inputContent = React__default.createElement("input", {
      ...inputProps,
      className: inputClassNames,
      type: type,
      value: value,
    });
  }
  return React__default.createElement(
    WithDescription,
    { gap: descriptionGap, description },
    React__default.createElement(
      Container,
      { gap: labelGap, padding: 10, style: containerWithInputStyle },
      inputContent,
    ),
  );
};

const RichSelect = forwardRef((props, ref) => {
  const { options, value, onChange, ...rest } = props;
  const selectRef = useRef(null);
  useImperativeHandle(ref, () => ({
    focus: () => {
      if (selectRef.current) {
        selectRef.current.focus();
      }
    },
  }));
  const labelClassName = prefix() + "input-picker-header-label";
  const descriptionClassName = prefix() + "input-picker-description";
  const titleClassName = prefix() + "input-picker-header-title";
  const labelClassKey = "& ." + labelClassName;
  const descriptionClassKey = "& ." + descriptionClassName;
  const titleClassKey = "& ." + titleClassName;
  const CustomOption = (optionProps) => {
    const { data, innerProps } = optionProps;
    const customStyle = css({
      cursor: "pointer",
      borderBottom: "1px solid hsla(0, 0%, 0%, 0.1)",
      [labelClassKey]: {
        fontSize: "14px",
        color: "#232323",
        fontWeight: 500,
      },
      [descriptionClassKey]: {
        fontSize: 12,
        color: "#666",
        fontStyle: "italic",
      },
      [titleClassKey]: {
        fontSize: 14,
        backgroundColor: "#e8e8e8",
        width: "fit-content",
        height: "fit-content",
        padding: "4px 6px",
        borderRadius: 4,
        color: "#686868",
      },
    });
    return React__default.createElement(
      Container,
      {
        containerType: "flex",
        justifyContent: "space-between",
        extraProps: innerProps,
        padding: 10,
        className: customStyle,
        gap: 10,
      },
      React__default.createElement(
        Container,
        { gap: 8, padding: 10, extraProps: innerProps },
        React__default.createElement(
          "div",
          { className: labelClassName },
          data.label,
        ),
        React__default.createElement(
          "div",
          { className: descriptionClassName },
          data.description,
        ),
      ),
      React__default.createElement(
        "div",
        { className: titleClassName },
        data.title,
      ),
    );
  };
  return React__default.createElement(
    React__default.Fragment,
    null,
    React__default.createElement(Select, {
      ref: selectRef,
      components: { Option: CustomOption },
      options: options,
      value: value,
      onChange: (value) => onChange(value),
      ...rest,
    }),
  );
});
const VariablePicker = (props) => {
  const { onChange, options, type, value, className, inputStyle, inputProps } =
    props;
  const selectRef = useRef(null);
  const inputRef = useRef(null);
  const [openVariablePicker, setOpenVariablePicker] = useState(false);
  const handleKeyDown = (event) => {
    if (event?.key === "%" || event?.key === "ArrowDown") {
      setOpenVariablePicker(true);
      setTimeout(() => {
        selectRef.current?.focus();
      }, 0);
      event.preventDefault();
    }
  };
  const updateData = (event) => {
    onChange(event?.target?.value);
  };
  const updateInputData = (selectedOption) => {
    const pickerValue = selectedOption?.title;
    const concatWithValue =
      "" !== value ? value + " " + pickerValue : pickerValue;
    onChange(concatWithValue);
    setOpenVariablePicker(false);
  };
  const inputClassName = prefix() + "input";
  const cssKey = "&." + inputClassName;
  const inputClassCss = css({
    display: "block",
    [cssKey]: {
      fontSize: inputPicker.fontSize,
      padding: inputPicker.padding,
      border: inputPicker.border,
      borderRadius: inputPicker.borderRadius,
      boxShadow: inputPicker.boxShadow,
      position: "relative",
      lineHeight: 1,
      minHeight: "unset",
      ...inputStyle,
    },
  });
  let combineClass = cx(className, inputClassName, inputClassCss);
  let field =
    "textarea" === type
      ? React__default.createElement("textarea", {
          ...inputProps,
          value: value,
          rows: 3,
          onKeyDown: handleKeyDown,
          onChange: updateData,
          ref: inputRef,
          className: combineClass,
        })
      : React__default.createElement("input", {
          ...inputProps,
          value: value,
          type: "text",
          onKeyDown: handleKeyDown,
          onChange: updateData,
          ref: inputRef,
          className: combineClass,
        });
  return React__default.createElement(
    React__default.Fragment,
    null,
    field,
    openVariablePicker &&
      React__default.createElement(RichSelect, {
        options: options,
        onChange: (selectedOption) => updateInputData(selectedOption),
        onSelectResetsInput: true,
        ref: selectRef,
        openMenuOnFocus: true,
        onBlur: () => {
          setOpenVariablePicker(false);
        },
        style: { width: "80%" },
      }),
  );
};

export {
  Button,
  Checkbox,
  Container,
  InfoCard,
  InfoCardContent,
  Input,
  VariablePicker as InputPicker,
  Label,
  MultiButtonControl as MultiButton,
  Radio,
  Switch,
};
