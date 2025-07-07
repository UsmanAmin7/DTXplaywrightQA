import { test } from '../utils/testSetup';
import { ProgramPage } from '../pages/ProgramPage';

test('Program Creation Flow', async ({ page }) => {
  test.setTimeout(60000); // Set test timeout to 60 seconds
  const programPage = new ProgramPage(page);
  await programPage.createProgram('AutomatedProgram', 'Program created for testing using Automation scripts')
});