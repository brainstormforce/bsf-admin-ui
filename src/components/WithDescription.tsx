import React from "react";
import { css } from "@emotion/css";
import GridContainer from "./GridContainer";

interface WithDescriptionProps {
  description?: React.ReactNode;
  gap?: number;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const WithDescription: React.FC<WithDescriptionProps> = ({
  description,
  gap = 6,
  children,
  style,
}) => {
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

  return (
    <GridContainer
      {...{
        gap: gap,
      }}
    >
      {children}
      <span className={descriptionGapStyle}>{description}</span>
    </GridContainer>
  );
};

export default WithDescription;
