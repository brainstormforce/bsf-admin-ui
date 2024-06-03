import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { css, cx } from '@emotion/css';
import Select from 'react-select';

function prefix() {
    return 'bsf-admin-ui-';
}

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
const sidebar = {
    gap: "var(--bsf-admin-sidebar-gap, 4px)",
    listItemFontWeight: "var(--bsf-admin-sidebar-list-item-font-weight, 500)",
    listItemFontSize: "var(--bsf-admin-sidebar-list-item-font-size, 14px)",
    listItemPadding: "var(--bsf-admin-sidebar-list-item-padding, 8px 16px)",
    listItemColor: "var(--bsf-admin-sidebar-list-item-color, " + color.text + ")",
    listItemHoverColor: "var(--bsf-admin-sidebar-list-item-hover-color, " + color.foreground + ")",
    listIconColor: "var(--bsf-admin-sidebar-list-icon-color, " + color.muted + ")",
    listIconHoverColor: "var(--bsf-admin-sidebar-list-icon-hover-color, " + color.primary + ")",
    listItemBackgroundColor: "var(--bsf-admin-sidebar-list-item-background-color, " +
        color.background +
        ")",
    listItemHoverBackgroundColor: "var(--bsf-admin-sidebar-list-item-hover-background-color, " +
        color.primaryBackground +
        ")",
    listItemSvgSize: "var(--bsf-admin-sidebar-list-item-svg-size, 16px)",
    listItemsGap: "var(--bsf-admin-sidebar-list-items-gap, 8px)",
    listItemsBorderRadius: "var(--bsf-admin-sidebar-list-items-border-radius, 6px)",
};
const header = {
    padding: "var(--bsf-admin-header-padding, 0 24px)",
    backgroundColor: "var(--bsf-admin-header-background-color, " + color.background + ")",
    borderBottom: "var(--bsf-admin-header-border-bottom, 1px solid " + color.borderLight + ")",
    height: "var(--bsf-admin-header-height, 68px)",
    breadCrumbsFontSize: "var(--bsf-admin-header-breadcrumbs-font-size, 14px)",
    breadCrumbColor: "var(--bsf-admin-header-breadcrumbs-color, " + color.text + ")",
    breadCrumbSvgSize: "var(--bsf-admin-header-breadcrumbs-svg-size, 16px)",
    gap: "var(--bsf-admin-header-gap, 6.5px)",
    separatorHeight: "var(--bsf-admin-header-breadcrumbs-separator-height, 16px)",
    separatorBorder: "var(--bsf-admin-header-breadcrumbs-separator-border, 1px solid " + color.borderLight + ")",
};

const Container = (props) => {
    const { containerType = "grid", gap = 0, columns, padding = 0, 
    // padding = 10,
    justifyContent, alignItems, alignContent, justifyItems, direction, className, style, children, extraProps, } = props;
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
    if (columns &&
        typeof columns === "number" &&
        containerType === "grid") {
        styleObject["gridTemplateColumns"] = `repeat(${columns}, 1fr)`;
    }
    // Add direction if it is passed in props and should be string type and type should be flex.
    if (direction && typeof direction === "string" && containerType === "flex") {
        styleObject["flexDirection"] = direction;
    }
    const mainClass = css(styleObject);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: cx(mainClass, className), ...extraProps }, children)));
};

const icons = {
    breadCrumb: (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
        React.createElement("polyline", { points: "9 18 15 12 9 6" }))),
    support: (React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "#ffffff", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M7.87891 5.51884C9.05048 4.49372 10.95 4.49372 12.1215 5.51884C13.2931 6.54397 13.2931 8.20603 12.1215 9.23116C11.9176 9.40958 11.6917 9.55695 11.4513 9.67326C10.7056 10.0341 10.0002 10.6716 10.0002 11.5V12.25M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10ZM10 15.25H10.0075V15.2575H10V15.25Z", stroke: "#475569", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }))),
    whatsNew: (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 20 20", fill: "none" },
        React.createElement("path", { d: "M9.16667 4.90182V16.0335C9.16667 16.8434 8.51008 17.5 7.70015 17.5C7.08038 17.5 6.52752 17.1104 6.31907 16.5267L4.53039 11.4024M15 10.8333C16.3807 10.8333 17.5 9.71404 17.5 8.33333C17.5 6.95262 16.3807 5.83333 15 5.83333M4.53039 11.4024C3.33691 10.8951 2.5 9.71194 2.5 8.33333C2.5 6.49238 3.99238 5 5.83333 5H7.36007C10.7773 5 13.7141 3.97159 15 2.5L15 14.1667C13.7141 12.6951 10.7773 11.6667 7.36007 11.6667L5.83331 11.6667C5.37098 11.6667 4.93064 11.5725 4.53039 11.4024Z", stroke: "#475569", "stroke-width": "1.4", "stroke-linecap": "round", "stroke-linejoin": "round" }))),
    checkMark: (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "9", height: "7", viewBox: "0 0 9 7", fill: "none" },
        React.createElement("path", { d: "M8.87179 0.545513L8.45503 0.128761C8.28333 -0.0429202 8.00306 -0.0429202 7.82988 0.128761L3.45987 4.50027L1.17066 2.21107C0.998981 2.03937 0.718691 2.03937 0.545533 2.21107L0.128761 2.62782C-0.0429202 2.79952 -0.0429202 3.07979 0.128761 3.25295L3.14584 6.27C3.23242 6.35659 3.34393 6.40062 3.45693 6.40062C3.56994 6.40062 3.68292 6.35659 3.76805 6.27L8.86737 1.17066C9.04347 0.996046 9.04347 0.717233 8.87179 0.545513Z", fill: "currentColor" }))),
};

const Label = ({ type, content, badgeSize = "medium", onClick, style = {}, icon_key, className, }) => {
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
    return (React.createElement("div", { className: labelClass, onClick: onClick }, content));
};

forwardRef((props, ref) => {
    const { options, value, onChange, ...rest } = props;
    const selectRef = useRef(null);
    useImperativeHandle(ref, () => ({
        focus: () => {
            if (selectRef.current) {
                selectRef.current.focus();
            }
        },
    }));
    const labelClassName = prefix + "input-picker-header-label";
    const descriptionClassName = prefix + "input-picker-description";
    const titleClassName = prefix + "input-picker-header-title";
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
        return (React.createElement(Container, { containerType: "flex",
            justifyContent: "space-between",
            extraProps: innerProps,
            padding: 10,
            className: customStyle,
            gap: 10 },
            React.createElement(Container, { gap: 8,
                padding: 10,
                extraProps: innerProps },
                React.createElement("div", { className: labelClassName }, data.label),
                React.createElement("div", { className: descriptionClassName }, data.description)),
            React.createElement("div", { className: titleClassName }, data.title)));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Select, { ref: selectRef, components: { Option: CustomOption }, options: options, value: value, onChange: (value) => onChange(value), ...rest })));
});

const Header = ({ children, logo, breadcrumbs, navRightContent, className, }) => {
    let headerCss = {
        backgroundColor: header.backgroundColor,
        borderBottom: header.borderBottom,
        height: header.height,
    };
    // Define the breadcrumbs variable to store the breadcrumbs if available.
    let breadCrumbsContent = null;
    if (breadcrumbs?.length > 0) {
        breadCrumbsContent = breadcrumbs.map((breadcrumb, index) => (React.createElement(React.Fragment, null,
            icons.breadCrumb,
            React.createElement("span", { key: index }, breadcrumb.title))));
        // Add css for the breadcrumbs.
        const breadcrumbClassName = "& .bsf-ui-header-breadcrumbs";
        const breadcrumbsCss = {
            fontSize: header.breadCrumbsFontSize,
            "& > span": {
                fontWeight: "400",
                fontFamily: "Inter",
                color: header.breadCrumbColor,
                cursor: "pointer",
            },
            "& > svg": {
                width: header.breadCrumbSvgSize,
                height: header.breadCrumbSvgSize,
            },
        };
        headerCss = {
            ...headerCss,
            [breadcrumbClassName]: css(breadcrumbsCss),
        };
    }
    const headerLeftContent = (React.createElement(Container, { containerType: "flex",
        gap: header.gap,
        alignItems: "center",
        className: "bsf-ui-header-left-content",
        justifyContent: "flex-start" },
        React.createElement("div", { className: "bsf-ui-header-logo", style: { display: "flex" } }, logo),
        React.createElement(Container, { containerType: "flex",
            gap: header.gap,
            alignItems: "center",
            className: "bsf-ui-header-breadcrumbs" }, breadCrumbsContent)));
    const separatorContent = () => {
        return React.createElement("div", { className: "bsf-ui-header-separator" });
    };
    // Add css for the separator.
    const separatorClassName = "& .bsf-ui-header-separator";
    const separatorCss = {
        height: header.separatorHeight,
        display: "block",
        border: header.separatorBorder,
    };
    headerCss = {
        ...headerCss,
        [separatorClassName]: css(separatorCss),
    };
    const labelListContent = (navRightContent, isParent = false) => {
        return (React.createElement(Container, { containerType: "flex", gap: parseFloat(navRightContent.gap), alignItems: "center", justifyContent: isParent ? "flex-end" : "flex-start", className: isParent
                ? "bsf-ui-header-right-content"
                : "bsf-ui-header-right-content-child" }, navRightContent.items.map((item, index) => {
            if (item.type === "label-group") {
                return (React.createElement(React.Fragment, { key: index },
                    labelListContent(item),
                    item.separator && separatorContent()));
            }
            return React.createElement(Label, { key: index, ...item });
        })));
    };
    const wrapperPrefixClass = prefix() + "admin-header";
    const headerClass = css(headerCss);
    const containerProps = {
        columns: 2,
        justifyContent: "space-between",
        alignItems: "center",
        className: `${wrapperPrefixClass} ${headerClass} ${className}`,
        style: {
            padding: "0 20px",
        },
    };
    return (React.createElement(Container, { ...containerProps },
        headerLeftContent,
        labelListContent(navRightContent, true)));
};

const Sidebar = ({ listItems, listItemColor = sidebar.listItemColor, listItemHoverColor = sidebar.listItemHoverColor, listIconColor = sidebar.listIconColor, listIconHoverColor = sidebar.listIconHoverColor, listItemBackgroundColor = sidebar.listItemBackgroundColor, listItemHoverBackgroundColor = sidebar.listItemHoverBackgroundColor, listStyle, className, activeItem, }) => {
    const sidebarCSS = css({
        display: "flex",
        flexDirection: "column",
        gap: sidebar.gap,
        boxSizing: "border-box",
        "& *": {
            boxSizing: "border-box",
        },
        "& .sidebar-list-item": {
            fontWeight: sidebar.listItemFontWeight,
            fontSize: sidebar.listItemFontSize,
            display: "flex",
            alignItems: "center",
            padding: sidebar.listItemPadding,
            color: listItemColor,
            backgroundColor: listItemBackgroundColor,
            cursor: "pointer",
            transition: "background-color 0.3s, color 0.3s",
            gap: sidebar.listItemsGap,
            borderRadius: sidebar.listItemsBorderRadius,
            "&:hover, &.active": {
                backgroundColor: listItemHoverBackgroundColor,
                color: listItemHoverColor,
                "& svg": {
                    color: listIconHoverColor,
                },
            },
        },
        "& .sidebar-list-item svg": {
            width: sidebar.listItemSvgSize,
            height: sidebar.listItemSvgSize,
            color: listIconColor,
        },
        ...listStyle,
    });
    const sidebarClass = cx(className, sidebarCSS);
    // Class for active item, we will pass id and compare it with activeItem to add function will return boolean
    const isActive = (id) => id === activeItem;
    return (React.createElement("div", { className: sidebarClass }, listItems.map((item) => (React.createElement("div", { key: item.id, className: cx(item?.className, "sidebar-list-item", isActive(item.id) && "active"), onClick: item.onClick },
        item.icon && React.createElement("div", null, item.icon),
        React.createElement("span", null, item.label))))));
};

export { Sidebar as AdminSidebar, Header };
