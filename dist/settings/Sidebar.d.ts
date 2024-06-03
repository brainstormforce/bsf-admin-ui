import React from "react";
interface ListItem {
  label: string;
  id: string;
  onClick: () => void;
  icon?: React.ReactNode;
  className?: string;
}
interface SidebarProps {
  listItems: ListItem[];
  listItemColor?: string;
  listItemHoverColor?: string;
  listIconColor?: string;
  listIconHoverColor?: string;
  listItemBackgroundColor?: string;
  listItemHoverBackgroundColor?: string;
  listStyle?: React.CSSProperties;
  className?: string;
  activeItem?: string;
}
declare const Sidebar: React.FC<SidebarProps>;
export default Sidebar;
