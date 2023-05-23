import type { Meta, StoryObj } from "@storybook/react";
import ButtonCall from "./index";

const meta: Meta<typeof ButtonCall> = {
  title: "RND/Atoms/ButtonCall",
  component: ButtonCall,
  tags: ["autodocs"],
  argTypes: {
    type: {
      options: ["reveice", "hang-up", "mute", "un-mute", "pause", "play"],
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ReceiveCall: Story = {
  args: {
    type: "reveice",
    onClick: () => {
      console.log("reveice");
    },
  },
};

export const HangUpCall: Story = {
  args: {
    type: "hang-up",
    onClick: () => {
      console.log("hangUp");
    },
  },
};

export const PlayCall: Story = {
  args: {
    type: "play",
    onClick: () => {
      console.log("play");
    },
  },
};

export const PauseCall: Story = {
  args: {
    type: "pause",
    onClick: () => {
      console.log("pause");
    },
  },
};

export const MuteCall: Story = {
  args: {
    type: "mute",
    onClick: () => {
      console.log("mute");
    },
  },
};

export const UnMuteCall: Story = {
  args: {
    type: "un-mute",
    onClick: () => {
      console.log("un-mute");
    },
  },
};
