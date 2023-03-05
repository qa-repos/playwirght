import config from '../utils/config';
import textBoxData from "../utils/fixtures/textBox.json";

const textBoxPageUrl = `${config.baseUrl}/text-box`

exports.TextBoxPage = class TextBoxPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        // form data fixture
        this.page = page;

        // locators
        this.fullNameLabel = page.locator('#userName-label');
        this.emailLabel = page.locator('#userEmail-label');
        this.currentAddressLabel = page.locator('#currentAddress-label');
        this.permanentAddressLabel = page.locator('#permanentAddress-label');
        this.fullNameInput = page.locator('#userName');
        this.emailInput = page.locator('#userEmail');
        this.currentAddressInput = page.locator('#currentAddress');
        this.permanentAddressInput = page.locator('#permanentAddress');
        this.submitButton = page.locator('#submit')
        this.outputDiv = page.locator('#output')

        // form data
        this.fullName = textBoxData.fullName
        this.email = textBoxData.email
        this.currentAddress = textBoxData.currentAddress
        this.permanentAddress = textBoxData.permanentAddress

        this.pageElements = [
            this.fullNameLabel,
            this.emailLabel,
            this.currentAddressLabel,
            this.permanentAddressLabel,
            this.fullNameInput,
            this.emailInput,
            this.currentAddressInput,
            this.permanentAddressInput,
            this.submitButton
        ]
    }

    async navigate() {
        await this.page.goto(textBoxPageUrl);
    }

    async fillInTheFormAndSubmit() {
        await this.fullNameInput.type(this.fullName);
        await this.emailInput.type(this.email);
        await this.currentAddressInput.type(this.currentAddress);
        await this.permanentAddressInput.type(this.permanentAddress);
        await this.submitButton.click()
    }
}
