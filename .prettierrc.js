/** @type {import('prettier').Config} */
const config = {
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    useTabs: false,
    singleAttributePerLine: true,
    overrides: [
        {
            files: ['*.{json,yml,yaml}'],
            options: {
                tabWidth: 2,
            },
        },
    ],
};
module.exports = config;
