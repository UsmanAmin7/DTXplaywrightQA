import { test } from '../utils/testSetup.js';
import { OrderPage } from '../pages/OrderPage';

test('Create a new order', async ({ page }) => {
  const orderPage = new OrderPage(page);
  await orderPage.navigate();
  await orderPage.createOrder();
});
