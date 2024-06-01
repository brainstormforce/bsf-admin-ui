import React from "react";
import { css } from "@emotion/css";
import Container from "./Container";

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
    <Container
      {...{
        gap: gap,
      }}
    >
      {children}
      <span className={descriptionGapStyle}>{description}</span>
    </Container>
  );
};

export default WithDescription;
