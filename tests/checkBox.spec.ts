import { test, expect } from '@playwright/test';
import { clickOperation, retriveDataFromWebElement, sendDataToTB } from '../src/utils/uitls';


test('Checkbox Test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');

    let checkBox1 = page.locator("//form[@id='checkboxes']/input[1]")
    let checkBox2 = page.locator("//form[@id='checkboxes']/input[2]")

    await checkBox1.check()
    await checkBox2.check()
    await page.waitForTimeout(2000)

    await checkBox1.uncheck()
    await checkBox2.uncheck()
    
    await page.waitForTimeout(2000)

});