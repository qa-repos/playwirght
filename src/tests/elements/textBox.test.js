const { test, expect } = require('@playwright/test');
const { TextBoxPage } = require('../../pages/text-box-page');
import config from '../../utils/config';

const textBoxPageURL = `${config.baseUrl}/text-box`

test.beforeEach(() => {
    // add some pretest stuff here
});

test('should display all the "Text Box" page elements',  async ({ page }) => {
    const textBoxPage = new TextBoxPage(page);
    await textBoxPage.navigate();
    await expect(page).toHaveURL(textBoxPageURL);
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

test('should successfully fill in the text box page form', async ({ page }) => {
    const textBoxPage = new TextBoxPage(page);
    await textBoxPage.navigate();
    await expect(page).toHaveURL(textBoxPageURL);
    await textBoxPage.fillInTheFormAndSubmit();
    await expect(textBoxPage.outputDiv).toBeVisible()
    await expect(textBoxPage.outputDiv).toContainText(`Name:${textBoxPage.fullName}`)
    await expect(textBoxPage.outputDiv).toContainText(`Email:${textBoxPage.email}`)
    await expect(textBoxPage.outputDiv).toContainText(`Current Address:${textBoxPage.currentAddress}`)
    await expect(textBoxPage.outputDiv).toContainText(`Permanent Address:${textBoxPage.permanentAddress}`)
});
