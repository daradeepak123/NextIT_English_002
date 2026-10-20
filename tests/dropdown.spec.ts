import { test, expect } from '@playwright/test';

test('select an option', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dropdown');

  const dropdown = page.locator('#dropdown');
  await dropdown.selectOption('1'); // Selects Option 1 by value
  await expect(dropdown).toHaveValue('1');
    await page.waitForTimeout(2000);

  await dropdown.selectOption({ label: 'Option 2' }); // Selects by visible text
  await expect(dropdown).toHaveValue('2');
});