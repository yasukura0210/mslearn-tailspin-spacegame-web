import { test, expect } from '@playwright/test';

test('test', async ({ page, browserName}) => {
  // await page.goto('https://www.google.com/?hl=ja');
  //await page.getByLabel('検索', { exact: true }).click();
  //await page.getByLabel('検索', { exact: true }).press('ArrowDown');
  //await page.getByLabel('検索', { exact: true }).fill('');
  //await page.frameLocator('iframe[name="callout"]').getByLabel('ログインしない').click();
  //await page.getByLabel('検索', { exact: true }).click();
  //await page.getByLabel('検索', { exact: true }).click();
  // await page.goto('https://www.google.com/search?hl=ja&q=TEST');
  // await page.getByRole('combobox', { name: '検索' }).click();
  await Promise.all([
    // page.waitForNavigation(),
    // page.getByRole('combobox', { name: '検索' }).fill('')
    page.goto('https://www.google.com/search?hl=ja&q=PlayWright')
  ]);
  await page.screenshot({ path:`test/${browserName}.png` });
});