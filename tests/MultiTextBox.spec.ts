import { test, expect } from '@playwright/test';

function generateRandomText(prefix = 'test') {
    const randomPart = Math.random().toString(36).substring(2, 8);
    return `${prefix}${Date.now()}${randomPart}`;
}

test('Handle Radio Button', async ({ page }) => {

await page.goto('https://demo.automationtesting.in/Register.html');

const TBs = page.locator('//input');
console.log("Total text boxes are : "+await TBs.count());
for (let i=0;i<4;i++){

    const TB = TBs.nth(i);
    const randomText = generateRandomText('TestThis');
    await TB.clear()
    await TB.fill(randomText);
}


await page.pause()

})