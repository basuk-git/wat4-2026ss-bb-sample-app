import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Increment' }).click();
  await expect(page.getByTestId('counter-value')).toContainText('1');
});