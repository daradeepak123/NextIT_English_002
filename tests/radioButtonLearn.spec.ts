
import { test, expect } from '@playwright/test';
import { clickOperation, retriveDataFromWebElement, sendDataToTB } from '../src/utils/uitls';


test('Radio Button Test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/radio_buttons');
    let redRB=page.locator("//input[@id='red']")
   await redRB.check()
   await page.waitForTimeout(2000)
  

});
