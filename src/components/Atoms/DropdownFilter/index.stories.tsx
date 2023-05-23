import type { Meta, StoryObj } from "@storybook/react";
import DropdownFilter from "./index";

const meta: Meta<typeof DropdownFilter> = {
  title: "RND/Atoms/DropdownFilter",
  component: DropdownFilter,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      {
        label: "Hệ thống Server",
        value: 1,
      },
      {
        label: "Hệ thống Server",
        value: 2,
      },
      {
        label: "Hệ thống Server",
        value: 3,
      },
      {
        label: "Hệ thống Server",
        value: 4,
      },
      {
        label: "Hệ thống Server",
        value: 5,
      },
      {
        label: "Hệ thống Server",
        value: 6,
      },
      {
        label: "Hệ thống Server",
        value: 7,
      },
      {
        label: "Hệ thống Server",
        value: 8,
      },
      {
        label: "Hệ thống Server",
        value: 9,
      },
      {
        label: "Hệ thống Server",
        value: 10,
      },
    ],
    open: true,
  },
};
