import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Header from "./Header"; // Import your Header component
import { ICONS } from "../utility"; // Assuming ICONS are imported from utility

const meta: Meta<typeof Header> = {
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const FirstHeader: Story = {
  args: {
    logo: ICONS.LoderCircle,
    className: "surerank-header",
    breadcrumbs: [{ title: "Home" }, { title: "Dashboard" }, { title: "Current Page" }],
    navRightContent: {
      gap: "16px",
      // items: [],
      items: [
        {
          type: "label-group",
          gap: "8px",
          items: [
            { type: "text", content: "V 4.0.0" },
            { type: "badge", content: "Core" },
          ],
          separator: true,
        },
        {
          type: "label-group",
          gap: "20px",
          items: [
            {
              type: "icon",
              icon_key: "support",
            },
            { type: "icon", icon_key: "whatsNew" }, // Add functionality if needed
          ],
        },
      ],
    },
  },
};
