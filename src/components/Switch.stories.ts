import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Switch from "./Switch";

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: "Components/Switch",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const SwitchSurerank: Story = {
  args: {
    checked: true,
    onClick: () => {},
    disabled: false,
    size: "large",
    onColor: "#6B21A8",
    offColor: "#ccc",
    thumbColor: "#fff",
    label: "Switch",
    labelPosition: "right",
    labelGap: 8,
    description: "Description",
    descriptionGap: 8,
  },
};

export const SwitchSureforms: Story = {
  args: {
    checked: true,
    onClick: () => {},
    disabled: false,
    size: "large",
    onColor: "#d54407",
    offColor: "#ccc",
    thumbColor: "#fff",
    label: "Switch",
    labelPosition: "right",
    labelGap: 8,
    description: "Description",
    descriptionGap: 8,
  },
};
