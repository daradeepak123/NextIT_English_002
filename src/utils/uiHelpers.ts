import { expect, Locator, Browser, BrowserContext } from '@playwright/test';

export class UIHelper {

    static async createContextWithVideo(browser: Browser): Promise<BrowserContext> {
        const context = await browser.newContext({
            recordVideo: {
                dir: 'videos/',
                size: { width: 1280, height: 720 }
            }
        });

        return context;
    }
    static generateRandomText(prefix = 'test') {
        const randomPart = Math.random().toString(36).substring(2, 8);
        return `${prefix}${Date.now()}${randomPart}`;
    }

    static async isReady(locator: Locator): Promise<boolean> {
        await expect(locator).toBeVisible();
        return (await locator.isVisible()) && (await locator.isEnabled());
    }

    static async verifyHeading(locator: Locator, expectedText: string):Promise<string> {
        
        if (await this.isReady(locator)) {
            const actualText = await locator.innerText();
            console.log('Heading Text:', actualText);
            await expect(locator).toHaveText(expectedText);
            return actualText
        } else {
            console.log('Heading is not visible or enabled');
            return 'noData'
        }
        
    }


    static async setText(locator: Locator, text: string) {

        if (await this.isReady(locator)) {
            await locator.clear();
            await locator.fill(text);
        }
        else {
            console.log('Textbox is not visible or enabled');
        }
    }

    static async clickElement(locator: Locator, wait: number = 3000) {
        await locator.waitFor({ state: 'visible', timeout: wait });
        if (await this.isReady(locator)) {
            await locator.click();
        } else {
            console.log('Element is not visible or enabled');
        }
    }

    static async selectDropdownOption(locator: Locator, optionValue: string) {
        if (await this.isReady(locator)) {
            await locator.selectOption(optionValue);
            const selectedOption = await locator.inputValue();
            console.log('Selected Option:', selectedOption);
        } else {
            console.log('Dropdown is not visible or enabled');
        }
    }

}