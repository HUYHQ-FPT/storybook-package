import type { Meta, StoryObj } from "@storybook/react";
import FilterNumber from "./index";

const meta: Meta<typeof FilterNumber> = {
  title: "RND/Atoms/FilterNumber",
  component: FilterNumber,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ViewStory: Story = {
  args: {
    title: "Thời gian phát sinh",
    handleValues: (values) => {
      console.log(values);
    },
  },
};
