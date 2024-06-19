import React from "react";
import Container from "./Container";
import { prefix } from "../utility/utils";
import { ICONS } from "../utility";
import { color } from "bsf-admin-ui/css-variables";

interface NoticePropsTypes {
  type?: string;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}

const Notice = (props: NoticePropsTypes) => {
  const { style = {}, children, className = "" } = props;

  const svgKey: string = "& > svg";
  const spanKey: string = "& > span";
  const anchorKey: string = "& > a";

  const containerStyle = {
    backgroundColor: "#EFF6FF",
    borderRadius: "6px",
    border: "1px solid #93C5FD",
    boxShadow: "0px 1px 2px 0px #1018280D",
    [svgKey]: {
      height: "20px",
      width: "20px",
      color: "#1D4ED8",
    },
    [spanKey]: {
      fontFamily: "Inter",
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "1.4",
      color: "#1D4ED8",
      [anchorKey]: {
        textDecoration: "underline",
        fontWeight: 500,
        color: "#1D4ED8",
      },
    },
  };

  return (
    <Container
      {...{
        gap: 12,
        alignItems: "center",
        containerType: "flex",
        padding: 12,
        style: { ...containerStyle, ...style },
        className: className,
      }}
    >
      {ICONS.CircleAlert}
      <span>{children}</span>
    </Container>
  );
};

export default Notice;
