import type { Meta, StoryObj } from "@storybook/react";
import ButtonShare from "./index";

const meta: Meta<typeof ButtonShare> = {
  title: "RND/Atoms/ButtonShare",
  component: ButtonShare,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    handleUserTransfer: (e) => {
      console.log("handelUserTransfer", e);
    },
    onClickChangeCall: (e) => {
      console.log("onClickChangeCall", e);
    },
    listTransfer: [{ id: "1", label: "test", value: "12021" }],
  },
};
