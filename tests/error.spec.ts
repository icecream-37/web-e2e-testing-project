import { test, expect } from '@playwright/test';

test('login should show error when username is empty', async ({ page }) => {
  await page.goto('/');

  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText(/username is required/i)).toBeVisible();
});

test('login should show error when password is empty', async ({ page }) => {
  await page.goto('/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText(/password is required/i)).toBeVisible();
});

test('login should show error with wrong password', async ({ page }) => {
  await page.goto('/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('wrong_password');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText(/username and password do not match/i)).toBeVisible();
});

test('checkout should show error when first name is empty', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('.shopping_cart_link').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="continue"]').click();

  await expect(page.getByText(/first name is required/i)).toBeVisible();
});
