import type { Locator } from "@playwright/test";

export async function retriveDataFromWebElement(ele:Locator):Promise<string>
{
    return ele.innerText();
}

export async function sendDataToTB(ele:Locator, data:string)
{
    await ele.fill(data);
}


export async function clickOperation(ele:Locator)
{
    await ele.click();
}