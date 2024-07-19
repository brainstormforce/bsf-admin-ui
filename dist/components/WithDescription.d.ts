import React from "react";
interface WithDescriptionProps {
    description?: React.ReactNode;
    gap?: number | string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
declare const WithDescription: React.FC<WithDescriptionProps>;
export default WithDescription;
