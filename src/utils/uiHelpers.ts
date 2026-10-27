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
        await expect(locator).toHaveText(expectedText);
        return locator.innerText();
    }

    static async setText(locator: Locator, text: string): Promise<void> {
        await locator.fill(text);
    }

    static async clickElement(locator: Locator, wait = 3000): Promise<void> {
        await locator.waitFor({ state: 'visible', timeout: wait });
        await locator.click();
    }

    static async selectDropdownOption(
        locator: Locator,
        optionValue: string,
    ): Promise<void> {
        await locator.selectOption(optionValue);
    }

}