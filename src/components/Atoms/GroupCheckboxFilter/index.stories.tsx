import type { Meta, StoryObj } from "@storybook/react";
import GroupCheckboxFilter from "./index";

const meta: Meta<typeof GroupCheckboxFilter> = {
  title: "RND/Atoms/GroupCheckboxFilter",
  component: GroupCheckboxFilter,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isSearch: true,
    name: "test",
    title: "Mã ticket",
    options: [
      { label: "Apple", value: "Apple" },
      { label: "Pear", value: "Pear" },
      { label: "Orange", value: "Orange" },
      { label: "Orange", value: "Orange1" },
    ],
  },
};

export const MoreOption: Story = {
  args: {
    isSearch: true,
    name: "test",
    title: "Mã ticket",
    options: [
      { label: "Apple", value: "Apple" },
      { label: "Pear", value: "Pear" },
      { label: "Orange", value: "Orange1" },
      { label: "Orange", value: "Orange2" },
      { label: "Orange", value: "Orange3" },
      { label: "Orange", value: "Orange4" },
      { label: "Pear", value: "Pear1" },
      { label: "Orange", value: "Orange5" },
      { label: "Orange", value: "Orange6" },
      { label: "Orange", value: "Orange7" },
      { label: "Orange", value: "Orange8" },
    ],
  },
};

export const NoSearch: Story = {
  args: {
    isSearch: false,
    name: "test",
    title: "Mã ticket",
    options: [
      { label: "Apple", value: "Apple" },
      { label: "Pear", value: "Pear" },
      { label: "Orange", value: "Orange1" },
      { label: "Orange", value: "Orange2" },
      { label: "Orange", value: "Orange3" },
      { label: "Orange", value: "Orange4" },
      { label: "Pear", value: "Pear1" },
      { label: "Orange", value: "Orange5" },
      { label: "Orange", value: "Orange6" },
      { label: "Orange", value: "Orange7" },
      { label: "Orange", value: "Orange8" },
    ],
  },
};
