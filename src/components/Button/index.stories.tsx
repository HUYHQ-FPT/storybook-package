import type { Meta, StoryObj } from "@storybook/react";

import MyButton from "./index";

const meta = {
  title: "Example/MyButton",
  component: MyButton,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof MyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
