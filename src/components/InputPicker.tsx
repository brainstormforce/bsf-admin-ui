import React, {
  useRef,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";
import { css, cx } from "@emotion/css";
import Select from "react-select";
import GridContainer from "./GridContainer";

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

  const CustomOption = (optionProps: any) => {
    const { data, innerProps } = optionProps;

    const customStyle = css({
      cursor: "pointer",
      borderBottom: "1px solid hsla(0, 0%, 0%, 0.1)",
      "& .bsf-admin-ui-input-picker-header-label": {
        fontSize: "14px",
        color: "#232323",
        fontWeight: 500,
      },
      "& .bsf-admin-ui-input-picker-description": {
        fontSize: 12,
        color: "#666",
        fontStyle: "italic",
      },
      "& .bsf-admin-ui-input-picker-header-title": {
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
      <GridContainer
        {...{
          containerType: "flex",
          justifyContent: "space-between",
          extraProps: innerProps,
          padding: 10,
          gap: 0,
          className: customStyle,
        }}
      >
        <GridContainer
          {...{
            padding: 0,
            gap: 8,
            extraProps: innerProps,
          }}
        >
          <div className="bsf-admin-ui-input-picker-header-label">
            {data.label}
          </div>

          <div className="bsf-admin-ui-input-picker-description">
            {data.description}
          </div>
        </GridContainer>

        <div className="bsf-admin-ui-input-picker-header-title">
          {data.title}
        </div>
      </GridContainer>
    );
  };

  return (
    <>
      <Select
        ref={selectRef}
        components={{ Option: CustomOption }}
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
}

const VariablePicker = (props: VariablePickerProps) => {
  const { onChange, options, type, value, className, inputStyle } = props;

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
    if (!value) return;

    const concatWithValue = value + " " + pickerValue;

    onChange(concatWithValue);
    setOpenVariablePicker(false);
  };

  const inputClass = css({
    display: "block",
    "&.bsf-admin-ui-input, &.bsf-admin-ui-input": {
      fontSize: "15px",
      padding: "12px 14px",
      border: "1px solid #d0d5dd",
      position: "relative",
      borderRadius: "8px",
      boxShadow: "0px 1px 2px 0px #1018280D",
      lineHeight: 1,
      minHeight: "unset",
      ...inputStyle,
    },
  });

  let combineClass = cx(className, "bsf-admin-ui-input", inputClass);

  let field =
    "textarea" === type ? (
      <textarea
        rows={3}
        value={value}
        onKeyDown={handleKeyDown}
        onChange={updateData}
        ref={inputRef}
        className={combineClass}
      />
    ) : (
      <input
        type="text"
        value={value}
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
          style={{ width: "80%" }}
        />
      )}
    </>
  );
};

export default VariablePicker;
