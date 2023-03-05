const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    use: {
        headless: false,
        viewport: { width: 1920, height: 1080 },
        ignoreHTTPSErrors: true
    },
});