import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    isLoading: {
      control: {
        type: "boolean",
      },
    },
    style: {
      control: {
        type: "object",
      },
    },
    children: {
      control: {
        type: "text",
      },
    },
    className: {
      control: {
        type: "text",
      },
    },
    onClick: {
      action: "clicked",
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    onClick: fn(),
    children: "Button",
    size: "medium",
    isLoading: false,
    style: {},
    className: "",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const medium: Story = {
  args: {
    size: "medium",
    children: "Button",
  },
};

export const small: Story = {
  args: {
    size: "small",
    children: "Button",
  },
};