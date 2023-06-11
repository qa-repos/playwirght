const { test, expect } = require('@playwright/test');
import { CheckBoxPage } from '../../pages/check-box-page';

test.describe('Check Box Page', () => {
    test('should display "Check Box" page action buttons (Expand/Collapse All)',  async ({ page }) => {
        const checkBoxPage = new CheckBoxPage(page);
        await checkBoxPage.navigate();
        await expect(page).toHaveURL(checkBoxPage.url);
        checkBoxPage.actionButtons.map(async (button) => {
            await page.isVisible(button);
        });
    });
});
