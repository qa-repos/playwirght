const { test, expect } = require('@playwright/test');
const { TextBoxPage } = require('../../pages/text-box-page');

test.describe('Text Box Page', () => {
    test('should display all the "Text Box" page elements',  async ({ page }) => {
        const textBoxPage = new TextBoxPage(page);
        await textBoxPage.navigate();
        await expect(page).toHaveURL(textBoxPage.url);
        await expect(textBoxPage.fullNameInput).toBeVisible();
        await expect(textBoxPage.emailInput).toBeVisible();
        await expect(textBoxPage.currentAddressInput).toBeVisible();
        await expect(textBoxPage.permanentAddressInput).toBeVisible();
        await expect(textBoxPage.fullNameLabel).toBeVisible();
        await expect(textBoxPage.emailLabel).toBeVisible();
        await expect(textBoxPage.currentAddressLabel).toBeVisible();
        await expect(textBoxPage.permanentAddressLabel).toBeVisible();
        await expect(textBoxPage.submitButton).toBeVisible();
    });

    test('should show output after successfully fill in the text box page form',
        async ({ page }) => {
        const textBoxPage = new TextBoxPage(page);
        const outputString = `Name: ${textBoxPage.fullName}Email: ${textBoxPage.email}Current Address: ${textBoxPage.currentAddress}Permanent Address: ${textBoxPage.permanentAddress}`
        await textBoxPage.navigate();
        await expect(page).toHaveURL(textBoxPage.url);
        await textBoxPage.fillInTheFormAndSubmit();
        await expect(textBoxPage.outputDiv).toBeVisible();
        await expect.soft(textBoxPage.outputDiv).toContainText(outputString)
    });
})
