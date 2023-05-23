import { message } from "antd";
import type { Meta, StoryObj } from "@storybook/react";

import SelectItem from "./index";

const meta: Meta<typeof SelectItem> = {
  title: "RND/Atoms/SelectItem",
  component: SelectItem,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultValue: StoryObj = {
  args: {
    value: "1",
    listTeamPermission: [
      { id: "1", name: "test1" },
      { id: "2", name: "test2" },
    ],
    handleNew: (value: string) => {
      message.info(value);
    },
    handleDelete: (value: string) => {
      message.info(value);
    },
  },
};
