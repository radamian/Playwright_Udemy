import { test, expect } from '@playwright/test';

test('page screenshot', async ({ page }) => {
  await page.goto('https://demo.opencart.com/');
  await page.screenshot({ path: 'tests/screenshots/'+Date.now()+'HomePage.png' });
});

test('Full page screenshot', async ({ page }) => {
  await page.goto('https://demo.opencart.com/');
  await page.screenshot({ path: 'tests/screenshots/'+Date.now()+'FullHomePage.png',fullPage: true});
});

test('Element screenshot', async ({ page }) => {
  await page.goto('https://demo.opencart.com/');
  await page.locator('//*[@id="content"]/div[2]').screenshot({ path: 'tests/screenshots/'+Date.now()+'FeaturedProducts.png'});
});