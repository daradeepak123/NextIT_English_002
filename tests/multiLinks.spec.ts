import { test, expect } from '@playwright/test';


test('Multi links', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');

    let links=page.locator('//a')
    console.log(await links.count())

    for(let i=0;i<await links.count();i++)
    {
        console.log(await links.nth(i).innerText())
    }


  
});