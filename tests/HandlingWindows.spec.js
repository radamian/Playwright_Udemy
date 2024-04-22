const { test, expect, chromium } = require('@playwright/test');

test('Handle Pages/Windows', async () => {
    // Launch the browser
    const browser = await chromium.launch();
  
    // Create a new context (a single browsing session)
    const context = await browser.newContext();
  
    // Create two pages
    const page1 = await context.newPage();
    const page2 = await context.newPage();
  
    // Get pages of a browser context
    const allPages = context.pages();
    console.log("No.OF pages created.....",allPages.length)

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page1).toHaveTitle('OrangeHRM')
   
    await page2.goto("https://www.orangehrm.com/")
    await expect(page2).toHaveTitle('OrangeHRM HR Software | Free & Open Source HR Software | HRMS | HRIS | OrangeHRM')

    await page1.waitForTimeout(3000)
    await page2.waitForTimeout(3000)

    await browser.close()
        
  })

/////////////////////////////////////////////////////////////  
  
test.only('Handle multiple Pages/Windows', async () => {
    // Launch the browser
    const browser = await chromium.launch();
  
    // Create a new context (a single browsing session)
    const context = await browser.newContext();
  
    // Create two pages
    const page1 = await context.newPage();
    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    console.log(await page1.title());
    await expect(page1).toHaveTitle('OrangeHRM')

    // Start waiting for new page before clicking. 
    const pagePromise = context.waitForEvent('page');
    await page1.locator('//a[normalize-space()="OrangeHRM, Inc"]').click();
    
    const newPage = await pagePromise;
    console.log(await newPage.title());
    await expect(newPage).toHaveTitle('OrangeHRM HR Software | Free & Open Source HR Software | HRMS | HRIS | OrangeHRM')

    await page1.waitForTimeout(3000)
    await newPage.waitForTimeout(3000)

    await browser.close()
        
  })
