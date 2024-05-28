import React, { ReactNode, CSSProperties } from "react";
import GridContainer from "./GridContainer";
import { cx, css } from "@emotion/css";
type propsType = {
  title: string;
  infoIcon?: ReactNode;
  disableInfoIcon?: boolean;
  className?: string;
  disableHeader?: boolean;
  style?: CSSProperties;
  children: ReactNode;
  padding?: string;
};

export const InfoCard = (props: propsType) => {
  const {
    title,
    infoIcon = null,
    disableInfoIcon = false,
    className,
    disableHeader = false,
    children,
    padding = "16px 24px",
  } = props;

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
        padding: 0,
        className: className,
      }}
    >
      {heading}
      <GridContainer
        {...{
          gap: 16,
          padding: 0,
          className: "card-content",
          style: { width: "100%" },
        }}
      >
        {children}
      </GridContainer>
    </GridContainer>
  );
};
