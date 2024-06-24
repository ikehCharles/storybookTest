import "../src/index.css";

/** @type { import('@storybook/react').Preview } */
const preview = {
    parameters: {
        actions: {},
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },

    tags: ["autodocs"]
};

export default preview;