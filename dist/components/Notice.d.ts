import React from "react";
interface NoticePropsTypes {
    type?: string;
    style?: React.CSSProperties;
    className?: string;
    children?: React.ReactNode;
}
declare const Notice: (props: NoticePropsTypes) => React.JSX.Element;
export default Notice;
