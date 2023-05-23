import { ComponentMeta, ComponentStory } from "@storybook/react";
import type { Meta, StoryObj } from "@storybook/react";
import StatusSystem from "./index";

const meta: Meta<typeof StatusSystem> = {
  title: "RND/Atoms/StatusSystem",
  component: StatusSystem,
  tags: ["autodocs"],
  argTypes: {
    type: {
      options: ["ok", "warning", "critical"],
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "ok",
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
  },
};

export const Critical: Story = {
  args: {
    type: "critical",
  },
};
