import type { Locator } from "@playwright/test";

export async function retriveDataFromWebElement(ele:Locator):Promise<string>
{
    let flag:boolean = await ele.isVisible();
    flag &&= await ele.isEnabled();

    if(flag)
    {
        let str:string= await ele.innerText()
        return str;
    }
    else{
    return "Not visible or not enabled";
    }
}

export async function sendDataToTB(ele:Locator, data:string)
{
    let flag:boolean = await ele.isVisible();
    flag &&= await ele.isEnabled();

    if(flag)
    {
        await ele.fill(data);
    }
    else{
    console.log("Not visible or not enabled");
    }
}


export async function clickOperation(ele:Locator)
{
    let flag:boolean = await ele.isVisible();
    flag &&= await ele.isEnabled();

    if(flag)
    {
        ele.click();
    }
    else{
    console.log("Not visible or not enabled");
    }
}