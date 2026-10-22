import { test, expect } from '@playwright/test';
import {clickOperation, retriveDataFromWebElement, sendDataToTB} from '../src/utils/uitls';


test('Hyper Link Test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');

  let abTestLink=page.getByRole('link', { name: 'A/B Testing' })

  await clickOperation(abTestLink);
    await page.waitForTimeout(2000);
    let heading =page.getByRole('heading', { name: 'A/B Test Control' })
    console.log("Heading is : "+await retriveDataFromWebElement(heading));
});