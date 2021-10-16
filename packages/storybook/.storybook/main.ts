export default {
    stories: [
        "../stories/**/*.stories.mdx",
         "../../../packages/**/stories/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials"
    ],
}