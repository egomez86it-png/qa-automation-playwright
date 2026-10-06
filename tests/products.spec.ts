import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test.describe('Products and Cart', () => {

  test('Agregar un producto al carrito', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(productsPage.productsTitle).toBeVisible();

    await productsPage.addFirstProductToCart();

    await expect(productsPage.cartBadge).toHaveText('1');

    await productsPage.openCart();

    await expect(page.getByText('Your Cart')).toBeVisible();
    await expect(page.locator('.cart_item')).toHaveCount(1);
  });

});