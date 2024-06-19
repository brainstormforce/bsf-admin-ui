import React from "react";
import Container from "./Container";
import WithDescription from "./WithDescription";
import { color, input as inputValues } from "../css-variables";
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
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
    onChange = () => {},
  } = props;

  const inputClassName: string = prefix() + "input";
  const cssKey: string = "& > input." + inputClassName + ", & > textarea." + inputClassName;

  const containerWithInputStyle = {
    ...inputContainerStyle,
    [cssKey]: {
      fontSize: inputValues.fontSize,
      padding: inputValues.padding,
      border: inputValues.border,
      position: "relative",
      borderRadius: inputValues.borderRadius,
      boxShadow: inputValues.boxShadow,
      color: inputValues.color,
      lineHeight: 1,
      minHeight: "unset",
      margin: 0,
      ...style,
    },
  };

  const inputClassNames = inputClassName + (!className ? "" : " " + className);

  let inputContent;

  if (type === "textarea") {
    inputContent = (
      <textarea {...inputProps} className={inputClassNames} value={value} onChange={onChange} />
    );
  } else {
    inputContent = (
      <input
        {...inputProps}
        className={inputClassNames}
        type={type}
        value={value}
        onChange={onChange}
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
          style: containerWithInputStyle,
        }}
      >
        {inputContent}
      </Container>
    </WithDescription>
  );
};

export default Input;
