import React from "react";
import { css, cx } from "@emotion/css";
import GridContainer from "./GridContainer";
import WithDescription from "./WithDescription";

interface InputPropsTypes {
  type: string;
  value: string;
  label?: React.ReactNode;
  labelPosition?: "top" | "left" | "right" | "bottom";
  labelGap?: number;
  description?: React.ReactNode;
  descriptionGap?: number;
  props?: any;
  style?: React.CSSProperties;
  inputContainerStyle?: React.CSSProperties;
  className?: string;
  inputProps?: any;
}

const Input = (props: InputPropsTypes) => {
  const {
    type = "text",
    value = "",
    label = "",
    labelPosition = "top",
    labelGap = 8,
    description = "",
    descriptionGap = 6,
    inputContainerStyle = {},
    style = {},
    className = "",
    inputProps,
  } = props;

  const containerWithInputStyle = {
    ...inputContainerStyle,
    "& > input.bsf-ui-input, & textarea.bsf-ui-input": {
      fontSize: "15px",
      padding: "12px 14px",
      border: "1px solid #d0d5dd",
      position: "relative",
      borderRadius: "8px",
      boxShadow: "0px 1px 2px 0px #1018280D",
      lineHeight: 1,
      minHeight: "unset",
      ...style,
    },
  };

  const inputClassNames = "bsf-ui-input" + (!className ? "" : " " + className);

  let labelContent = label ? <span>{value}</span> : null;

  let inputContent;

  if (type === "textarea") {
    inputContent = (
      <textarea {...inputProps} className={inputClassNames} value={value}  />
    );
  } else {
    inputContent = (
      <input {...inputProps} className={inputClassNames} type={type} value={value} />
    );
  }

  return (
    <WithDescription
      {...{
        gap: descriptionGap,
        description,
      }}
    >
      <GridContainer
        {...{
          gap: labelGap,
          padding: 10,
          style: containerWithInputStyle,
        }}
      >
        {labelContent}
        {inputContent}
      </GridContainer>
    </WithDescription>
  );
};

export default Input;
