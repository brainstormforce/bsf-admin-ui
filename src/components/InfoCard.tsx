import React, { ReactNode, CSSProperties } from "react";
import GridContainer from "./GridContainer";
import { cx, css } from "@emotion/css";
import { color as colorsVar } from "../css-variables";

type propsType = {
  title: string;
  infoIcon?: ReactNode;
  disableInfoIcon?: boolean;
  className?: string;
  disableHeader?: boolean;
  style?: CSSProperties;
  children: ReactNode;
  padding?: string;
  gap?: number;
};

export const InfoCard = (props: propsType) => {
  const {
    title,
    infoIcon = null,
    disableInfoIcon = false,
    className,
    disableHeader = false,
    children,
    padding = "24px",
    gap = 24,
  } = props;

  let style = !(props.style && typeof props.style === "object")
    ? {}
    : props.style;

  let baseCssObject = {
    border: "1px solid " + colorsVar.borderLight,
    borderRadius: "4px",
    boxShadow: "0px 1px 2px 0px " + colorsVar.borderLight,
    backgroundColor: colorsVar.background,
    "& .bsf-ui-info-card-content": {
      display: "grid",
      gap: gap,
      padding: padding,
    },
    "& h2, & h3": {
      color: colorsVar.foreground,
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
      borderBottom: "1px solid " + colorsVar.borderLight,
      display: "flex",
      alignItems: "center",
      gap: "8px",
    });
    header = (
      <div className={cx("bsf-ui-info-card-header", headerStyle)}>
        <h2>{title}</h2>
        {!disableInfoIcon && <span>{infoIcon ? infoIcon : "?"}</span>}
      </div>
    );
  }

  const baseCss = css(baseCssObject);

  return (
    <div className={cx(baseCss, className)}>
      {!disableHeader && header}
      <div className="bsf-ui-info-card-content">{children}</div>
    </div>
  );
};

type InfoCardProps = {
  title?: ReactNode;
  className?: string;
  children: ReactNode;
  gap?: number;
  contentGap?: number;
};

export const InfoCardContent = (props: InfoCardProps) => {
  const { title, className, children } = props;

  let heading = null;
  if (title) {
    const headingStyle = css`
      min-width: 224px;
    `;
    heading = <h3 className={headingStyle}>{title}</h3>;
  }

  return (
    <GridContainer
      {...{
        containerType: "flex",
        gap: 16,
        className: className,
      }}
    >
      {heading}
      <GridContainer
        {...{
          gap: 16,
          className: "card-content",
          style: { width: "100%" },
        }}
      >
        {children}
      </GridContainer>
    </GridContainer>
  );
};
