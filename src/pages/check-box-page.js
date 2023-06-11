import config from '../utils/config';
import checkBoxData from '../utils/fixtures/checkBox.json';

export class CheckBoxPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        // form data fixture
        this.page = page;
        this.url = `${config.baseUrl}/check-box`

        // locators
        this.expandAllButton = 'button[aria-label="Expand all"]';
        this.collapseAllButton = 'button[aria-label="Collapse all"]';

        this.actionButtons = [
            this.expandAllButton,
            this.collapseAllButton
        ]

        this.checkBoxItems = Object.values(checkBoxData)
    }

    async navigate() {
        await this.page.goto(this.url);
    }

    async expandAllItems() {
        await this.expandAllButton.click();
    }

    async collapseAllItems() {
        await this.collapseAllButton.click();
    }
}
