import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('Checkout', () => {

  test('Completar una compra exitosamente', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const checkoutPage = new CheckoutPage(page);

    // Login
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');

    // Agregar producto
    await productsPage.addFirstProductToCart();

    // Ir al carrito
    await productsPage.openCart();

    // Iniciar checkout
    await checkoutPage.startCheckout();

    // Completar información del cliente
    await checkoutPage.fillCustomerInformation(
      'Emiliano',
      'QA',
      '1000'
    );

    // Continuar al resumen
    await checkoutPage.continueToOverview();

    // Validar pantalla de resumen
    await expect(checkoutPage.overviewTitle).toBeVisible();

    // Finalizar compra
    await checkoutPage.finishOrder();

    // Validar confirmación
    await expect(checkoutPage.confirmationMessage).toBeVisible();
  });

  test('Checkout rechazado cuando falta el nombre', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const checkoutPage = new CheckoutPage(page);

    // Login
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');

    // Agregar producto
    await productsPage.addFirstProductToCart();

    // Ir al carrito
    await productsPage.openCart();

    // Iniciar checkout
    await checkoutPage.startCheckout();

    // Completar datos dejando vacío el nombre
    await checkoutPage.fillCustomerInformation(
      '',
      'QA',
      '1000'
    );

    // Intentar continuar
    await checkoutPage.continueToOverview();

    // Validar mensaje de error
    await expect(
      page.getByText('Error: First Name is required')
    ).toBeVisible();
  });
});