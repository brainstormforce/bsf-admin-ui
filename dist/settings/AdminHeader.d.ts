import React from "react";
interface AdminHeaderProps {
    children: React.ReactNode;
    logo: string;
    className: string;
    breadcrumbs: Array<{
        title: string;
    }>;
    breadcrumbIcon: string;
    navRightContent: {
        gap: string;
        items: Array<{
            version?: {
                label: string;
                badge: string;
                style: {
                    color: string;
                    fontSize: string;
                    fontWeight: string;
                    letterSpacing: string;
                };
            };
            separator?: boolean;
            supportLink?: {
                url: string;
            };
            whatsNew?: {
                onclick: () => void;
            };
        }>;
    };
}
declare const AdminHeader: React.FC<AdminHeaderProps>;
export default AdminHeader;
