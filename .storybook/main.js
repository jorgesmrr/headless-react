module.exports = {
  stories: ["../src/components/**/*.stories.tsx"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-knobs/register",
    "@storybook/addon-actions",
    "@storybook/addon-links",
  ],
};
