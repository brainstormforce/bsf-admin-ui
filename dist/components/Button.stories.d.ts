/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: (props: {
        children: import("react").ReactNode;
        onClick?: (() => void) | undefined;
        className?: string | undefined;
        style?: import("react").CSSProperties | undefined;
        size?: "small" | "medium" | "large" | undefined;
        isLoading?: boolean | undefined;
    }) => import("react").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        size: {
            control: {
                type: "select";
                options: string[];
            };
        };
        isLoading: {
            control: {
                type: "boolean";
            };
        };
        style: {
            control: {
                type: "object";
            };
        };
        children: {
            control: {
                type: "text";
            };
        };
        className: {
            control: {
                type: "text";
            };
        };
        onClick: {
            action: string;
        };
    };
    args: {
        onClick: import("@vitest/spy").Mock<[], void>;
        children: string;
        size: "medium";
        isLoading: false;
        style: {};
        className: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const medium: Story;
export declare const small: Story;
