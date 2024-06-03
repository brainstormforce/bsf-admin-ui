import React from "react";
import Container from "./Container";
import WithDescription from "./WithDescription";
import { input as inputValues } from "../css-variables";
import { prefix } from "../utility/utils";

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
    labelGap = 8,
    description = "",
    descriptionGap = 6,
    inputContainerStyle = {},
    style = {},
    className = "",
    inputProps,
  } = props;

  const inputClassName: string = prefix + "input";
  const cssKey: string =
    "& > input." + inputClassName + ", & > textarea." + inputClassName;

  const containerWithInputStyle = {
    ...inputContainerStyle,
    [cssKey]: {
      fontSize: inputValues.fontSize,
      padding: inputValues.padding,
      border: inputValues.border,
      position: "relative",
      borderRadius: inputValues.borderRadius,
      boxShadow: inputValues.boxShadow,
      lineHeight: 1,
      minHeight: "unset",
      ...style,
    },
  };

  const inputClassNames = inputClassName + (!className ? "" : " " + className);


  let inputContent;

  if (type === "textarea") {
    inputContent = (
      <textarea {...inputProps} className={inputClassNames} value={value} />
    );
  } else {
    inputContent = (
      <input
        {...inputProps}
        className={inputClassNames}
        type={type}
        value={value}
      />
    );
  }

  return (
    <WithDescription
      {...{
        gap: descriptionGap,
        description,
      }}
    >
      <Container
        {...{
          gap: labelGap,
          padding: 10,
          style: containerWithInputStyle,
        }}
      >
        {inputContent}
      </Container>
    </WithDescription>
  );
};

export default Input;
