import React from "react";
interface WithDescriptionProps {
    description?: React.ReactNode;
    gap?: number;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
declare const WithDescription: React.FC<WithDescriptionProps>;
export default WithDescription;
