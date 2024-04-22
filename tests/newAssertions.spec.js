const { test, expect } = require('@playwright/test');
test('Home Page', async ({ page }) => {
    try {
      // Open the URL
      await page.goto('https://demo.nopcommerce.com/register');
  
      // 1) Page has URL
      await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
  
      // 2) Page has title
      await expect(page).toHaveTitle('this should fail'); // hard assertion
  
      // If the assertion above fails, the code execution will stop here
      // and the catch block will handle the error.
  
      // Remaining assertions will not execute if the above assertion fails.
  
      // 3) Element is visible : Check logo visibility on page
      const logoElement = await page.locator('.header-logo img');
      await expect(logoElement).toBeVisible();
  
      // Remaining assertions...
  
    } catch (error) {
      // Handle the error
      console.error('Test failed:', error);
    } finally {
      // Close the page
      await page.close();
    }
  });
  