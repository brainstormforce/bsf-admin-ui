import React, { ReactNode, CSSProperties } from "react";
import Container from "./Container";
import { cx, css } from "@emotion/css";
import {
  color as colorsVar,
  card as cardVars,
  textSizes,
} from "../css-variables";
import { prefix } from "../utility/utils";

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
    padding = cardVars.padding,
    gap = cardVars.gap,
  } = props;

  let style = !(props.style && typeof props.style === "object")
    ? {}
    : props.style;

  const cardContentClass: string = prefix() + "info-card-content";
  const classKey = "& ." + cardContentClass;

  let baseCssObject = {
    border: cardVars.border,
    borderRadius: cardVars.borderRadius,
    boxShadow: cardVars.boxShadow,
    backgroundColor: cardVars.backgroundColor,
    [classKey]: {
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
      borderBottom: cardVars.border,
      display: "flex",
      alignItems: "center",
      gap: cardVars.cardHeaderGap,
    });
    header = (
      <div className={headerStyle}>
        <h2>{title}</h2>
        {!disableInfoIcon && <span>{infoIcon ? infoIcon : "?"}</span>}
      </div>
    );
  }

  const baseCss = css(baseCssObject);

  return (
    <div className={cx(baseCss, className)}>
      {!disableHeader && header}
      <div className={cardContentClass}>{children}</div>
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
      min-width: ${cardVars.width};
    `;
    heading = <h3 className={headingStyle}>{title}</h3>;
  }

  return (
    <Container
      {...{
        containerType: "flex",
        gap: cardVars.cardContentGap,
        className: className,
      }}
    >
      {heading}
      <Container
        {...{
          gap: cardVars.cardContentGap,
          style: { width: "100%" },
        }}
      >
        {children}
      </Container>
    </Container>
  );
};
