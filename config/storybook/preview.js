import { StyleDecorator } from "shared/config/storybook/styleDecorator/styleDecorator";
import { ThemeDecorator } from "shared/config/storybook/themeDecorator/themeDecorator";
import { RouterDecorator } from "shared/config/storybook/routerDecarator/routerDecorator";
import { Theme } from "app/provider/ThemeProvider";

/** @type { import('@storybook/react-webpack5').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

export const decorators = [
  StyleDecorator,
  ThemeDecorator(Theme.LIGHT),
  RouterDecorator,
];
