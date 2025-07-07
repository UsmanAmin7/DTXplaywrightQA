import { test } from '../utils/testSetup.js';
import { ExplorerPage } from '../pages/ExplorerPage';

test('Explore UID', async ({ page }) => {
  test.setTimeout(80000); // ✅ Set test-specific timeout
  const explorerPage = new ExplorerPage(page);
  await explorerPage.navigate();
  await explorerPage.exploreUID('DFRX48RM');
});
