

import { test} from '../utils/testSetup';
import { expect } from '@playwright/test';
import { ProgramPage } from '../pages/ProgramPage';

test('Create Program Flow - End to End', async ({ page }) => {
  // Increased timeout to handle network + UI delays
  test.setTimeout(180000); // 3 minutes

  const programPage = new ProgramPage(page);

  // Optional: add a unique name to avoid duplication conflicts
  const uniqueName = `Automated Program Testing`;

  try {
    await programPage.navigate();
    await programPage.createProgram(uniqueName, 'Program created for testing using Automation scripts');
    
    // Optional: add an assertion if the app shows success message
    // await expect(page.getByText('Program created successfully')).toBeVisible({ timeout: 10000 });

  } catch (error) {
    // Optional: capture screenshot on failure
    await page.screenshot({ path: 'errors/program-creation-failure.png', fullPage: true });
    throw error; // Re-throw to fail the test properly
  }
});
