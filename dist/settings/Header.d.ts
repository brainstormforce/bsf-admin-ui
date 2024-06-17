import React from "react";
interface LabelItem {
    type: "text" | "icon" | "badge";
    content: React.ReactNode;
    icon_key?: string;
    badgeSize?: "small" | "medium" | "large";
    onClick?: () => void;
    style?: React.CSSProperties;
    className?: string;
}
interface LabelGroup {
    type: "label-group";
    gap: string;
    items: (LabelItem | LabelGroup)[];
    separator?: boolean;
}
interface NavRightContent {
    gap: string;
    items: (LabelItem | LabelGroup)[];
}
interface HeaderProps {
    children: React.ReactNode;
    logo: React.ReactNode;
    className: string;
    breadcrumbs: Array<{
        title: React.ReactNode;
    }>;
    navRightContent: NavRightContent;
}
declare const Header: React.FC<HeaderProps>;
export default Header;
