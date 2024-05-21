import React, { useEffect } from "react";
import { getPrefix } from "../utility/utils";
import { GridContainer } from "../components";
import { css, injectGlobal } from "@emotion/css";
import { ICONS } from "../utility";

// Create component interface for AdminHeader component
interface AdminHeaderProps {
  children: React.ReactNode;
  logo: string;
  className: string;
  breadcrumbs: Array<{ title: string }>;
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

const AdminHeader: React.FC<AdminHeaderProps> = ({
  children,
  logo,
  breadcrumbs,
  breadcrumbIcon,
  navRightContent,
  className,
}) => {
  console.log("AdminHeaderProps");

  let headerCss = {
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
    borderBottom: "1px solid #E2E8F0",
  };

  // Define the breadcrumbs variable to store the breadcrumbs if available.
  let breadCrumbsContent = null;
  if (breadcrumbs?.length > 0) {
    breadCrumbsContent = breadcrumbs.map((breadcrumb, index) => (
      <>
        {ICONS.breadCrumbIcon}
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
        color: "#64748B",
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
    <GridContainer
      {...{
        containerType: "flex",
        gap: 5,
        padding: 0,
        alignItems: "center",
        className: "bsf-ui-header-left-content",
        justifyContent: "flex-start",
      }}
    >
      {/* TODO: need to add back button if available in props */}
      <div className="bsf-ui-header-logo" style={{ display: "flex" }}>
        {logo}
      </div>
      <GridContainer
        {...{
          containerType: "flex",
          gap: 6.5,
          padding: 0,
          alignItems: "center",
          className: "bsf-ui-header-breadcrumbs",
        }}
      >
        {breadCrumbsContent}
      </GridContainer>
    </GridContainer>
  );

  const versionContent = (version: { label: string; badge: string }) => {
    return (
      <GridContainer
        {...{
          containerType: "flex",
          gap: 6.5,
          padding: 0,
          alignItems: "center",
          className: "bsf-ui-header-version-content",
        }}
      >
        <span className="bsf-ui-version-label">{version.label}</span>
        <span className="bsf-ui-version-badge">{version.badge}</span>
      </GridContainer>
    );
  };

  // Add css for the version content.
  const versionClassName: string = "& .bsf-ui-header-version-content";
  const versionCss = {
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#64748B",
    fontSize: "14px",
    "& .bsf-ui-version-badge": {
      padding: "2px 5px",
      borderRadius: "4px",
      border: "1px solid #E2E8F0",
    },
  };

  headerCss = {
    ...headerCss,
    [versionClassName]: css(versionCss),
  };

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

  const supportLinkContent = (supportLink: { url: string }) => {
    return (
      <div className="bsf-ui-header-support-link">
        <a href={supportLink.url}>{ICONS.supportIcon}</a>
      </div>
    );
  };

  // Add css for the support link.
  const supportLinkClassName: string = "& .bsf-ui-header-support-link a";
  const supportLinkCss = {
    textDecoration: "none",
    "& svg": {
      display: "block",
    },
  };

  headerCss = {
    ...headerCss,
    [supportLinkClassName]: css(supportLinkCss),
  };

  const whatsNewContent = (whatsNew: { onclick: () => void }) => {
    return (
      <div onClick={whatsNew.onclick} className="bsf-ui-header-whats-new">
        {ICONS.whatsNew}
      </div>
    );
  };

  // Add css for the what's new button.
  const whatsNewClassName: string = "& .bsf-ui-header-whats-new";
  const whatsNewCss = {
    cursor: "pointer",
    "& svg": {
      display: "block",
    },
  };

  headerCss = {
    ...headerCss,
    [whatsNewClassName]: css(whatsNewCss),
  };

  const headerRightContent = (
    <GridContainer
      {...{
        containerType: "flex",
        gap: 16,
        padding: 0,
        alignItems: "center",
        justifyContent: "flex-end",
        className: "bsf-ui-header-right-content",
      }}
    >
      {navRightContent.items.map((item, index) => {
        if (item.version) {
          return versionContent(item.version);
        } else if (item.separator) {
          return separatorContent();
        } else if (item.supportLink) {
          return supportLinkContent(item.supportLink);
        } else if (item.whatsNew) {
          return whatsNewContent(item.whatsNew);
        }
      })}
    </GridContainer>
  );

  const wrapperPrefixClass = getPrefix() + "admin-header";

  const headerClass = css(headerCss);

  const containerProps = {
    gap: 0,
    numberOfColumn: 2,
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
    className: `${wrapperPrefixClass} ${headerClass} ${className}`,
  };

  return (
    <GridContainer {...containerProps}>
      {headerLeftContent}
      {headerRightContent}
    </GridContainer>
  );
};

export default AdminHeader;
