import { test } from '@playwright/test';

test('lost-pixel e2e', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://172.17.0.1:3000/context');
  await page.click('data-test-id=context-click-counter');
  await page.click('data-test-id=context-click-counter');
  await page.click('data-test-id=context-click-counter');
  await page.click('data-test-id=context-click-counter');
  await page.screenshot({ path: 'lost-pixel/a.png', fullPage: true });
});
