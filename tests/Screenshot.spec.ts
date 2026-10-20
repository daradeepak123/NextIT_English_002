import { test } from '@playwright/test';
import { UIHelper } from '../src/utils/uiHelpers';

test('Take screenshot', async ({ page }, testInfo) => {
  await page.goto('https://the-internet.herokuapp.com/');

  await page.screenshot({path: testInfo.outputPath(`the-internet-homepage-${UIHelper.generateRandomText()}.png`), fullPage: true});
});