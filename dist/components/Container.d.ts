import React, { CSSProperties } from "react";
interface ContainerProps {
  containerType?: "grid" | "flex";
  gap?: number | string;
  columns?: number;
  padding?: number;
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  alignContent?: CSSProperties["alignContent"];
  justifyItems?: CSSProperties["justifyItems"];
  direction?: CSSProperties["flexDirection"];
  className?: string;
  style?: CSSProperties;
  children: React.ReactNode;
  gridItemSettings?: Array<{
    columnSpan?: number;
    style?: CSSProperties;
  }>;
  extraProps?: any;
}
declare const Container: React.FC<ContainerProps>;
export default Container;
