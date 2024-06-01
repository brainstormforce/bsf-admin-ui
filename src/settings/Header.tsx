import React from "react";
import { getPrefix } from "../utility/utils";
import { Container, Label } from "../components";
import { css } from "@emotion/css";
import { ICONS } from "../utility";
import { color as colorsVar } from "../css-variables";

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

// Create component interface for Header component
interface HeaderProps {
  children: React.ReactNode;
  logo: string;
  className: string;
  breadcrumbs: Array<{ title: React.ReactNode }>;
  navRightContent: NavRightContent;
}

const Header: React.FC<HeaderProps> = ({
  children,
  logo,
  breadcrumbs,
  navRightContent,
  className,
}) => {
  let headerCss = {
    backgroundColor: colorsVar.background,
    borderBottom: "1px solid " + colorsVar.borderLight,
    height: "68px",
  };

  // Define the breadcrumbs variable to store the breadcrumbs if available.
  let breadCrumbsContent = null;
  if (breadcrumbs?.length > 0) {
    breadCrumbsContent = breadcrumbs.map((breadcrumb, index) => (
      <>
        {ICONS.breadCrumb}
        <span key={index}>{breadcrumb.title}</span>
      </>
    ));

    // Add css for the breadcrumbs.
    const breadcrumbClassName: string = "& .bsf-ui-header-breadcrumbs";
    const breadcrumbsCss = {
      fontSize: "14px",
      "& > span": {
        fontWeight: "400",
        fontFamily: "Inter",
        color: colorsVar.text,
        cursor: "pointer",
      },
      "& > svg": {
        width: "16px",
        height: "16px",
      },
    };

    headerCss = {
      ...headerCss,
      [breadcrumbClassName]: css(breadcrumbsCss),
    };
  }

  const headerLeftContent = (
    <Container
      {...{
        containerType: "flex",
        gap: 6.5,
        alignItems: "center",
        className: "bsf-ui-header-left-content",
        justifyContent: "flex-start",
      }}
    >
      {/* TODO: need to add back button if available in props */}
      <div className="bsf-ui-header-logo" style={{ display: "flex" }}>
        {logo}
      </div>
      <Container
        {...{
          containerType: "flex",
          gap: 6.5,
          alignItems: "center",
          className: "bsf-ui-header-breadcrumbs",
        }}
      >
        {breadCrumbsContent}
      </Container>
    </Container>
  );

  const separatorContent = () => {
    return <div className="bsf-ui-header-separator" />;
  };

  // Add css for the separator.
  const separatorClassName: string = "& .bsf-ui-header-separator";
  const separatorCss = {
    height: "16px",
    display: "block",
    border: "1px solid #E2E8F0",
  };

  headerCss = {
    ...headerCss,
    [separatorClassName]: css(separatorCss),
  };

  const labelListContent = (
    navRightContent: NavRightContent,
    isParent: boolean = false
  ) => {
    return (
      <Container
        containerType="flex"
        gap={parseFloat(navRightContent.gap)}
        alignItems="center"
        justifyContent={isParent ? "flex-end" : "flex-start"}
        className={
          isParent
            ? "bsf-ui-header-right-content"
            : "bsf-ui-header-right-content-child"
        }
      >
        {navRightContent.items.map((item, index) => {
          if (item.type === "label-group") {
            return (
              <React.Fragment key={index}>
                {labelListContent(item as LabelGroup)}
                {item.separator && separatorContent()}
                {/* Render a separator if specified */}
              </React.Fragment>
            );
          }
          return <Label key={index} {...item} />;
        })}
      </Container>
    );
  };

  const wrapperPrefixClass = getPrefix() + "admin-header";

  const headerClass = css(headerCss);

  const containerProps = {
    columns: 2,
    justifyContent: "space-between",
    alignItems: "center",
    className: `${wrapperPrefixClass} ${headerClass} ${className}`,
    style: {
      padding: "0 20px",
    },
  };

  return (
    <Container {...containerProps}>
      {headerLeftContent}
      {labelListContent(navRightContent, true)}
    </Container>
  );
};

export default Header;
