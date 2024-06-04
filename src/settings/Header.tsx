import React from "react";
import { prefix } from "../utility/utils";
import { Container, Label } from "../components";
import { css } from "@emotion/css";
import { ICONS } from "../utility";
import { header as headerVars } from "../css-variables";

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
  breadcrumbs: Array<{
    title: React.ReactNode;
  }>;
  navRightContent: NavRightContent;
}

const Header: React.FC<HeaderProps> = ({ logo, breadcrumbs, navRightContent, className }) => {
  let headerCss = {
    backgroundColor: headerVars.backgroundColor,
    borderBottom: headerVars.borderBottom,
    height: headerVars.height,
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
      fontSize: headerVars.breadCrumbsFontSize,
      "& > span": {
        fontWeight: "400",
        fontFamily: "Inter",
        color: headerVars.breadCrumbColor,
        cursor: "pointer",
      },
      "& > svg": {
        width: headerVars.breadCrumbSvgSize,
        height: headerVars.breadCrumbSvgSize,
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
        gap: headerVars.gap,
        alignItems: "center",
        className: "bsf-ui-header-left-content",
        justifyContent: "flex-start",
      }}
    >
      {/* TODO: need to add back button if available in props */}
      <div
        className="bsf-ui-header-logo"
        style={{
          display: "flex",
        }}
      >
        {logo}
      </div>
      <Container
        {...{
          containerType: "flex",
          gap: headerVars.gap,
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
    height: headerVars.separatorHeight,
    display: "block",
    border: headerVars.separatorBorder,
  };

  headerCss = {
    ...headerCss,
    [separatorClassName]: css(separatorCss),
  };

  const labelListContent = (navRightContent: NavRightContent, isParent: boolean = false) => {
    return (
      <Container
        containerType="flex"
        gap={parseFloat(navRightContent.gap)}
        alignItems="center"
        justifyContent={isParent ? "flex-end" : "flex-start"}
        className={isParent ? "bsf-ui-header-right-content" : "bsf-ui-header-right-content-child"}
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

  const wrapperPrefixClass = prefix() + "admin-header";

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
