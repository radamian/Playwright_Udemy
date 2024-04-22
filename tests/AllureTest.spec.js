const { test, expect } = require('@playwright/test');
const allure = require('allure-commandline');

test.describe('Tests for different websites', () => {
    test('Test1', async ({ page }) => {
        allure.description('Test for demoblaze website');
        await page.goto('https://www.demoblaze.com/index.html');
        await expect(page).toHaveTitle('STORE');
    })

    test('Test2', async ({ page }) => {
        allure.description('Test for opencart website');
        await page.goto('https://demo.opencart.com/');
        await expect(page).toHaveTitle('Your Store');
    })

    test('Test3', async ({ page }) => {
        allure.description('Test for nopcommerce website');
        await page.goto('https://demo.nopcommerce.com/');
        await expect(page).toHaveTitle('nopCommerce demo stor');
    })
}