import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Modal } from "./Modal";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "shared/Modal",
  component: Modal,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  isOpen: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  isOpen: true,
};
Secondary.decorators = [ThemeDecorator(Theme.DARK)];
