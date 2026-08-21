import { test, expect } from '@playwright/test';

test.describe('Book Manager E2E Tests', () => {

  test('login page loads correctly', async ({ page }) => {
    await page.goto('/login');

    await expect(
      page.getByRole('heading', { name: /welcome back/i })
    ).toBeVisible();

    await expect(
      page.getByLabel(/email/i)
    ).toBeVisible();

    await expect(
      page.getByLabel(/password/i)
    ).toBeVisible();

    await expect(
      page.getByRole('button', { name: /sign in/i })
    ).toBeVisible();
  });

  test('login validation works', async ({ page }) => {
    await page.goto('/login');

    await page.getByRole('button', { name: /sign in/i }).click();

    await expect(
      page.getByText(/email is required/i)
    ).toBeVisible();

    await expect(
      page.getByText(/password is required/i)
    ).toBeVisible();
  });

  test('signup page loads correctly', async ({ page }) => {
    await page.goto('/signup');

    await expect(
      page.getByRole('heading', { name: /create|sign up/i })
    ).toBeVisible();
  });

});