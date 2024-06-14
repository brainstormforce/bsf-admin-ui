import React, { useRef, forwardRef, useImperativeHandle, useState } from "react";
import { css, cx } from "@emotion/css";
import Select from "react-select";
import Container from "./Container";
import { inputPicker as inputPickerVars } from "../css-variables";
import { prefix } from "../utility/utils";

// Define the type for the custom data structure in options
interface CustomOptionType {
  label?: string;
  value?: string | number;
  title?: string;
  description?: string;
}

interface RichSelectProps {
  options: CustomOptionType[];
  value?: CustomOptionType | CustomOptionType[] | null | string;
  onChange: (value: CustomOptionType | object) => void;
  onSelectResetsInput?: boolean;
  openMenuOnFocus?: boolean;
  onBlur?: () => void;
  style?: React.CSSProperties;
}

const RichSelect = forwardRef((props: RichSelectProps, ref) => {
  const { options, value, onChange, ...rest } = props;
  const selectRef = useRef<any>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      if (selectRef.current) {
        selectRef.current.focus();
      }
    },
  }));

  const labelClassName: string = prefix() + "input-picker-header-label";
  const descriptionClassName: string = prefix() + "input-picker-description";
  const titleClassName: string = prefix() + "input-picker-header-title";

  const labelClassKey: string = "& ." + labelClassName;
  const descriptionClassKey: string = "& ." + descriptionClassName;
  const titleClassKey: string = "& ." + titleClassName;

  const CustomOption = (optionProps: any) => {
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

    return (
      <Container
        {...{
          containerType: "flex",
          justifyContent: "space-between",
          extraProps: innerProps,
          padding: 10,
          className: customStyle,
          gap: 10,
        }}
      >
        <Container
          {...{
            gap: 8,
            padding: 10,
            extraProps: innerProps,
          }}
        >
          <div className={labelClassName}>{data.label}</div>

          <div className={descriptionClassName}>{data.description}</div>
        </Container>

        <div className={titleClassName}>{data.title}</div>
      </Container>
    );
  };

  return (
    <>
      <Select
        ref={selectRef}
        components={{
          Option: CustomOption,
        }}
        options={options}
        value={value}
        onChange={(value: any) => onChange(value)}
        {...rest}
      />
    </>
  );
});

interface VariablePickerProps {
  options: CustomOptionType[];
  onChange: (value: string) => void;
  type: "text" | "textarea";
  value: string;
  inputStyle?: React.CSSProperties;
  className?: string;
  inputProps?: any;
}

const VariablePicker = (props: VariablePickerProps) => {
  const { onChange, options, type, value, className, inputStyle, inputProps } = props;

  const selectRef = useRef<any>(null);

  const inputRef = useRef<any>(null);

  const [openVariablePicker, setOpenVariablePicker] = useState(false);

  const handleKeyDown = (event: any) => {
    if (event?.key === "%" || event?.key === "ArrowDown") {
      setOpenVariablePicker(true);
      setTimeout(() => {
        selectRef.current?.focus();
      }, 0);
      event.preventDefault();
    }
  };

  const updateData = (event: any) => {
    onChange(event?.target?.value);
  };

  const updateInputData = (selectedOption: any) => {
    const pickerValue = selectedOption?.title;

    const concatWithValue = "" !== value ? value + " " + pickerValue : pickerValue;

    onChange(concatWithValue);
    setOpenVariablePicker(false);
  };

  const inputClassName: string = prefix() + "input";
  const cssKey: string = "&." + inputClassName;

  const inputClassCss = css({
    display: "block",
    [cssKey]: {
      fontSize: inputPickerVars.fontSize,
      padding: inputPickerVars.padding,
      border: inputPickerVars.border,
      borderRadius: inputPickerVars.borderRadius,
      boxShadow: inputPickerVars.boxShadow,
      position: "relative",
      lineHeight: 1,
      minHeight: "unset",
      color: inputPickerVars.color,
      margin: 0,
      ...inputStyle,
    },
  });

  const combineClass = cx(className, inputClassName, inputClassCss);

  const field =
    "textarea" === type ? (
      <textarea
        {...inputProps}
        value={value}
        rows={3}
        onKeyDown={handleKeyDown}
        onChange={updateData}
        ref={inputRef}
        className={combineClass}
      />
    ) : (
      <input
        {...inputProps}
        value={value}
        type="text"
        onKeyDown={handleKeyDown}
        onChange={updateData}
        ref={inputRef}
        className={combineClass}
      />
    );

  return (
    <>
      {field}
      {openVariablePicker && (
        <RichSelect
          options={options}
          onChange={(selectedOption) => updateInputData(selectedOption)}
          onSelectResetsInput={true}
          ref={selectRef}
          openMenuOnFocus={true}
          onBlur={() => {
            setOpenVariablePicker(false);
          }}
          style={{
            width: "80%",
          }}
        />
      )}
    </>
  );
};

export default VariablePicker;
