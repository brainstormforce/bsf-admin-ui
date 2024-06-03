import React, { ReactNode, CSSProperties } from "react";
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
export declare const InfoCard: (props: propsType) => React.JSX.Element;
type InfoCardProps = {
  title?: ReactNode;
  className?: string;
  children: ReactNode;
  gap?: number;
  contentGap?: number;
};
export declare const InfoCardContent: (
  props: InfoCardProps,
) => React.JSX.Element;
export {};
