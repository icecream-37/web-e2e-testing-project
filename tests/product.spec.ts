import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();
});

test('product list should be visible after login', async ({ page }) => {
  await expect(page.getByText('Products')).toBeVisible();
  await expect(page.locator('.inventory_item')).toHaveCount(6);
});

test('user can open product detail page', async ({ page }) => {
  await page.getByText('Sauce Labs Backpack').click();

  await expect(page).toHaveURL(/inventory-item/);
  await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
  await expect(page.getByText('$29.99')).toBeVisible();
});

test('user can sort products by price from low to high', async ({ page }) => {
  await page.locator('[data-test="product-sort-container"]').selectOption('lohi');

  await expect(page.locator('.inventory_item_price').first()).toHaveText('$7.99');
});
