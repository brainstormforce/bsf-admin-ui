import React, { CSSProperties } from "react";
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
declare const GridContainer: React.FC<GridContainerProps>;
export default GridContainer;
