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
interface AdminHeaderProps {
    children: React.ReactNode;
    logo: string;
    className: string;
    breadcrumbs: Array<{
        title: string;
    }>;
    navRightContent: NavRightContent;
}
declare const AdminHeader: React.FC<AdminHeaderProps>;
export default AdminHeader;
