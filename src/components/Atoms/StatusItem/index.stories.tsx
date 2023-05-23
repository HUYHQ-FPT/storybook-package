import type { Meta, StoryObj } from "@storybook/react";
import StatusItem from "./index";

const meta: Meta<typeof StatusItem> = {
  title: "RND/Atoms/StatusItem",
  component: StatusItem,
  tags: ["autodocs"],
  argTypes: {
    status: {
      options: ["ready", "abscent", "not-disturb", "no-activity", "offline"],
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Ready: Story = {
  args: {
    status: "ready",
  },
};

export const Abscent: Story = {
  args: {
    status: "abscent",
  },
};

export const NotDisturb: Story = {
  args: {
    status: "not-disturb",
  },
};

export const NotActivity: Story = {
  args: {
    status: "no-activity",
  },
};

export const Offline: Story = {
  args: {
    status: "offline",
  },
};
