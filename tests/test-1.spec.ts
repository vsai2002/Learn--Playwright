import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://login.microsoftonline.com/deloitte.onmicrosoft.com/oauth2/v2.0/authorize?client_id=fbae5dea-8cff-41e8-a653-57879dbf2d26&scope=openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Fq-tieout.aaps.deloitte.com%2Fauthsuccess&client-request-id=8b885515-e773-41e8-b313-0b57041ef46c&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=2.39.0&client_info=1&code_challenge=_pGIhablDuonebYbHaccPeYP3EhH_IN1mjhMZg2ROZw&code_challenge_method=S256&nonce=56ceb2ce-3b3f-40f3-a463-d795f3e95aeb&state=eyJpZCI6Ijg4NzVmOWIxLTc5NzUtNDgyMi1iMDYwLTNkNWQwMDYzNmRlMCIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D&sso_reload=true');
  await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).click();
  await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).fill('vsaichandra@deloitte.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Enter the password for' }).click();
  await page.getByRole('textbox', { name: 'Enter the password for' }).fill('MVNSC@7a9!');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.goto('https://q-tieout.aaps.deloitte.com/');
  await page.getByRole('button', { name: 'Create new project' }).click();
  await page.getByRole('textbox', { name: 'Project name' }).click({
    modifiers: ['Shift']
  });
  await page.getByRole('textbox', { name: 'Project name' }).fill('Test_automation');
  await page.getByRole('searchbox', { name: 'Client name, engagement name' }).click();
  await page.getByRole('searchbox', { name: 'Client name, engagement name' }).fill('mat');
  await page.locator('#data-grid').getByText('MAT-US-696945-').click();
  await page.getByRole('searchbox', { name: 'Search user' }).click();
  await page.getByRole('searchbox', { name: 'Search user' }).fill('umothe');
  await page.getByText('Mothe, Udaya…').click();
  await page.locator('div').filter({ hasText: /^Select role$/ }).nth(3).click();
  12
});

