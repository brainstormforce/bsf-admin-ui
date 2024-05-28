import * as React from 'react';
import React__default, { forwardRef, useRef, useImperativeHandle, useState } from 'react';
import { css, cx } from '@emotion/css';
import Select from 'react-select';

const Button = (props) => {
    const { children, onClick, style } = props;
    const additionalStyle = style && typeof style === "object" ? style : {};
    const allUnset = css `
    all: unset;
  `;
    let baseCss = {
        cursor: "pointer",
        borderRadius: "6px",
        fontSize: "14px",
        padding: "9px 17px",
        backgroundColor: "#6B21A8",
        color: "white",
        fontWeight: 500,
        ...additionalStyle,
    };
    const completeStyle = css(baseCss);
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { onClick: onClick, className: cx(allUnset, completeStyle) }, children)));
};

const GridContainer = (props) => {
    const { containerType = "grid", gap = 10, numberOfColumn, padding = 10, justifyContent, alignItems, alignContent, justifyItems, direction, className, style, children, extraProps, } = props;
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
    if (numberOfColumn &&
        typeof numberOfColumn === "number" &&
        containerType === "grid") {
        styleObject["gridTemplateColumns"] = `repeat(${numberOfColumn}, 1fr)`;
    }
    // Add direction if it is passed in props and should be string type and type should be flex.
    if (direction && typeof direction === "string" && containerType === "flex") {
        styleObject["flexDirection"] = direction;
    }
    const mainClass = css(styleObject);
    return (React__default.createElement("div", { className: cx(mainClass, className), ...extraProps }, children));
};

const icons = {
    breadCrumbIcon: (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
        React__default.createElement("polyline", { points: "9 18 15 12 9 6" }))),
    supportIcon: (React__default.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "#ffffff", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { d: "M7.87891 5.51884C9.05048 4.49372 10.95 4.49372 12.1215 5.51884C13.2931 6.54397 13.2931 8.20603 12.1215 9.23116C11.9176 9.40958 11.6917 9.55695 11.4513 9.67326C10.7056 10.0341 10.0002 10.6716 10.0002 11.5V12.25M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10ZM10 15.25H10.0075V15.2575H10V15.25Z", stroke: "#64748B", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }))),
    whatsNew: (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 20 20", fill: "none" },
        React__default.createElement("path", { d: "M9.16667 4.90182V16.0335C9.16667 16.8434 8.51008 17.5 7.70015 17.5C7.08038 17.5 6.52752 17.1104 6.31907 16.5267L4.53039 11.4024M15 10.8333C16.3807 10.8333 17.5 9.71404 17.5 8.33333C17.5 6.95262 16.3807 5.83333 15 5.83333M4.53039 11.4024C3.33691 10.8951 2.5 9.71194 2.5 8.33333C2.5 6.49238 3.99238 5 5.83333 5H7.36007C10.7773 5 13.7141 3.97159 15 2.5L15 14.1667C13.7141 12.6951 10.7773 11.6667 7.36007 11.6667L5.83331 11.6667C5.37098 11.6667 4.93064 11.5725 4.53039 11.4024Z", stroke: "#475569", "stroke-width": "1.4", "stroke-linecap": "round", "stroke-linejoin": "round" }))),
    checkMark: "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2020%2020%27%3E%3Cpath%20d%3D%27M14.83%204.89l1.34.94-5.81%208.38H9.02L5.78%209.67l1.34-1.25%202.57%202.4z%27%20fill%3D%27%233582c4%27%2F%3E%3C%2Fsvg%3E",
    checkMark2: (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "9", height: "7", viewBox: "0 0 9 7", fill: "none" },
        React__default.createElement("path", { d: "M8.87179 0.545513L8.45503 0.128761C8.28333 -0.0429202 8.00306 -0.0429202 7.82988 0.128761L3.45987 4.50027L1.17066 2.21107C0.998981 2.03937 0.718691 2.03937 0.545533 2.21107L0.128761 2.62782C-0.0429202 2.79952 -0.0429202 3.07979 0.128761 3.25295L3.14584 6.27C3.23242 6.35659 3.34393 6.40062 3.45693 6.40062C3.56994 6.40062 3.68292 6.35659 3.76805 6.27L8.86737 1.17066C9.04347 0.996046 9.04347 0.717233 8.87179 0.545513Z", fill: "white" }))),
};

const Label = ({ type, content, badgeSize = "medium", onClick, style = {}, icon_key, className, }) => {
    const badgeStyle = {};
    if (type === "badge") {
        // Add some padding and border radius to the badge.
        badgeStyle["padding"] = "2px 6px";
        badgeStyle["border"] = "1px solid #e2e8f0";
        badgeStyle["borderRadius"] = "4px";
        switch (badgeSize) {
            case "small":
                badgeStyle["fontSize"] = "10px";
                break;
            case "medium":
                badgeStyle["fontSize"] = "14px";
                break;
            case "large":
                badgeStyle["fontSize"] = "18px";
                break;
        }
    }
    let labelStyle = {
        color: "#94a3b8",
        cursor: onClick ? "pointer" : "default",
        fontSize: "14px",
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
    return (React__default.createElement("div", { className: labelClass, onClick: onClick }, content));
};

const InfoCard = (props) => {
    const { title, infoIcon = null, disableInfoIcon = false, className, disableHeader = false, children, padding = "16px 24px", } = props;
    let style = !(props.style && typeof props.style === "object")
        ? {}
        : props.style;
    let baseCssObject = {
        border: "1px solid #E2E8F0",
        borderRadius: "4px",
        boxShadow: "0px 1px 2px 0px #0D131E1A",
        backgroundColor: "#FFFFFF",
        "& .bsf-ui-info-card-content": {
            padding: padding,
        },
        "& h2, & h3": {
            color: "#020617",
            fontWeight: 600,
            margin: 0,
            lineHeight: 1,
        },
        "& h2": {
            fontSize: "18px",
        },
        "& h3": {
            fontSize: "14px",
        },
        ...style,
    };
    let header = null;
    if (!disableHeader) {
        const headerStyle = css({
            padding: padding,
            borderBottom: "1px solid #e2e8f0",
            display: "flex",
            alignItems: "center",
            gap: "6px",
        });
        header = (React__default.createElement("div", { className: cx("bsf-ui-info-card-header", headerStyle) },
            React__default.createElement("h2", null, title),
            !disableInfoIcon && React__default.createElement("span", null, infoIcon ? infoIcon : "?")));
    }
    const baseCss = css(baseCssObject);
    return (React__default.createElement("div", { className: cx(baseCss, className) },
        !disableHeader && header,
        React__default.createElement("div", { className: "bsf-ui-info-card-content" }, children)));
};
const InfoCardContent = (props) => {
    const { title, className, children } = props;
    let heading = null;
    if (title) {
        const headingStyle = css `
      min-width: 224px;
    `;
        heading = React__default.createElement("h3", { className: headingStyle }, title);
    }
    return (React__default.createElement(GridContainer, { containerType: "flex",
        gap: 16,
        padding: 0,
        className: className },
        heading,
        React__default.createElement(GridContainer, { gap: 16,
            padding: 0,
            className: "card-content",
            style: { width: "100%" } }, children)));
};

const MultiButtonControl = ({ controlStyle = "filled", width = "fit-content", onClick, activeItem, items, backgroundColor = "#007bff", color = "#ffffff", hoverColor = "#0056b3", className = "", }) => {
    let containerClass = "bsf-multi-button-control";
    // If the className prop is passed, add it to the containerClass
    if (className) {
        containerClass += " " + className;
    }
    let buttonCss = {};
    let buttonItemCss = {
        fontWeight: 500,
        fontSize: "14px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };
    if (controlStyle === "outline") {
        buttonCss = {
            border: "1px solid #E2E8F0",
            borderRadius: "8px",
            overflow: "hidden",
            "& > div": {
                padding: "10px 12px",
                color: "#020617",
                borderRight: "1px solid #E2E8F0",
                ...buttonItemCss,
                "&:last-child": {
                    borderRight: "none",
                },
                "&.active": {
                    backgroundColor: "#FAF5FF",
                },
            },
        };
    }
    else {
        buttonCss = {
            padding: "5px",
            borderRadius: "6px",
            backgroundColor: "#f3f4f6",
            "& > div": {
                padding: "6px 12px",
                color: "#64748B",
                backgroundColor: "transparent",
                borderRadius: "4px",
                ...buttonItemCss,
                "&.active": {
                    color: "#020617",
                    backgroundColor: "#ffffff",
                },
            },
        };
    }
    buttonCss =
        width === "full-width"
            ? { ...buttonCss, ...{ width: "100%" } }
            : { ...buttonCss, ...{ width: "fit-content" } };
    let buttonItemClass = (id) => "bsf-multi-button-control__item" + (activeItem === id ? " active" : "");
    return (React__default.createElement(GridContainer, { numberOfColumn: items.length,
        gap: 0,
        padding: 0,
        className: containerClass,
        style: buttonCss }, items.map((item) => (React__default.createElement("div", { key: item.id, className: buttonItemClass(item.id), onClick: () => item.id !== activeItem && onClick(item.id) }, item.label)))));
};

const WithDescription = ({ description, gap = 6, children, style, }) => {
    // Verify description should be null|undefined|false
    if (!description) {
        return children;
    }
    const descriptionGapStyle = css({
        fontSize: "12px",
        fontWeight: 400,
        lineHeight: "18px",
        display: "block",
        color: "#64748B",
        ...style,
    });
    return (React__default.createElement(GridContainer, { gap: gap,
        padding: 0 },
        children,
        React__default.createElement("span", { className: descriptionGapStyle }, description)));
};

const Switch = ({ checked = false, onClick, disabled = false, size = "small", onColor = "#4caf50", offColor = "#ccc", thumbColor = "#fff", label, labelPosition = "right", labelGap = 8, description, descriptionGap = 6, }) => {
    const switchSize = {
        small: {
            width: "36px",
            height: "20px",
            thumbSize: "16px",
        },
        medium: {
            width: "60px",
            height: "30px",
            thumbSize: "26px",
        },
        large: {
            width: "80px",
            height: "40px",
            thumbSize: "36px",
        },
    }[size];
    const switchClass = css({
        position: "relative",
        display: "inline-block",
        width: switchSize.width,
        height: switchSize.height,
        backgroundColor: checked ? onColor : offColor,
        borderRadius: "34px",
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
        fontSize: "12px",
        fontWeight: 400,
        lineHeight: "18px",
        display: "block",
        color: "#64748B",
    });
    const handleOnclick = () => !disabled && onClick();
    const labelContent = (React__default.createElement("span", { className: labelClass, onClick: handleOnclick }, label));
    return (React__default.createElement(WithDescription, { gap: descriptionGap,
        description },
        React__default.createElement(GridContainer, { containerType: "flex",
            gap: labelGap,
            alignItems: "center",
            padding: 0,
            style: disabled ? { opacity: 0.5 } : {} },
            label && labelPosition === "left" && labelContent,
            React__default.createElement("div", { className: switchClass, onClick: handleOnclick },
                React__default.createElement("div", { className: thumbClass })),
            label && labelPosition === "right" && labelContent)));
};

const CheckboxWithLabel = ({ label, checked, onChange, disabled, checkBoxGap = 8, style, className = "", }) => {
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
            width: "16px",
            height: "16px",
            borderRadius: "4px",
            boxShadow: "inset 0 1px 2px rgba(0, 0, 0, .1)",
            border: "1px solid #8c8f94",
        },
        "&.checkbox-checked": {
            "&> div": {
                borderColor: "#007cba",
                "&::before": {
                    content: `url(${icons.checkMark})`,
                },
            },
        },
        label: {
            lineHeight: 1,
        },
    });
    return (React__default.createElement(GridContainer, { gap: checkBoxGap,
        padding: 0,
        containerType: "flex",
        alignItems: "center",
        className: cx(checkboxStyle, { disabled }, checked ? "checkbox-checked" : "", className),
        style: style },
        React__default.createElement("input", { type: "checkbox", checked: checked, disabled: disabled }),
        React__default.createElement("div", { onClick: () => handleChange() }),
        React__default.createElement("label", { onClick: () => handleChange() }, label)));
};
const CheckBox = ({ group, onChange, gap, numberOfColumns, groupStyle, checkboxStyle, groupClassName = "", className = "", }) => {
    return (React__default.createElement(GridContainer, { numberOfColumn: numberOfColumns,
        gap: gap,
        style: groupStyle,
        className: groupClassName }, group.map((item) => (React__default.createElement(CheckboxWithLabel, { key: item.id, label: item.label, checked: item.checked, 
        //   disabled={disabled}
        style: checkboxStyle, className: className, onChange: (checked) => {
            if (onChange) {
                onChange(checked, item.id);
            }
        } })))));
};

const RadioLabel = ({ label, checked, onChange, disabled, radioBoxGap = 8, style, className = "", radioType, }) => {
    const handleChange = () => {
        if (onChange) {
            onChange(!checked);
        }
    };
    const containerStyle = {
        padding: "12px 16px",
        border: checked ? "1px solid #7F56D9" : "1px solid #EAECF0",
        borderRadius: "6px",
        cursor: "pointer",
    };
    style = { ...containerStyle, ...style };
    const radioStyle = css({
        input: {
            display: "none",
        },
        "&> div": {
            width: "16px",
            height: "16px",
            borderRadius: radioType === "radio" ? "50%" : "4px",
            boxShadow: "inset 0 1px 2px rgba(0, 0, 0, .1)",
            border: "1px solid #8c8f94",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        "&.radio-checked": {
            "&> div": {
                borderColor: radioType === "checkbox" ? "transparent" : "#7F56D9",
                backgroundColor: radioType === "checkbox" ? "#7F56D9" : "transparent",
                "&::before": radioType === "radio"
                    ? {
                        content: "''",
                        height: "6px",
                        width: "6px",
                        borderRadius: "50%",
                        display: "block",
                        backgroundColor: "#7F56D9",
                    }
                    : {},
            },
            "& label": {
                color: "#7F56D9",
            },
        },
        label: {
            lineHeight: 1,
        },
    });
    return (React__default.createElement(GridContainer, { gap: radioBoxGap,
        padding: 0,
        containerType: "flex",
        alignItems: "center",
        className: cx(radioStyle, { disabled }, checked ? "radio-checked" : "", className),
        style: style,
        extraProps: { onClick: () => handleChange() } },
        React__default.createElement("input", { type: "radio", checked: checked, disabled: disabled }),
        React__default.createElement("div", null, radioType === "checkbox" ? icons.checkMark2 : null),
        React__default.createElement("label", null, label)));
};
const Radio = ({ radioType = "radio", group, checked, onChange, gap, numberOfColumns, groupStyle, radioBoxStyle, groupClassName = "", className = "", }) => {
    return (React__default.createElement(GridContainer, { padding: 0,
        numberOfColumn: numberOfColumns,
        gap: gap,
        style: groupStyle,
        className: groupClassName }, group.map((item) => (React__default.createElement(RadioLabel, { key: item.id, radioType: radioType, label: item.label, checked: checked === item.id, style: radioBoxStyle, className: className, onChange: () => {
            if (onChange) {
                onChange(item.id);
            }
        } })))));
};

const Input = ({ type = "text", value = "", label = "", labelPosition = "top", labelGap = 8, description = "", descriptionGap = 6, inputContainerStyle = {}, style = {}, className = "", ...props }) => {
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
            minHeight: 'unset',
            ...style,
        },
    };
    const inputClassNames = "bsf-ui-input" + (!className ? "" : " " + className);
    let labelContent = label ? React__default.createElement("span", null, value) : null;
    let inputContent;
    if (type === "textarea") {
        inputContent = (React__default.createElement("textarea", { className: inputClassNames, value: value, ...props }));
    }
    else {
        inputContent = (React__default.createElement("input", { className: inputClassNames, type: type, value: value, ...props }));
    }
    return (React__default.createElement(WithDescription, { gap: descriptionGap,
        description },
        React__default.createElement(GridContainer, { gap: labelGap,
            padding: 0,
            style: containerWithInputStyle },
            labelContent,
            inputContent)));
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
    const CustomOption = (optionProps) => {
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
        return (React__default.createElement(GridContainer, { containerType: "flex",
            justifyContent: "space-between",
            extraProps: innerProps,
            padding: 10,
            gap: 0,
            className: customStyle },
            React__default.createElement(GridContainer, { padding: 0,
                gap: 8,
                extraProps: innerProps },
                React__default.createElement("div", { className: "bsf-admin-ui-input-picker-header-label" }, data.label),
                React__default.createElement("div", { className: "bsf-admin-ui-input-picker-description" }, data.description)),
            React__default.createElement("div", { className: "bsf-admin-ui-input-picker-header-title" }, data.title)));
    };
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(Select, { ref: selectRef, components: { Option: CustomOption }, options: options, value: value, onChange: (value) => onChange(value), ...rest })));
});
const VariablePicker = (props) => {
    const { onChange, options, type, value, className, inputStyle } = props;
    console.log("VariablePicker props->", props);
    const selectRef = useRef(null);
    const inputRef = useRef(null);
    const [selectedVariable, setSelectedVariable] = useState("");
    const [openVariablePicker, setOpenVariablePicker] = useState(false);
    const inputClass = className;
    const handleKeyDown = (event) => {
        if (event.key === "%" || event.key === "ArrowDown") {
            setOpenVariablePicker(true);
            setTimeout(() => {
                selectRef.current?.focus();
            }, 0);
            event.preventDefault();
        }
    };
    const updateData = (event) => { };
    const commonInputProps = {
        value: value,
        onChange: (event) => updateData(),
        onKeyDown: (event) => handleKeyDown(event),
        ref: inputRef,
        className: inputClass,
    };
    let field = "textarea" === type ? (React__default.createElement("textarea", { rows: 3, ...commonInputProps })) : (React__default.createElement("input", { type: "text", ...commonInputProps }));
    return (React__default.createElement(React__default.Fragment, null,
        field,
        openVariablePicker && (React__default.createElement(RichSelect, { options: options, value: selectedVariable, onChange: (selectedOption) => {
                console.log("selectedOption", selectedOption);
            }, onSelectResetsInput: true, ref: selectRef, openMenuOnFocus: true, onBlur: () => {
                console.log("onBlur");
                setOpenVariablePicker(false);
            }, style: { width: "80%" } }))));
};

export { Button, CheckBox, GridContainer, InfoCard, InfoCardContent, Input, VariablePicker as InputPicker, Label, MultiButtonControl as MultiButton, Radio, Switch };
