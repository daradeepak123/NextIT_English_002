import { test } from '@playwright/test';

test('WebTable learn', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/tables');

    let user: string = "Doe";

    let dueAmount = page.locator("//table[@id='table1']//td[text()='" + user + "']//following-sibling::td[3]")
    let dueAmountText = await dueAmount.textContent();
    console.log("Due amount for " + user + " is : " + dueAmountText);


    let rows = page.locator("//table[@id='table1']//tbody//tr")
    console.log("Total rows in table are : " + await rows.count());
    let col = page.locator("//table[@id='table1']//tbody//tr[1]/td")
    console.log(await col.count())

    let sm: string = await page.locator("//table[@id='table1']//tbody//tr[1]/td[1]").innerText();
    console.log(sm)

    for (let i = 1; i < await rows.count(); i++) {
        for (let j = 1; j < await rows.count(); j++) {
            let sm: string = await page.locator("//table[@id='table1']//tbody//tr["+i+"]/td["+j+"]").innerText();
            console.log(sm)
        }
    }



})