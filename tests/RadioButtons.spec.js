const {test, expect}=require('@playwright/test')

test('handle radio button',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Radio button
    await page.locator("#male").check(); //male
    //await page.check("#male");
    await expect(await page.locator("//input[@id='male']")).toBeChecked();
    await expect(await page.locator("//input[@value='male']").isChecked()).toBeTruthy();//male
    
   await expect(await page.locator("//input[@value='female']").isChecked()).toBeFalsy(); //female



    await page.waitForTimeout(5000); //pausing code

})