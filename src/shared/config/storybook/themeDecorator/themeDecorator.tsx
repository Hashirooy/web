import { Story } from "@storybook/react";
import { Theme } from "app/provider/ThemeProvider";

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
  return (
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  );
};
