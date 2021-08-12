import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: `Button`,
  component: Button,
} as ComponentMeta<typeof Button>;

type ButtonStory = ComponentStory<typeof Button>;

// tailwind should not include translate-x-8 in final build
const Template: ButtonStory = (args) => (
  <Button className="translate-x-8" {...args} />
);

export const NoIcon: ButtonStory = Template.bind({});
NoIcon.args = {
  children: "Click me",
};
