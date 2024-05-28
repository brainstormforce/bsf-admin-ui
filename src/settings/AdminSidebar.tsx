import React from "react";
import { css, cx } from "@emotion/css";

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

const Sidebar: React.FC<SidebarProps> = ({
  listItems,
  listItemColor = "#000",
  listItemHoverColor = "#333",
  listIconColor = "#000",
  listIconHoverColor = "#333",
  listItemBackgroundColor = "#fff",
  listItemHoverBackgroundColor = "#f5f5f5",
  listStyle,
  className,
  activeItem,
}) => {
  const sidebarCSS = css({
    display: "flex",
    flexDirection: "column",
    gap: "4px",

    boxSizing: "border-box",
    "& *": {
      boxSizing: "border-box",
    },
    "& .sidebar-list-item": {
      fontWeight: "500",
      fontSize: "14px",
      display: "flex",
      alignItems: "center",
      padding: "8px 16px",
      color: listItemColor,
      backgroundColor: listItemBackgroundColor,
      cursor: "pointer",
      transition: "background-color 0.3s, color 0.3s",
      gap: "8px",
      borderRadius: "6px",
      "&:hover, &.active": {
        backgroundColor: listItemHoverBackgroundColor,
        color: listItemHoverColor,
        "& svg": {
          color: listIconHoverColor,
        },
      },
    },
    "& .sidebar-list-item svg": {
      width: "18px",
      height: "18px",
      color: listIconColor,
    },
    ...listStyle,
  });

  const sidebarClass = cx(className, sidebarCSS);

  // Class for active item, we will pass id and compare it with activeItem to add function will return boolean
  const isActive = (id: string) => id === activeItem;

  return (
    <div className={sidebarClass}>
      {listItems.map((item) => (
        <div
          key={item.id}
          className={cx(
            item?.className,
            "sidebar-list-item",
            isActive(item.id) && "active"
          )}
          onClick={item.onClick}
        >
          {item.icon && <div>{item.icon}</div>}
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
