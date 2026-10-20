import { test, expect } from '@playwright/test';
import {clickOperation, retriveDataFromWebElement, sendDataToTB} from '../src/utils/uitls';
test('TextBox Test for forgot password', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/forgot_password');

  let heading = page.getByRole('heading', { name: 'Forgot Password' })
  let email= page.getByText('E-mail', { exact: true })

  await expect(heading).toBeVisible();
  await expect(email).toBeVisible();

  let str:string = await retriveDataFromWebElement(email);
  console.log("Text from web element is : "+str);
  
  str = await retriveDataFromWebElement(heading);
  console.log("Text from web element is : "+str);

  let inputBox=page.locator("//input[@id='email']")
  await sendDataToTB(inputBox, "abc@abc.com")
  

  let button=page.locator("//button[@id='form_submit']")
  await clickOperation(button);
await page.waitForTimeout(2000);  
let message=page.locator("//div[@id='content']")

  str=await retriveDataFromWebElement(message);
  console.log("Text from web element is : "+str);



await page.waitForTimeout(2000);

});