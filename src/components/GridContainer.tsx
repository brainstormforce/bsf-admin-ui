import React, { CSSProperties, useEffect } from "react";
import { cx, css, injectGlobal } from "@emotion/css";

interface GridContainerProps {
  containerType?: "grid" | "flex";
  gap?: number;
  numberOfColumn?: number;
  padding?: number;
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  alignContent?: CSSProperties["alignContent"];
  justifyItems?: CSSProperties["justifyItems"];
  className?: string;
  style?: CSSProperties;
  children: React.ReactNode;
  gridItemSettings?: Array<{
    columnSpan?: number;
    style?: CSSProperties;
  }>;
}

const GridContainer: React.FC<GridContainerProps> = (props) => {
  const {
    containerType = "grid",
    gap = 10,
    numberOfColumn,
    padding = 10,
    justifyContent,
    alignItems,
    alignContent,
    justifyItems,
    className,
    style,
    children,
  } = props;

  useEffect(() => {
    injectGlobal`
    #wpcontent {
          padding: 0;
      }
    `;
  }, []);

  // If additional style is not blank and should be object then assign it to additionalStyle variable else assign empty object.
  const additionalStyle = style && typeof style === "object" ? style : {};

  let styleObject = {
    display: containerType,
    gap: gap,
    padding: padding,
    justifyContent: justifyContent,
    alignItems: alignItems,
    alignContent: alignContent,
    justifyItems: justifyItems,
    ...additionalStyle,
  };

  // Add grid items css if gridItemSettings is passed in props.
  if (props?.gridItemSettings) {
    props.gridItemSettings.forEach((item, index) => {
      const gridItemStyle = {
        gridColumn: item.columnSpan ? `span ${item.columnSpan}` : "auto",
        ...item.style,
      };

      const objectKey: string = `& > :nth-child(${index + 1})`;

      styleObject = { ...styleObject, [objectKey]: gridItemStyle };
    });
  }

  // Add number of column if it is passed in props and should be number type and type should be grid.
  if (
    numberOfColumn &&
    typeof numberOfColumn === "number" &&
    containerType === "grid"
  ) {
    styleObject["gridTemplateColumns"] = `repeat(${numberOfColumn}, 1fr)`;
  }

  const mainClass = css(styleObject);

  return <div className={cx(mainClass, className)}>{children}</div>;
};

export default GridContainer;
